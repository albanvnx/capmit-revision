// Application de révision espacée - Logique principale

// Classe Card pour le système de répétition espacée
class Card {
    constructor(question) {
        this.id = question.id;
        this.question = question;
        this.interval = 0;
        this.repetitions = 0;
        this.easeFactor = 2.5;
        this.nextReview = new Date();
        this.lastReview = null;
        this.status = 'new';
    }

    review(quality) {
        this.lastReview = new Date();

        if (quality < 3) {
            this.repetitions = 0;
            this.interval = 1;
            this.status = 'learning';
        } else {
            if (this.repetitions === 0) {
                this.interval = 1;
                this.status = 'learning';
            } else if (this.repetitions === 1) {
                this.interval = 6;
                this.status = 'review';
            } else {
                this.interval = Math.round(this.interval * this.easeFactor);
                if (this.interval > 30) {
                    this.status = 'mastered';
                } else {
                    this.status = 'review';
                }
            }

            this.repetitions++;
            this.easeFactor = this.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
            if (this.easeFactor < 1.3) this.easeFactor = 1.3;
        }

        this.nextReview = new Date();
        this.nextReview.setDate(this.nextReview.getDate() + this.interval);
    }
}

// Application principale
class SpacedRepetitionApp {
    constructor() {
        this.cards = [];
        this.currentCard = null;
        this.todayCards = [];
        this.currentIndex = 0;
        this.answered = false;
        this.sessionStats = { correct: 0, incorrect: 0, total: 0 };
        this.loadData();
        this.updateDashboard();
        this.showDailyTab();
        this.setupNotifications();
    }

    loadData() {
        const saved = localStorage.getItem('spaced-repetition-data');
        if (saved) {
            const data = JSON.parse(saved);
            this.cards = data.cards.map(c => {
                const card = new Card(allQuestions.find(q => q.id === c.id));
                Object.assign(card, c);
                card.nextReview = new Date(c.nextReview);
                card.lastReview = c.lastReview ? new Date(c.lastReview) : null;
                return card;
            });
        } else {
            this.cards = allQuestions.map(q => new Card(q));
            this.cards.forEach((card, index) => {
                const dayOffset = Math.floor(index / 15);
                card.nextReview = new Date();
                card.nextReview.setDate(card.nextReview.getDate() + dayOffset);
            });
        }
    }

    saveData() {
        const data = {
            cards: this.cards,
            lastSession: new Date()
        };
        localStorage.setItem('spaced-repetition-data', JSON.stringify(data));
    }

    getTodayCards() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return this.cards.filter(card => {
            const reviewDate = new Date(card.nextReview);
            reviewDate.setHours(0, 0, 0, 0);
            return reviewDate <= today;
        }).sort((a, b) => a.nextReview - b.nextReview);
    }

    getStreak() {
        const sessions = JSON.parse(localStorage.getItem('daily-sessions') || '[]');
        let streak = 0;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = 0; i < 30; i++) {
            const checkDate = new Date(today);
            checkDate.setDate(checkDate.getDate() - i);
            const dateStr = checkDate.toISOString().split('T')[0];
            if (sessions.includes(dateStr)) {
                streak++;
            } else if (i > 0) {
                break;
            }
        }
        return streak;
    }

    recordSession() {
        const sessions = JSON.parse(localStorage.getItem('daily-sessions') || '[]');
        const today = new Date().toISOString().split('T')[0];
        if (!sessions.includes(today)) {
            sessions.push(today);
            localStorage.setItem('daily-sessions', JSON.stringify(sessions));
        }
    }

    updateDashboard() {
        this.todayCards = this.getTodayCards();
        document.getElementById('today-count').textContent = this.todayCards.length;
        document.getElementById('streak-count').textContent = this.getStreak();
        document.getElementById('mastered-count').textContent =
            this.cards.filter(c => c.status === 'mastered').length;
        document.getElementById('learning-count').textContent =
            this.cards.filter(c => c.status === 'learning' || c.status === 'review').length;
    }

    startSession() {
        this.todayCards = this.getTodayCards();
        if (this.todayCards.length === 0) {
            this.showNoQuestionsMessage();
            return;
        }
        this.currentIndex = 0;
        this.sessionStats = { correct: 0, incorrect: 0, total: 0 };
        this.showQuestion();
    }

    showQuestion() {
        if (this.currentIndex >= this.todayCards.length) {
            this.showSessionComplete();
            return;
        }

        this.answered = false;
        this.currentCard = this.todayCards[this.currentIndex];
        const question = this.currentCard.question;
        const progress = ((this.currentIndex + 1) / this.todayCards.length) * 100;

        // Image HTML si présente
        const imageHTML = question.image ? `
            <div style="margin-bottom: 20px; text-align: center;">
                <img src="${question.image}"
                     alt="${question.imageAlt || question.question}"
                     style="max-width: 100%; height: auto; border-radius: 12px;
                            box-shadow: 0 2px 8px rgba(0,0,0,0.1); cursor: pointer;"
                     onclick="this.style.transform = this.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)'; this.style.transition = 'transform 0.3s';">
            </div>
        ` : '';

        // Badge de difficulté si présent
        const difficultyBadge = question.difficulty ? `
            <span style="
                background: ${
                    question.difficulty === 'easy' ? '#6bcf7f' :
                    question.difficulty === 'medium' ? '#ffd93d' : '#ff6b6b'
                };
                color: ${question.difficulty === 'medium' ? '#333' : 'white'};
                padding: 5px 12px;
                border-radius: 12px;
                font-size: 0.8em;
                font-weight: bold;
                margin-left: 10px;
            ">
                ${
                    question.difficulty === 'easy' ? '😊 Facile' :
                    question.difficulty === 'medium' ? '🤔 Moyen' : '😰 Difficile'
                }
            </span>
        ` : '';

        document.getElementById('daily-tab').innerHTML = `
            <div style="text-align: center; margin-bottom: 15px; color: #666; font-size: 0.9em;">
                Question ${this.currentIndex + 1} sur ${this.todayCards.length}
            </div>

            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>

            <div class="question-card">
                <div class="category-badge">${question.category}${difficultyBadge}</div>

                ${imageHTML}

                <div class="question-text">${question.question}</div>

                <div class="answers">
                    ${question.answers.map((answer, index) => `
                        <button class="answer-btn" onclick="app.selectAnswer(${index})">
                            ${answer}
                        </button>
                    `).join('')}
                </div>

                <div id="feedback"></div>
            </div>
        `;
    }

    selectAnswer(index) {
        if (this.answered) return;
        this.answered = true;

        const question = this.currentCard.question;
        const isCorrect = index === question.correct;

        this.sessionStats.total++;
        if (isCorrect) {
            this.sessionStats.correct++;
        } else {
            this.sessionStats.incorrect++;
        }

        const answerButtons = document.querySelectorAll('.answer-btn');
        answerButtons.forEach((btn, i) => {
            btn.classList.add('disabled');
            if (i === question.correct) {
                btn.classList.add('correct');
            } else if (i === index) {
                btn.classList.add('incorrect');
            }
        });

        const feedback = document.getElementById('feedback');
        feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        feedback.innerHTML = `
            <strong>${isCorrect ? '✅ Correct !' : '❌ Incorrect'}</strong><br>
            ${question.explanation}
            ${question.keyPoints ? '<br><br><strong>Points clés :</strong><ul>' +
                question.keyPoints.map(p => `<li>${p}</li>`).join('') + '</ul>' : ''}

            <div style="margin-top: 20px; padding-top: 15px; border-top: 2px solid #ddd;">
                <strong>Difficulté de cette question ?</strong>
                <div class="difficulty-buttons">
                    <button class="difficulty-btn hard" onclick="app.rateCard(0)">
                        😰 Difficile<br><small>Demain</small>
                    </button>
                    <button class="difficulty-btn medium" onclick="app.rateCard(3)">
                        🤔 Moyen<br><small>${isCorrect ? '6j' : '2j'}</small>
                    </button>
                    <button class="difficulty-btn easy" onclick="app.rateCard(5)">
                        😊 Facile<br><small>Plus tard</small>
                    </button>
                </div>
            </div>
        `;
    }

    rateCard(quality) {
        this.currentCard.review(quality);
        this.saveData();
        this.currentIndex++;
        this.updateDashboard();

        setTimeout(() => {
            this.showQuestion();
        }, 300);
    }

    showSessionComplete() {
        this.recordSession();
        const percentage = Math.round((this.sessionStats.correct / this.sessionStats.total) * 100);

        let message = '';
        if (percentage >= 80) {
            message = "Excellent ! Vous maîtrisez très bien ! 🏆";
        } else if (percentage >= 60) {
            message = "Bien joué ! Continuez ! 👍";
        } else {
            message = "Courage ! La répétition est la clé ! 💪";
        }

        const nextCards = this.getTodayCards();
        const nextDate = nextCards.length > 0 ?
            "Il reste des questions aujourd'hui !" :
            `Prochaine session demain !`;

        document.getElementById('daily-tab').innerHTML = `
            <div class="session-complete">
                <div class="emoji">🎉</div>
                <h2>Session terminée !</h2>
                <p style="font-size: 1.1em; color: #666; margin: 15px 0;">${message}</p>

                <div class="stats-grid">
                    <div class="stat-box">
                        <div class="stat-label">Réussite</div>
                        <div class="stat-value">${percentage}%</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-label">Correctes</div>
                        <div class="stat-value">${this.sessionStats.correct}</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-label">À revoir</div>
                        <div class="stat-value">${this.sessionStats.incorrect}</div>
                    </div>
                </div>

                <div class="info-box">
                    <strong>📅 ${nextDate}</strong>
                </div>

                <button class="btn-primary" onclick="app.showDailyTab()">Retour</button>
            </div>
        `;

        this.updateDashboard();
    }

    showNoQuestionsMessage() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        document.getElementById('daily-tab').innerHTML = `
            <div class="empty-state">
                <div class="emoji">🎉</div>
                <h3>Félicitations !</h3>
                <p>Toutes vos révisions sont faites !</p>
                <p style="margin-top: 15px;">
                    <strong>Prochaine session :</strong><br>
                    ${tomorrow.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                </p>
            </div>
        `;
    }

    showDailyTab() {
        this.todayCards = this.getTodayCards();

        if (this.todayCards.length === 0) {
            this.showNoQuestionsMessage();
        } else {
            document.getElementById('daily-tab').innerHTML = `
                <h2 style="margin-bottom: 15px;">🌅 Révision du jour</h2>
                <div class="info-box">
                    <strong>${this.todayCards.length} question${this.todayCards.length > 1 ? 's' : ''}</strong>
                    à réviser aujourd'hui.
                    <br><br>
                    Le système adaptera les prochaines révisions selon vos réponses ! 🎯
                </div>
                <button class="btn-primary" onclick="app.startSession()">
                    Commencer (${this.todayCards.length} questions)
                </button>
            `;
        }
    }

    showFlashcards() {
        const difficultCards = this.cards
            .filter(c => c.status === 'learning' || (c.lastReview && c.repetitions < 3))
            .sort((a, b) => a.repetitions - b.repetitions)
            .slice(0, 20);

        if (difficultCards.length === 0) {
            document.getElementById('flashcards-tab').innerHTML = `
                <div class="empty-state">
                    <div class="emoji">✨</div>
                    <h3>Aucune fiche</h3>
                    <p>Commencez vos révisions pour créer des fiches !</p>
                </div>
            `;
            return;
        }

        document.getElementById('flashcards-tab').innerHTML = `
            <h2 style="margin-bottom: 15px;">🗂️ Fiches de révision</h2>
            <p style="color: #666; margin-bottom: 20px; font-size: 0.9em;">
                Cliquez sur une fiche pour voir la réponse.
            </p>
            ${difficultCards.map(card => {
                const difficultyBadge = card.question.difficulty ? `
                    <span style="
                        background: ${
                            card.question.difficulty === 'easy' ? '#6bcf7f' :
                            card.question.difficulty === 'medium' ? '#ffd93d' : '#ff6b6b'
                        };
                        color: ${card.question.difficulty === 'medium' ? '#333' : 'white'};
                        padding: 4px 10px;
                        border-radius: 10px;
                        font-size: 0.75em;
                        font-weight: bold;
                        margin-left: 8px;
                    ">
                        ${
                            card.question.difficulty === 'easy' ? '😊' :
                            card.question.difficulty === 'medium' ? '🤔' : '😰'
                        }
                    </span>
                ` : '';

                const imagePreview = card.question.image ? `
                    <div style="margin-top: 10px;">
                        <img src="${card.question.image}"
                             alt="${card.question.imageAlt || card.question.question}"
                             style="max-width: 100%; height: auto; border-radius: 8px; max-height: 150px; object-fit: cover;">
                    </div>
                ` : '';

                return `
                    <div class="flashcard" onclick="this.classList.toggle('flipped')">
                        <div class="flashcard-front">
                            <strong>${card.question.category}${difficultyBadge}</strong><br>
                            ${card.question.question}
                            ${imagePreview}
                        </div>
                        <div class="flashcard-back">
                            <strong>Réponse :</strong> ${card.question.answers[card.question.correct]}<br><br>
                            ${card.question.explanation}
                            ${card.question.keyPoints ? '<br><br><strong>Points clés :</strong><ul>' +
                                card.question.keyPoints.map(p => `<li>${p}</li>`).join('') + '</ul>' : ''}
                        </div>
                        <div style="font-size: 0.8em; color: #999; margin-top: 10px;">
                            ${card.status === 'new' ? '🆕 Nouveau' : `Révisions : ${card.repetitions}`}
                        </div>
                    </div>
                `;
            }).join('')}
        `;
    }

    showStats() {
        const mastered = this.cards.filter(c => c.status === 'mastered').length;
        const review = this.cards.filter(c => c.status === 'review').length;
        const learning = this.cards.filter(c => c.status === 'learning').length;
        const newCards = this.cards.filter(c => c.status === 'new').length;
        const total = this.cards.length;
        const percentage = Math.round((mastered / total) * 100);

        document.getElementById('stats-tab').innerHTML = `
            <h2 style="text-align: center; margin-bottom: 20px; font-size: 1.5em;">📊 Progression</h2>

            <div style="text-align: center; margin: 30px 0;">
                <div style="font-size: 4em; color: #667eea; font-weight: bold;">${percentage}%</div>
                <div style="color: #666; margin-top: 5px;">Maîtrisé</div>
            </div>

            <div class="stats-grid">
                <div class="stat-box">
                    <div class="stat-label">✅ Maîtrisées</div>
                    <div class="stat-value">${mastered}</div>
                </div>
                <div class="stat-box">
                    <div class="stat-label">📖 En révision</div>
                    <div class="stat-value">${review}</div>
                </div>
                <div class="stat-box">
                    <div class="stat-label">📚 En cours</div>
                    <div class="stat-value">${learning}</div>
                </div>
                <div class="stat-box">
                    <div class="stat-label">🆕 Nouvelles</div>
                    <div class="stat-value">${newCards}</div>
                </div>
                <div class="stat-box">
                    <div class="stat-label">🔥 Série</div>
                    <div class="stat-value">${this.getStreak()}</div>
                </div>
                <div class="stat-box">
                    <div class="stat-label">📝 Total</div>
                    <div class="stat-value">${total}</div>
                </div>
            </div>

            <div class="info-box" style="margin-top: 30px;">
                <strong>💡 Conseils</strong>
                <ul style="margin: 10px 0;">
                    <li>Révisez chaque jour pour maintenir votre série</li>
                    <li>Les questions difficiles reviendront plus souvent</li>
                    <li>Soyez honnête avec l'évaluation de difficulté</li>
                </ul>
            </div>
        `;
    }

    showCalendar() {
        const sessions = JSON.parse(localStorage.getItem('daily-sessions') || '[]');
        const today = new Date();
        const startDate = new Date(today);
        startDate.setDate(startDate.getDate() - 29);

        const days = [];
        for (let i = 0; i < 30; i++) {
            const date = new Date(startDate);
            date.setDate(date.getDate() + i);
            const dateStr = date.toISOString().split('T')[0];
            const isToday = date.toDateString() === today.toDateString();
            const isCompleted = sessions.includes(dateStr);

            days.push({
                day: date.getDate(),
                weekday: date.toLocaleDateString('fr-FR', { weekday: 'short' }),
                isToday,
                isCompleted
            });
        }

        document.getElementById('calendar-tab').innerHTML = `
            <h2 style="margin-bottom: 15px;">📆 Calendrier</h2>
            <p style="color: #666; margin-bottom: 20px; font-size: 0.9em;">
                30 derniers jours - Jours verts = révisions faites 🌱
            </p>

            <div class="calendar">
                ${days.map(d => `
                    <div class="calendar-day ${d.isCompleted ? 'completed' : ''} ${d.isToday ? 'today' : ''}">
                        <div style="font-size: 1.1em;">${d.day}</div>
                        <div style="font-size: 0.7em;">${d.weekday}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    showSettings() {
        const notificationsEnabled = localStorage.getItem('notifications-enabled') === 'true';
        const notificationTime = localStorage.getItem('notification-time') || '09:00';

        document.getElementById('settings-tab').innerHTML = `
            <h2 style="margin-bottom: 20px;">⚙️ Réglages</h2>

            <div class="notification-toggle">
                <div class="info">
                    <h3>🔔 Rappels quotidiens</h3>
                    <p>Recevez une notification pour vos révisions</p>
                </div>
                <label class="switch">
                    <input type="checkbox" id="notif-toggle" ${notificationsEnabled ? 'checked' : ''} onchange="app.toggleNotifications()">
                    <span class="slider"></span>
                </label>
            </div>

            <div class="info-box">
                <strong>⏰ Heure du rappel</strong>
                <input type="time" id="notif-time" value="${notificationTime}"
                       onchange="app.setNotificationTime(this.value)"
                       style="width: 100%; padding: 12px; margin-top: 10px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1em;">
            </div>

            <div class="info-box" style="margin-top: 20px;">
                <strong>📱 Installation</strong>
                <p style="margin-top: 10px;">
                    Pour installer l'application sur votre téléphone :
                </p>
                <ul>
                    <li><strong>Android :</strong> Menu ≡ → "Ajouter à l'écran d'accueil"</li>
                    <li><strong>iPhone :</strong> Partager → "Sur l'écran d'accueil"</li>
                </ul>
            </div>

            <div class="info-box" style="margin-top: 20px;">
                <strong>💾 Données</strong>
                <p style="margin-top: 10px;">
                    ${this.cards.length} questions •
                    ${this.getStreak()} jours de série •
                    ${this.cards.filter(c => c.status === 'mastered').length} maîtrisées
                </p>
                <button onclick="app.exportData()"
                        style="width: 100%; padding: 12px; margin-top: 15px; background: #667eea; color: white; border: none; border-radius: 8px; font-size: 1em;">
                    📥 Exporter mes données
                </button>
                <button onclick="app.resetData()"
                        style="width: 100%; padding: 12px; margin-top: 10px; background: #ff6b6b; color: white; border: none; border-radius: 8px; font-size: 1em;">
                    🗑️ Réinitialiser (DANGER)
                </button>
            </div>
        `;
    }

    async setupNotifications() {
        if ('Notification' in window && 'serviceWorker' in navigator) {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                this.scheduleNotification();
            }
        }
    }

    async toggleNotifications() {
        const enabled = document.getElementById('notif-toggle').checked;
        localStorage.setItem('notifications-enabled', enabled);

        if (enabled && Notification.permission !== 'granted') {
            const permission = await Notification.requestPermission();
            if (permission !== 'granted') {
                document.getElementById('notif-toggle').checked = false;
                alert('Veuillez autoriser les notifications dans les paramètres de votre navigateur.');
                return;
            }
        }

        if (enabled) {
            this.scheduleNotification();
        }
    }

    setNotificationTime(time) {
        localStorage.setItem('notification-time', time);
        if (localStorage.getItem('notifications-enabled') === 'true') {
            this.scheduleNotification();
        }
    }

    scheduleNotification() {
        // Vérifier les cartes à réviser
        const todayCards = this.getTodayCards();
        if (todayCards.length > 0) {
            // Programmer une notification locale
            const notificationTime = localStorage.getItem('notification-time') || '09:00';
            const [hours, minutes] = notificationTime.split(':');
            const now = new Date();
            const scheduledTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

            if (scheduledTime > now) {
                const delay = scheduledTime - now;
                setTimeout(() => {
                    this.sendNotification();
                }, delay);
            }
        }
    }

    sendNotification() {
        const todayCards = this.getTodayCards();
        if (todayCards.length > 0 && Notification.permission === 'granted') {
            new Notification('🎓 Révision CAP M.I.T FC', {
                body: `Vous avez ${todayCards.length} question${todayCards.length > 1 ? 's' : ''} à réviser aujourd'hui !`,
                icon: '/icon-192.png',
                badge: '/icon-192.png',
                tag: 'daily-reminder',
                requireInteraction: false
            });
        }
    }

    exportData() {
        const data = {
            cards: this.cards,
            sessions: JSON.parse(localStorage.getItem('daily-sessions') || '[]'),
            exportDate: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `revision-cap-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    resetData() {
        if (confirm('⚠️ ATTENTION : Cela supprimera TOUTES vos données de progression. Êtes-vous sûr ?')) {
            if (confirm('Vraiment sûr ? Cette action est irréversible !')) {
                localStorage.clear();
                location.reload();
            }
        }
    }
}

// Fonction pour changer d'onglet
function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));

    event.target.classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');

    switch(tabName) {
        case 'daily':
            app.showDailyTab();
            break;
        case 'flashcards':
            app.showFlashcards();
            break;
        case 'stats':
            app.showStats();
            break;
        case 'calendar':
            app.showCalendar();
            break;
        case 'settings':
            app.showSettings();
            break;
    }
}

// Initialiser l'application
let app = new SpacedRepetitionApp();

// Vérifier les révisions quotidiennes
setInterval(() => {
    app.scheduleNotification();
}, 60000); // Vérifier toutes les minutes
