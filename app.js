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
                if (this.interval >= 15) {  // Réduit de 30 à 15 jours pour progression plus rapide
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

// ========== MODE QUIZ LIBRE ==========
class QuizMode {
    constructor(app) {
        this.app = app;
        this.quizQuestions = [];
        this.currentQuestionIndex = 0;
        this.answered = false;
        this.quizStats = { total: 0, correct: 0, incorrect: 0 };
    }

    getFilteredQuestions() {
        // Vérifier le statut premium
        const isPremium = localStorage.getItem('premium-activated') === 'true';

        // Récupérer les stages actifs
        const defaultStages = JSON.stringify(['Fondamentaux & Sécurité']);
        let activeStages = JSON.parse(localStorage.getItem('active-stages') || defaultStages);

        // Si pas premium, forcer Stage 1 uniquement
        if (!isPremium) {
            activeStages = ['Fondamentaux & Sécurité'];
        }

        // Filtrer les questions selon les stages actifs
        return allQuestions.filter(q =>
            q.category === 'Conversions' ||
            activeStages.some(stage => q.category.startsWith(stage))
        );
    }

    showCategorySelection() {
        const filteredQuestions = this.getFilteredQuestions();

        // Extraire toutes les catégories uniques depuis les questions filtrées
        const categories = [...new Set(filteredQuestions.map(q => q.category))].sort();

        document.getElementById('quiz-tab').innerHTML = `
            <div style="text-align: center;">
                <h2 style="margin-bottom: 10px;">❓ Mode Quiz</h2>
                <p style="color: #666; margin-bottom: 30px;">
                    Entraînez-vous sans impact sur la révision espacée
                </p>

                <div style="margin-bottom: 30px;">
                    <h3 style="margin-bottom: 15px; font-size: 1.1em;">Choisir une catégorie</h3>
                    <button class="primary-btn" onclick="app.quiz.startQuiz('all', null)"
                            style="margin-bottom: 15px; width: 100%; max-width: 400px;">
                        🎯 Toutes les catégories (${filteredQuestions.length} questions)
                    </button>

                    ${categories.map(cat => {
                        const count = filteredQuestions.filter(q => q.category === cat).length;
                        return `
                            <button class="answer-btn"
                                    onclick="app.quiz.showDifficultySelection('${cat.replace(/'/g, "\\'")}')"
                                    style="margin: 5px; width: 100%; max-width: 400px; text-align: left; padding: 15px;">
                                ${cat} <span style="color: #999; font-size: 0.9em;">(${count})</span>
                            </button>
                        `;
                    }).join('')}
                </div>

                <div style="margin-top: 30px;">
                    <h3 style="margin-bottom: 15px; font-size: 1.1em;">Filtrer par difficulté</h3>
                    <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                        <button class="answer-btn" onclick="app.quiz.startQuiz('all', 'easy')"
                                style="background: #6bcf7f; color: white; padding: 12px 20px;">
                            😊 Facile
                        </button>
                        <button class="answer-btn" onclick="app.quiz.startQuiz('all', 'medium')"
                                style="background: #ffd93d; color: #333; padding: 12px 20px;">
                            🤔 Moyen
                        </button>
                        <button class="answer-btn" onclick="app.quiz.startQuiz('all', 'hard')"
                                style="background: #ff6b6b; color: white; padding: 12px 20px;">
                            😰 Difficile
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    showDifficultySelection(category) {
        const filteredQuestions = this.getFilteredQuestions();
        const categoryQuestions = filteredQuestions.filter(q => q.category === category);
        const easyCount = categoryQuestions.filter(q => q.difficulty === 'easy').length;
        const mediumCount = categoryQuestions.filter(q => q.difficulty === 'medium').length;
        const hardCount = categoryQuestions.filter(q => q.difficulty === 'hard').length;

        document.getElementById('quiz-tab').innerHTML = `
            <div style="text-align: center;">
                <button class="answer-btn" onclick="app.quiz.showCategorySelection()"
                        style="margin-bottom: 20px;">
                    ← Retour
                </button>

                <h2 style="margin-bottom: 10px;">${category}</h2>
                <p style="color: #666; margin-bottom: 30px;">
                    ${categoryQuestions.length} questions disponibles
                </p>

                <div style="display: flex; flex-direction: column; gap: 15px; max-width: 400px; margin: 0 auto;">
                    <button class="primary-btn" onclick="app.quiz.startQuiz('${category.replace(/'/g, "\\'")}', null)">
                        🎯 Toutes les questions (${categoryQuestions.length})
                    </button>

                    ${easyCount > 0 ? `
                        <button class="answer-btn" onclick="app.quiz.startQuiz('${category.replace(/'/g, "\\'")}', 'easy')"
                                style="background: #6bcf7f; color: white;">
                            😊 Facile (${easyCount})
                        </button>
                    ` : ''}

                    ${mediumCount > 0 ? `
                        <button class="answer-btn" onclick="app.quiz.startQuiz('${category.replace(/'/g, "\\'")}', 'medium')"
                                style="background: #ffd93d; color: #333;">
                            🤔 Moyen (${mediumCount})
                        </button>
                    ` : ''}

                    ${hardCount > 0 ? `
                        <button class="answer-btn" onclick="app.quiz.startQuiz('${category.replace(/'/g, "\\'")}', 'hard')"
                                style="background: #ff6b6b; color: white;">
                            😰 Difficile (${hardCount})
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
    }

    startQuiz(category, difficulty) {
        // Filtrer les questions selon les stages actifs
        let questions = this.getFilteredQuestions();

        if (category !== 'all') {
            questions = questions.filter(q => q.category === category);
        }

        if (difficulty) {
            questions = questions.filter(q => q.difficulty === difficulty);
        }

        if (questions.length === 0) {
            alert('Aucune question disponible avec ces filtres');
            return;
        }

        // Mélanger l'ordre des questions (Fisher-Yates shuffle)
        this.quizQuestions = [...questions];
        for (let i = this.quizQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.quizQuestions[i], this.quizQuestions[j]] = [this.quizQuestions[j], this.quizQuestions[i]];
        }

        this.currentQuestionIndex = 0;
        this.answered = false;
        this.quizStats = { total: 0, correct: 0, incorrect: 0 };
        this.showQuizQuestion();
    }

    showQuizQuestion() {
        if (this.currentQuestionIndex >= this.quizQuestions.length) {
            this.showQuizResults();
            return;
        }

        this.answered = false;
        const question = this.quizQuestions[this.currentQuestionIndex];
        const progress = ((this.currentQuestionIndex + 1) / this.quizQuestions.length) * 100;

        const imageHTML = question.image ? `
            <div style="margin-bottom: 20px; text-align: center;">
                <img src="${question.image}"
                     alt="${question.imageAlt || question.question}"
                     style="max-width: 100%; height: auto; border-radius: 12px;
                            box-shadow: 0 2px 8px rgba(0,0,0,0.1); cursor: pointer;"
                     onclick="this.style.transform = this.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)'; this.style.transition = 'transform 0.3s';">
            </div>
        ` : '';

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

        document.getElementById('quiz-tab').innerHTML = `
            <div style="text-align: center; margin-bottom: 15px;">
                <button class="answer-btn" onclick="app.quiz.showCategorySelection()"
                        style="display: inline-block; margin-bottom: 10px;">
                    ← Quitter le quiz
                </button>
                <div style="color: #666; font-size: 0.9em;">
                    Question ${this.currentQuestionIndex + 1} sur ${this.quizQuestions.length}
                </div>
                <div style="margin-top: 10px; color: #667eea; font-weight: bold;">
                    Score : ${this.quizStats.correct}/${this.quizStats.total}
                </div>
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
                        <button class="answer-btn" onclick="app.quiz.selectQuizAnswer(${index})">
                            ${answer}
                        </button>
                    `).join('')}
                </div>

                <div id="quiz-feedback"></div>
            </div>
        `;
    }

    selectQuizAnswer(selectedIndex) {
        if (this.answered) return;
        this.answered = true;

        const question = this.quizQuestions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;

        this.quizStats.total++;
        if (isCorrect) {
            this.quizStats.correct++;
        } else {
            this.quizStats.incorrect++;
        }

        const buttons = document.querySelectorAll('#quiz-tab .answer-btn');
        buttons.forEach((btn, idx) => {
            if (idx === question.correct) {
                btn.style.background = '#6bcf7f';
                btn.style.color = 'white';
            } else if (idx === selectedIndex) {
                btn.style.background = '#ff6b6b';
                btn.style.color = 'white';
            }
            btn.disabled = true;
        });

        const feedback = document.getElementById('quiz-feedback');
        feedback.innerHTML = `
            <div style="margin-top: 20px; padding: 20px; background: ${isCorrect ? '#e7f9eb' : '#ffe6e6'};
                        border-radius: 12px; text-align: left;">
                <strong style="color: ${isCorrect ? '#2d8f3c' : '#d32f2f'}; font-size: 1.2em;">
                    ${isCorrect ? '✅ Correct !' : '❌ Incorrect'}
                </strong>
                <p style="margin: 10px 0; color: #333;">
                    <strong>Explication :</strong><br>
                    ${question.explanation}
                </p>
                ${question.keyPoints ? `
                    <div style="margin-top: 10px;">
                        <strong>Points clés :</strong>
                        <ul style="margin: 5px 0; padding-left: 20px;">
                            ${question.keyPoints.map(p => `<li>${p}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                <button class="primary-btn" onclick="app.quiz.nextQuizQuestion()"
                        style="margin-top: 15px; width: 100%;">
                    ${this.currentQuestionIndex + 1 < this.quizQuestions.length ?
                        'Question suivante →' : 'Voir les résultats 🎯'}
                </button>
            </div>
        `;
    }

    nextQuizQuestion() {
        this.currentQuestionIndex++;
        this.showQuizQuestion();
    }

    showQuizResults() {
        const percentage = Math.round((this.quizStats.correct / this.quizStats.total) * 100);
        const emoji = percentage >= 80 ? '🏆' : percentage >= 60 ? '👍' : percentage >= 40 ? '💪' : '📚';
        const message = percentage >= 80 ? 'Excellent !' :
                       percentage >= 60 ? 'Très bien !' :
                       percentage >= 40 ? 'Pas mal, continuez !' :
                       'Continuez à vous entraîner !';

        document.getElementById('quiz-tab').innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 5em; margin-bottom: 20px;">${emoji}</div>
                <h2 style="margin-bottom: 10px;">${message}</h2>
                <p style="color: #666; margin-bottom: 30px;">Résultats du quiz</p>

                <div style="font-size: 3em; color: #667eea; font-weight: bold; margin-bottom: 10px;">
                    ${percentage}%
                </div>
                <div style="color: #666; margin-bottom: 30px;">
                    ${this.quizStats.correct} bonnes réponses sur ${this.quizStats.total}
                </div>

                <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 30px;">
                    <div style="background: #e7f9eb; padding: 20px; border-radius: 12px; flex: 1; max-width: 150px;">
                        <div style="font-size: 2em; color: #2d8f3c;">✅</div>
                        <div style="font-size: 1.5em; font-weight: bold;">${this.quizStats.correct}</div>
                        <div style="color: #666; font-size: 0.9em;">Correctes</div>
                    </div>
                    <div style="background: #ffe6e6; padding: 20px; border-radius: 12px; flex: 1; max-width: 150px;">
                        <div style="font-size: 2em; color: #d32f2f;">❌</div>
                        <div style="font-size: 1.5em; font-weight: bold;">${this.quizStats.incorrect}</div>
                        <div style="color: #666; font-size: 0.9em;">Incorrectes</div>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 10px; max-width: 400px; margin: 0 auto;">
                    <button class="primary-btn" onclick="app.quiz.showCategorySelection()">
                        🔄 Nouveau quiz
                    </button>
                    <button class="answer-btn" onclick="switchTab('daily')">
                        📅 Retour aux révisions
                    </button>
                </div>
            </div>
        `;
    }
}

// ========== CALCULATRICE DE CHANTIER ==========
class ConstructionCalculator {
    constructor(app) {
        this.app = app;
    }

    showMenu() {
        document.getElementById('calculator-tab').innerHTML = `
            <div style="text-align: center;">
                <h2 style="margin-bottom: 10px;">🧮 Calculatrice de chantier</h2>
                <p style="color: #666; margin-bottom: 30px;">
                    Outils pratiques pour vos installations
                </p>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; max-width: 600px; margin: 0 auto;">
                    <button class="answer-btn" onclick="app.calculator.showUnitConverter()"
                            style="padding: 30px 20px; font-size: 1em; height: auto;">
                        <div style="font-size: 2em; margin-bottom: 10px;">📏</div>
                        <div style="font-weight: bold;">Convertisseur</div>
                        <div style="font-size: 0.8em; color: #999; margin-top: 5px;">mm, cm, m, pouces</div>
                    </button>

                    <button class="answer-btn" onclick="app.calculator.showHeatingPowerCalc()"
                            style="padding: 30px 20px; font-size: 1em; height: auto;">
                        <div style="font-size: 2em; margin-bottom: 10px;">🔥</div>
                        <div style="font-weight: bold;">Puissance</div>
                        <div style="font-size: 0.8em; color: #999; margin-top: 5px;">Chauffage</div>
                    </button>

                    <button class="answer-btn" onclick="app.calculator.showFlowCalc()"
                            style="padding: 30px 20px; font-size: 1em; height: auto;">
                        <div style="font-size: 2em; margin-bottom: 10px;">💧</div>
                        <div style="font-weight: bold;">Débit</div>
                        <div style="font-size: 0.8em; color: #999; margin-top: 5px;">Eau et pression</div>
                    </button>

                    <button class="answer-btn" onclick="app.calculator.showSlopeCalc()"
                            style="padding: 30px 20px; font-size: 1em; height: auto;">
                        <div style="font-size: 2em; margin-bottom: 10px;">↘️</div>
                        <div style="font-weight: bold;">Pente</div>
                        <div style="font-size: 0.8em; color: #999; margin-top: 5px;">Évacuation</div>
                    </button>

                    <button class="answer-btn" onclick="app.calculator.showPipeDiameterCalc()"
                            style="padding: 30px 20px; font-size: 1em; height: auto;">
                        <div style="font-size: 2em; margin-bottom: 10px;">🔧</div>
                        <div style="font-weight: bold;">Diamètres</div>
                        <div style="font-size: 0.8em; color: #999; margin-top: 5px;">Tuyauterie</div>
                    </button>

                    <button class="answer-btn" onclick="app.calculator.showAreaVolumeCalc()"
                            style="padding: 30px 20px; font-size: 1em; height: auto;">
                        <div style="font-size: 2em; margin-bottom: 10px;">📐</div>
                        <div style="font-weight: bold;">Surface</div>
                        <div style="font-size: 0.8em; color: #999; margin-top: 5px;">Volume</div>
                    </button>
                </div>
            </div>
        `;
    }

    showUnitConverter() {
        document.getElementById('calculator-tab').innerHTML = `
            <div style="max-width: 500px; margin: 0 auto;">
                <button class="answer-btn" onclick="app.calculator.showMenu()"
                        style="margin-bottom: 20px;">
                    ← Retour
                </button>

                <h2 style="text-align: center; margin-bottom: 10px;">📏 Convertisseur d'unités</h2>
                <p style="color: #666; text-align: center; margin-bottom: 30px;">
                    Convertir mm, cm, m, pouces
                </p>

                <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <label style="display: block; margin-bottom: 10px; font-weight: bold;">Valeur à convertir</label>
                    <input type="number" id="unit-value" placeholder="Ex: 100"
                           style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1.1em; margin-bottom: 20px;">

                    <label style="display: block; margin-bottom: 10px; font-weight: bold;">De</label>
                    <select id="unit-from"
                            style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1em; margin-bottom: 20px;">
                        <option value="mm">Millimètres (mm)</option>
                        <option value="cm">Centimètres (cm)</option>
                        <option value="m">Mètres (m)</option>
                        <option value="pouces">Pouces (in)</option>
                    </select>

                    <label style="display: block; margin-bottom: 10px; font-weight: bold;">Vers</label>
                    <select id="unit-to"
                            style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1em; margin-bottom: 20px;">
                        <option value="mm">Millimètres (mm)</option>
                        <option value="cm">Centimètres (cm)</option>
                        <option value="m">Mètres (m)</option>
                        <option value="pouces">Pouces (in)</option>
                    </select>

                    <button class="primary-btn" onclick="app.calculator.convertUnits()"
                            style="width: 100%; margin-bottom: 20px;">
                        🔄 Convertir
                    </button>

                    <div id="unit-result" style="padding: 20px; background: #f5f5f5; border-radius: 8px; text-align: center; display: none;">
                        <div style="font-size: 2em; font-weight: bold; color: #667eea; margin-bottom: 5px;" id="unit-result-value"></div>
                        <div style="color: #666;" id="unit-result-unit"></div>
                    </div>
                </div>

                <div class="info-box" style="margin-top: 20px;">
                    <strong>💡 Conversions courantes</strong>
                    <ul style="margin-top: 10px;">
                        <li>1 pouce = 25.4 mm</li>
                        <li>1 m = 100 cm = 1000 mm</li>
                        <li>3/4" = 19.05 mm</li>
                        <li>1/2" = 12.7 mm</li>
                    </ul>
                </div>
            </div>
        `;
    }

    convertUnits() {
        const value = parseFloat(document.getElementById('unit-value').value);
        const from = document.getElementById('unit-from').value;
        const to = document.getElementById('unit-to').value;

        if (isNaN(value)) {
            alert('Veuillez entrer une valeur valide');
            return;
        }

        const conversions = {
            'mm': { mm: 1, cm: 0.1, m: 0.001, pouces: 0.0393701 },
            'cm': { mm: 10, cm: 1, m: 0.01, pouces: 0.393701 },
            'm': { mm: 1000, cm: 100, m: 1, pouces: 39.3701 },
            'pouces': { mm: 25.4, cm: 2.54, m: 0.0254, pouces: 1 }
        };

        const result = value * conversions[from][to];
        const units = { mm: 'mm', cm: 'cm', m: 'm', pouces: 'pouces' };

        document.getElementById('unit-result').style.display = 'block';
        document.getElementById('unit-result-value').textContent = result.toFixed(2);
        document.getElementById('unit-result-unit').textContent = units[to];
    }

    showHeatingPowerCalc() {
        document.getElementById('calculator-tab').innerHTML = `
            <div style="max-width: 500px; margin: 0 auto;">
                <button class="answer-btn" onclick="app.calculator.showMenu()"
                        style="margin-bottom: 20px;">
                    ← Retour
                </button>

                <h2 style="text-align: center; margin-bottom: 10px;">🔥 Puissance de chauffage</h2>
                <p style="color: #666; text-align: center; margin-bottom: 30px;">
                    Calculer la puissance nécessaire
                </p>

                <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <label style="display: block; margin-bottom: 10px; font-weight: bold;">Surface (m²)</label>
                    <input type="number" id="heating-surface" placeholder="Ex: 50"
                           style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1.1em; margin-bottom: 20px;">

                    <label style="display: block; margin-bottom: 10px; font-weight: bold;">Hauteur sous plafond (m)</label>
                    <input type="number" id="heating-height" placeholder="Ex: 2.5" value="2.5"
                           style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1.1em; margin-bottom: 20px;">

                    <label style="display: block; margin-bottom: 10px; font-weight: bold;">Isolation</label>
                    <select id="heating-insulation"
                            style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1em; margin-bottom: 20px;">
                        <option value="100">Mauvaise (100 W/m³)</option>
                        <option value="60" selected>Moyenne (60 W/m³)</option>
                        <option value="40">Bonne (40 W/m³)</option>
                        <option value="30">Excellente (30 W/m³)</option>
                    </select>

                    <button class="primary-btn" onclick="app.calculator.calculateHeatingPower()"
                            style="width: 100%; margin-bottom: 20px;">
                        🔥 Calculer
                    </button>

                    <div id="heating-result" style="padding: 20px; background: #f5f5f5; border-radius: 8px; display: none;">
                        <div style="text-align: center; margin-bottom: 15px;">
                            <div style="font-size: 2.5em; font-weight: bold; color: #ff6b6b;" id="heating-result-kw"></div>
                            <div style="color: #666; font-size: 1.1em;">Puissance recommandée</div>
                        </div>
                        <div style="background: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span>Volume :</span>
                                <strong id="heating-volume"></strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span>Puissance :</span>
                                <strong id="heating-watts"></strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="info-box" style="margin-top: 20px;">
                    <strong>💡 Coefficients d'isolation</strong>
                    <ul style="margin-top: 10px;">
                        <li><strong>Mauvaise :</strong> Bâtiment ancien, simple vitrage</li>
                        <li><strong>Moyenne :</strong> Double vitrage, isolation standard</li>
                        <li><strong>Bonne :</strong> RT 2012, double vitrage performant</li>
                        <li><strong>Excellente :</strong> Maison passive, BBC</li>
                    </ul>
                </div>
            </div>
        `;
    }

    calculateHeatingPower() {
        const surface = parseFloat(document.getElementById('heating-surface').value);
        const height = parseFloat(document.getElementById('heating-height').value);
        const insulationCoeff = parseFloat(document.getElementById('heating-insulation').value);

        if (isNaN(surface) || isNaN(height)) {
            alert('Veuillez entrer des valeurs valides');
            return;
        }

        const volume = surface * height;
        const powerWatts = volume * insulationCoeff;
        const powerKw = powerWatts / 1000;

        document.getElementById('heating-result').style.display = 'block';
        document.getElementById('heating-result-kw').textContent = powerKw.toFixed(1) + ' kW';
        document.getElementById('heating-volume').textContent = volume.toFixed(1) + ' m³';
        document.getElementById('heating-watts').textContent = powerWatts.toFixed(0) + ' W';
    }

    showFlowCalc() {
        document.getElementById('calculator-tab').innerHTML = `
            <div style="max-width: 500px; margin: 0 auto;">
                <button class="answer-btn" onclick="app.calculator.showMenu()"
                        style="margin-bottom: 20px;">
                    ← Retour
                </button>

                <h2 style="text-align: center; margin-bottom: 10px;">💧 Débit d'eau</h2>
                <p style="color: #666; text-align: center; margin-bottom: 30px;">
                    Convertir les unités de débit
                </p>

                <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <label style="display: block; margin-bottom: 10px; font-weight: bold;">Valeur</label>
                    <input type="number" id="flow-value" placeholder="Ex: 10"
                           style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1.1em; margin-bottom: 20px;">

                    <label style="display: block; margin-bottom: 10px; font-weight: bold;">Unité</label>
                    <select id="flow-unit"
                            style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1em; margin-bottom: 20px;">
                        <option value="lmin">Litres/minute (L/min)</option>
                        <option value="lh">Litres/heure (L/h)</option>
                        <option value="m3h">Mètres cubes/heure (m³/h)</option>
                    </select>

                    <button class="primary-btn" onclick="app.calculator.calculateFlow()"
                            style="width: 100%; margin-bottom: 20px;">
                        💧 Convertir
                    </button>

                    <div id="flow-result" style="padding: 20px; background: #f5f5f5; border-radius: 8px; display: none;">
                        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                            <div style="display: flex; justify-content: space-between;">
                                <span>L/min :</span>
                                <strong id="flow-lmin"></strong>
                            </div>
                        </div>
                        <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 10px;">
                            <div style="display: flex; justify-content: space-between;">
                                <span>L/h :</span>
                                <strong id="flow-lh"></strong>
                            </div>
                        </div>
                        <div style="background: white; padding: 15px; border-radius: 8px;">
                            <div style="display: flex; justify-content: space-between;">
                                <span>m³/h :</span>
                                <strong id="flow-m3h"></strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="info-box" style="margin-top: 20px;">
                    <strong>💡 Débits courants</strong>
                    <ul style="margin-top: 10px;">
                        <li>Lavabo : 6-12 L/min</li>
                        <li>Évier : 12-15 L/min</li>
                        <li>Douche : 12-20 L/min</li>
                        <li>Baignoire : 20-30 L/min</li>
                    </ul>
                </div>
            </div>
        `;
    }

    calculateFlow() {
        const value = parseFloat(document.getElementById('flow-value').value);
        const unit = document.getElementById('flow-unit').value;

        if (isNaN(value)) {
            alert('Veuillez entrer une valeur valide');
            return;
        }

        let lmin, lh, m3h;

        if (unit === 'lmin') {
            lmin = value;
            lh = value * 60;
            m3h = value * 0.06;
        } else if (unit === 'lh') {
            lmin = value / 60;
            lh = value;
            m3h = value / 1000;
        } else { // m3h
            lmin = value * 1000 / 60;
            lh = value * 1000;
            m3h = value;
        }

        document.getElementById('flow-result').style.display = 'block';
        document.getElementById('flow-lmin').textContent = lmin.toFixed(2) + ' L/min';
        document.getElementById('flow-lh').textContent = lh.toFixed(2) + ' L/h';
        document.getElementById('flow-m3h').textContent = m3h.toFixed(3) + ' m³/h';
    }

    showSlopeCalc() {
        document.getElementById('calculator-tab').innerHTML = `
            <div style="max-width: 500px; margin: 0 auto;">
                <button class="answer-btn" onclick="app.calculator.showMenu()"
                        style="margin-bottom: 20px;">
                    ← Retour
                </button>

                <h2 style="text-align: center; margin-bottom: 10px;">↘️ Pente d'évacuation</h2>
                <p style="color: #666; text-align: center; margin-bottom: 30px;">
                    Calculer le dénivelé nécessaire
                </p>

                <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <label style="display: block; margin-bottom: 10px; font-weight: bold;">Longueur de canalisation (m)</label>
                    <input type="number" id="slope-length" placeholder="Ex: 5"
                           style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1.1em; margin-bottom: 20px;">

                    <label style="display: block; margin-bottom: 10px; font-weight: bold;">Pente souhaitée (%)</label>
                    <input type="number" id="slope-percent" placeholder="Ex: 1" value="1"
                           style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1.1em; margin-bottom: 20px;">

                    <button class="primary-btn" onclick="app.calculator.calculateSlope()"
                            style="width: 100%; margin-bottom: 20px;">
                        ↘️ Calculer
                    </button>

                    <div id="slope-result" style="padding: 20px; background: #f5f5f5; border-radius: 8px; text-align: center; display: none;">
                        <div style="font-size: 2.5em; font-weight: bold; color: #667eea; margin-bottom: 5px;" id="slope-result-cm"></div>
                        <div style="color: #666; font-size: 1.1em;">Dénivelé à prévoir</div>
                        <div style="margin-top: 15px; font-size: 0.9em; color: #999;" id="slope-formula"></div>
                    </div>
                </div>

                <div class="info-box" style="margin-top: 20px;">
                    <strong>💡 Pentes minimales</strong>
                    <ul style="margin-top: 10px;">
                        <li><strong>Eaux usées :</strong> 1 cm/m minimum (1%)</li>
                        <li><strong>DN 100 :</strong> 1-3 cm/m</li>
                        <li><strong>DN 125 :</strong> 0.5-2 cm/m</li>
                        <li><strong>DN 160 :</strong> 0.5-1.5 cm/m</li>
                    </ul>
                </div>
            </div>
        `;
    }

    calculateSlope() {
        const length = parseFloat(document.getElementById('slope-length').value);
        const percent = parseFloat(document.getElementById('slope-percent').value);

        if (isNaN(length) || isNaN(percent)) {
            alert('Veuillez entrer des valeurs valides');
            return;
        }

        const drop = length * (percent / 100);
        const dropCm = drop * 100;

        document.getElementById('slope-result').style.display = 'block';
        document.getElementById('slope-result-cm').textContent = dropCm.toFixed(1) + ' cm';
        document.getElementById('slope-formula').textContent =
            `${length} m × ${percent}% = ${drop.toFixed(2)} m`;
    }

    showPipeDiameterCalc() {
        document.getElementById('calculator-tab').innerHTML = `
            <div style="max-width: 600px; margin: 0 auto;">
                <button class="answer-btn" onclick="app.calculator.showMenu()"
                        style="margin-bottom: 20px;">
                    ← Retour
                </button>

                <h2 style="text-align: center; margin-bottom: 10px;">🔧 Diamètres de tuyauterie</h2>
                <p style="color: #666; text-align: center; margin-bottom: 30px;">
                    Équivalences et correspondances
                </p>

                <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <h3 style="margin-bottom: 15px;">Cuivre (DN nominal)</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr style="background: #f5f5f5; font-weight: bold;">
                            <td style="padding: 10px; border: 1px solid #ddd;">Pouces</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">DN</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Diamètre (mm)</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd;">3/8"</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">10</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">12 mm</td>
                        </tr>
                        <tr style="background: #fafafa;">
                            <td style="padding: 10px; border: 1px solid #ddd;">1/2"</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">14</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">14 mm</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd;">3/4"</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">16</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">16 mm</td>
                        </tr>
                        <tr style="background: #fafafa;">
                            <td style="padding: 10px; border: 1px solid #ddd;">1"</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">20</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">22 mm</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd;">1"1/4</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">26</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">28 mm</td>
                        </tr>
                        <tr style="background: #fafafa;">
                            <td style="padding: 10px; border: 1px solid #ddd;">1"1/2</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">33</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">35 mm</td>
                        </tr>
                    </table>

                    <h3 style="margin: 25px 0 15px 0;">Évacuation PVC</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr style="background: #f5f5f5; font-weight: bold;">
                            <td style="padding: 10px; border: 1px solid #ddd;">Type</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Diamètre</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Usage</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd;">DN 32</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">32 mm</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Lavabo, bidet</td>
                        </tr>
                        <tr style="background: #fafafa;">
                            <td style="padding: 10px; border: 1px solid #ddd;">DN 40</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">40 mm</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">Évier, douche</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border: 1px solid #ddd;">DN 100</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">100 mm</td>
                            <td style="padding: 10px; border: 1px solid #ddd;">WC, chute</td>
                        </tr>
                    </table>
                </div>
            </div>
        `;
    }

    showAreaVolumeCalc() {
        document.getElementById('calculator-tab').innerHTML = `
            <div style="max-width: 500px; margin: 0 auto;">
                <button class="answer-btn" onclick="app.calculator.showMenu()"
                        style="margin-bottom: 20px;">
                    ← Retour
                </button>

                <h2 style="text-align: center; margin-bottom: 10px;">📐 Surface et Volume</h2>
                <p style="color: #666; text-align: center; margin-bottom: 30px;">
                    Calculer surface et volume
                </p>

                <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <h3 style="margin-bottom: 15px;">Rectangle / Pièce</h3>
                    <label style="display: block; margin-bottom: 10px; font-weight: bold;">Longueur (m)</label>
                    <input type="number" id="area-length" placeholder="Ex: 5"
                           style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1.1em; margin-bottom: 15px;">

                    <label style="display: block; margin-bottom: 10px; font-weight: bold;">Largeur (m)</label>
                    <input type="number" id="area-width" placeholder="Ex: 4"
                           style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1.1em; margin-bottom: 15px;">

                    <label style="display: block; margin-bottom: 10px; font-weight: bold;">Hauteur (m) - optionnel pour volume</label>
                    <input type="number" id="area-height" placeholder="Ex: 2.5"
                           style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1.1em; margin-bottom: 20px;">

                    <button class="primary-btn" onclick="app.calculator.calculateArea()"
                            style="width: 100%; margin-bottom: 20px;">
                        📐 Calculer
                    </button>

                    <div id="area-result" style="display: none;">
                        <div style="padding: 20px; background: #f5f5f5; border-radius: 8px; margin-bottom: 10px;">
                            <div style="text-align: center;">
                                <div style="font-size: 2em; font-weight: bold; color: #667eea;" id="area-result-surface"></div>
                                <div style="color: #666;">Surface</div>
                            </div>
                        </div>
                        <div id="volume-display" style="padding: 20px; background: #f5f5f5; border-radius: 8px; display: none;">
                            <div style="text-align: center;">
                                <div style="font-size: 2em; font-weight: bold; color: #ff6b6b;" id="area-result-volume"></div>
                                <div style="color: #666;">Volume</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="info-box" style="margin-top: 20px;">
                    <strong>💡 Formules</strong>
                    <ul style="margin-top: 10px;">
                        <li><strong>Surface :</strong> Longueur × Largeur</li>
                        <li><strong>Volume :</strong> Longueur × Largeur × Hauteur</li>
                        <li><strong>Cylindre :</strong> π × r² × hauteur</li>
                    </ul>
                </div>
            </div>
        `;
    }

    calculateArea() {
        const length = parseFloat(document.getElementById('area-length').value);
        const width = parseFloat(document.getElementById('area-width').value);
        const height = parseFloat(document.getElementById('area-height').value);

        if (isNaN(length) || isNaN(width)) {
            alert('Veuillez entrer longueur et largeur');
            return;
        }

        const surface = length * width;

        document.getElementById('area-result').style.display = 'block';
        document.getElementById('area-result-surface').textContent = surface.toFixed(2) + ' m²';

        if (!isNaN(height) && height > 0) {
            const volume = surface * height;
            document.getElementById('volume-display').style.display = 'block';
            document.getElementById('area-result-volume').textContent = volume.toFixed(2) + ' m³';
        } else {
            document.getElementById('volume-display').style.display = 'none';
        }
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

        // Initialiser les nouveaux modes
        this.quiz = new QuizMode(this);
        this.calculator = new ConstructionCalculator(this);

        // 🎮 Initialiser le système Gaming
        this.gaming = new GamingSystem();

        this.loadData();
        this.updateDashboard();
        this.showDailyTab();
        this.setupNotifications();
        this.updatePremiumBadge();
        this.updatePremiumBanner();

        // 🎮 Vérifier objectif streak
        this.gaming.updateDailyGoal('maintain_streak', 1);
    }

    updatePremiumBadge() {
        const badge = document.getElementById('premium-badge');
        if (badge && this.isPremium()) {
            badge.style.display = 'inline';
        }
    }

    updatePremiumBanner() {
        const banner = document.getElementById('premium-banner');
        // Afficher la bannière uniquement si l'utilisateur n'est PAS premium
        if (banner && !this.isPremium()) {
            banner.classList.add('show');
        }
    }

    // ========== SYSTÈME PREMIUM ==========
    isPremium() {
        return localStorage.getItem('premium-activated') === 'true';
    }

    validateCode(code) {
        // Accepter les codes générés par Gumroad
        // Format : XXXX-XXXX-XXXX-XXXX ou licence keys Gumroad
        const trimmedCode = code.trim();

        // Vérifier longueur minimale (au moins 10 caractères)
        if (trimmedCode.length < 10) {
            return false;
        }

        // Vérifier que le code contient des lettres et chiffres (pas que des espaces)
        const hasValidChars = /[A-Za-z0-9]/.test(trimmedCode);
        if (!hasValidChars) {
            return false;
        }

        // Accepter tout code valide de Gumroad
        // Format attendu : contient lettres/chiffres, tirets optionnels
        const isValidFormat = /^[A-Za-z0-9\-]{10,}$/.test(trimmedCode);

        // Codes de démonstration aussi acceptés (pour tests)
        const demoCodes = [
            'CAPMIT-2024-PREMIUM',
            'DEMO-TEST-CODE'
        ];

        return isValidFormat || demoCodes.includes(code.toUpperCase().trim());
    }

    activatePremium(code) {
        if (this.validateCode(code)) {
            localStorage.setItem('premium-activated', 'true');
            localStorage.setItem('premium-code', code.toUpperCase().trim());
            localStorage.setItem('premium-date', new Date().toISOString());
            return true;
        }
        return false;
    }

    deactivatePremium() {
        localStorage.removeItem('premium-activated');
        localStorage.removeItem('premium-code');
        localStorage.removeItem('premium-date');
    }

    enterPremiumCode() {
        const input = document.getElementById('premium-code-input');
        const code = input.value.trim();

        if (!code) {
            alert("Veuillez entrer un code d'activation.");
            return;
        }

        if (this.activatePremium(code)) {
            alert('🎉 Premium activé avec succès !\n\n✅ Tous les stages sont maintenant débloqués\n✅ 200 questions disponibles\n✅ Accès complet à vie\n\nL\'application va se recharger...');
            setTimeout(() => {
                location.reload();
            }, 1500);
        } else {
            alert('❌ Code invalide\n\nVeuillez vérifier votre code et réessayer.\n\nLe code doit contenir au moins 10 caractères (lettres, chiffres, tirets).\n\nExemple : ABCD-1234-EFGH-5678\n\nVous n\'avez pas de code ?\nAchetez Premium sur Gumroad pour recevoir votre code par email.');
            input.value = '';
            input.focus();
        }
    }

    deactivatePremiumAndReload() {
        this.deactivatePremium();
        alert('Premium désactivé.\n\nRetour à la version gratuite.\n\nL\'application va se recharger...');
        setTimeout(() => {
            location.reload();
        }, 1000);
    }

    showUpgradeOptions() {
        // Afficher une alerte avec les options
        const choice = confirm(
            '✨ Passer à Premium\n\n' +
            '🔓 Débloquez 252 questions supplémentaires\n' +
            '✅ Accès aux Stages 2, 3 et 4\n' +
            '💰 Prix : 9,99€\n\n' +
            'Cliquez sur OK pour acheter sur Gumroad\n' +
            'ou Annuler pour entrer un code d\'activation'
        );

        if (choice) {
            // Ouvrir Gumroad dans un nouvel onglet
            window.open('https://albanuxem.gumroad.com/l/srojao', '_blank');
        } else {
            // Basculer vers l'onglet Réglages
            switchTab('settings');
            // Scroller vers le haut pour voir la section Premium
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    loadData() {
        // Vérifier le statut premium
        const isPremium = this.isPremium();

        // Récupérer les stages actifs (par défaut : seul stage 1)
        const defaultStages = JSON.stringify(['Fondamentaux & Sécurité']);
        let activeStages = JSON.parse(localStorage.getItem('active-stages') || defaultStages);

        // Si pas premium, forcer Stage 1 uniquement
        if (!isPremium) {
            activeStages = ['Fondamentaux & Sécurité'];
        }

        // Filtrer les questions selon les stages actifs + Conversions toujours incluses
        const filteredQuestions = allQuestions.filter(q =>
            q.category === 'Conversions' ||
            activeStages.some(stage => q.category.startsWith(stage))
        );

        const saved = localStorage.getItem('spaced-repetition-data');
        if (saved) {
            const data = JSON.parse(saved);
            // Filtrer les cartes sauvegardées selon les stages actifs
            this.cards = data.cards
                .map(c => {
                    const question = filteredQuestions.find(q => q.id === c.id);
                    if (!question) return null;
                    const card = new Card(question);
                    Object.assign(card, c);
                    card.nextReview = new Date(c.nextReview);
                    card.lastReview = c.lastReview ? new Date(c.lastReview) : null;
                    return card;
                })
                .filter(c => c !== null);

            // ✨ NOUVEAU : Détecter et ajouter les nouvelles questions des stages activés
            const existingIds = new Set(this.cards.map(c => c.id));
            const newQuestions = filteredQuestions.filter(q => !existingIds.has(q.id));

            if (newQuestions.length > 0) {
                console.log(`🆕 Ajout de ${newQuestions.length} nouvelles questions des stages activés`);

                // Ajouter les nouvelles questions avec dates étalées sur 3 jours max
                const newCards = newQuestions.map((q, index) => {
                    const card = new Card(q);
                    const dayOffset = Math.floor(index / 20); // 20 questions par jour
                    card.nextReview = new Date();
                    card.nextReview.setDate(card.nextReview.getDate() + Math.min(dayOffset, 3)); // Max 3 jours
                    return card;
                });

                // Mélanger les nouvelles cartes avec les anciennes
                this.cards = [...this.cards, ...newCards];
            }
        } else {
            // Premier lancement : créer toutes les cartes
            this.cards = filteredQuestions.map(q => new Card(q));
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

    getDailyLimit() {
        return parseInt(localStorage.getItem('daily-limit') || '40');
    }

    getLimitedTodayCards() {
        const allDue = this.getTodayCards();
        const limit = this.getDailyLimit();
        if (allDue.length <= limit) return allDue;

        // Priorité : learning (en cours) > review (à revoir) > new (nouvelles)
        const learning = allDue.filter(c => c.status === 'learning');
        const review   = allDue.filter(c => c.status === 'review');
        const newCards = allDue.filter(c => c.status === 'new');
        const mastered = allDue.filter(c => c.status === 'mastered');

        let selected = [...learning];
        if (selected.length < limit) selected = selected.concat(review.slice(0, limit - selected.length));
        if (selected.length < limit) selected = selected.concat(newCards.slice(0, limit - selected.length));
        if (selected.length < limit) selected = selected.concat(mastered.slice(0, limit - selected.length));

        return selected.slice(0, limit);
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
        const allDue = this.getTodayCards();
        const limited = this.getLimitedTodayCards();
        this.todayCards = limited;

        const countEl = document.getElementById('today-count');
        if (allDue.length > limited.length) {
            countEl.textContent = `${limited.length}/${allDue.length}`;
        } else {
            countEl.textContent = limited.length;
        }

        document.getElementById('streak-count').textContent = this.getStreak();
        document.getElementById('mastered-count').textContent =
            this.cards.filter(c => c.status === 'mastered').length;
        document.getElementById('learning-count').textContent =
            this.cards.filter(c => c.status === 'learning' || c.status === 'review').length;
    }

    startSession() {
        this.todayCards = this.getLimitedTodayCards();
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

        // 🎮 Enregistrer la réponse dans le système Gaming
        this.gaming.recordAnswer(isCorrect);

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
        const wasNew = this.currentCard.status === 'new' || this.currentCard.status === 'learning';
        this.currentCard.review(quality);

        // 🎮 Vérifier si la carte est devenue "mastered"
        if (this.currentCard.status === 'mastered' && wasNew) {
            this.gaming.recordMasteredCard();
        }

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

        const nextCards = this.getLimitedTodayCards();
        const nextDate = nextCards.length > 0 ?
            `Il reste ${nextCards.length} question${nextCards.length > 1 ? 's' : ''} aujourd'hui !` :
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
        const allDue = this.getTodayCards();
        this.todayCards = this.getLimitedTodayCards();

        if (allDue.length === 0) {
            this.showNoQuestionsMessage();
        } else {
            const hasMore = allDue.length > this.todayCards.length;
            const extraInfo = hasMore ? `
                <br><span style="color: #ff9800; font-size: 0.9em;">
                    📋 ${allDue.length - this.todayCards.length} question${allDue.length - this.todayCards.length > 1 ? 's' : ''} supplémentaire${allDue.length - this.todayCards.length > 1 ? 's' : ''} reportée${allDue.length - this.todayCards.length > 1 ? 's' : ''} demain
                </span>` : '';

            document.getElementById('daily-tab').innerHTML = `
                <h2 style="margin-bottom: 15px;">🌅 Révision du jour</h2>
                <div class="info-box">
                    <strong>${this.todayCards.length} question${this.todayCards.length > 1 ? 's' : ''}</strong>
                    à réviser aujourd'hui${hasMore ? ` (sur ${allDue.length} disponibles)` : ''}.
                    ${extraInfo}
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

    // ========================================
    // 🎮 ONGLET GAMING
    // ========================================

    showGaming() {
        document.getElementById('gaming-tab').innerHTML = this.gaming.renderGamingDashboard();
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
        const isPremium = this.isPremium();
        const currentLimit = this.getDailyLimit();
        const premiumCode = localStorage.getItem('premium-code') || '';

        // Récupérer les stages actifs (par défaut : seul stage 1)
        const defaultStages = JSON.stringify(['Fondamentaux & Sécurité']);
        const activeStages = JSON.parse(localStorage.getItem('active-stages') || defaultStages);

        const stages = [
            { key: 'Fondamentaux & Sécurité', name: 'Fondamentaux & Sécurité', icon: '🎓', desc: 'Atelier, dessin, sécurité, bases', free: true },
            { key: 'Systèmes Thermiques', name: 'Systèmes Thermiques', icon: '🔧', desc: 'ECS, évacuation, émetteurs', free: false },
            { key: 'Systèmes Avancés', name: 'Systèmes Avancés', icon: '⚙️', desc: 'Gaz, solaire, VMC', free: false },
            { key: 'Chauffage', name: 'Chauffage', icon: '🔥', desc: 'Circuits, régulation, dimensionnement', free: false }
        ];

        document.getElementById('settings-tab').innerHTML = `
            <h2 style="margin-bottom: 20px;">⚙️ Réglages</h2>

            <!-- STATUT VERSION -->
            <div class="info-box" style="margin-bottom: 20px; background: ${isPremium ? '#e7f9eb' : '#fff3e0'}; border-left: 4px solid ${isPremium ? '#4caf50' : '#ff9800'};">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <h3 style="margin: 0;">${isPremium ? '✅ Version Premium' : '🆓 Version Gratuite'}</h3>
                    ${isPremium ? '<span style="background: #4caf50; color: white; padding: 5px 12px; border-radius: 12px; font-size: 0.85em; font-weight: bold;">PREMIUM</span>' : ''}
                </div>

                ${!isPremium ? `
                    <p style="color: #666; margin-bottom: 15px; font-size: 0.95em;">
                        📚 Accès limité au <strong>Stage 1</strong> (Fondamentaux & Sécurité) + Conversions<br>
                        🔒 Stages 2, 3, 4 bloqués (<strong>252 questions</strong> premium)
                    </p>
                    <div style="background: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: bold; color: #333;">🔑 Code d'activation Premium :</label>
                        <input type="text" id="premium-code-input" placeholder="Entrez votre code Gumroad (ex: ABCD-1234-EFGH-5678)"
                               style="width: 100%; padding: 12px; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 1em; margin-bottom: 10px;">
                        <button onclick="app.enterPremiumCode()"
                                style="width: 100%; padding: 12px; background: #4caf50; color: white; border: none; border-radius: 8px; font-size: 1em; font-weight: bold; cursor: pointer;">
                            🚀 Activer Premium
                        </button>
                    </div>

                    <!-- BOUTON ACHAT GUMROAD -->
                    <div style="background: linear-gradient(135deg, #FFD700, #FFA500); padding: 20px; border-radius: 12px; margin-top: 15px; text-align: center; box-shadow: 0 4px 15px rgba(255, 165, 0, 0.3);">
                        <div style="font-size: 1.2em; font-weight: bold; color: white; margin-bottom: 8px;">
                            ✨ Pas encore de code ?
                        </div>
                        <p style="color: white; margin-bottom: 15px; font-size: 0.9em; line-height: 1.4;">
                            Débloquez les <strong>200 questions</strong> et tous les stages !
                        </p>
                        <button onclick="window.open('https://albanuxem.gumroad.com/l/srojao', '_blank')"
                                style="width: 100%; padding: 15px; background: white; color: #FF8C00; border: none; border-radius: 8px; font-size: 1.1em; font-weight: bold; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">
                            💳 Acheter Premium (9,99€)
                        </button>
                        <p style="color: rgba(255,255,255,0.9); margin-top: 12px; font-size: 0.8em;">
                            ⚡ Code envoyé instantanément par email
                        </p>
                    </div>

                    <p style="color: #999; font-size: 0.85em; text-align: center; margin-top: 15px;">
                        💡 La version Premium débloque les 200 questions complètes
                    </p>
                ` : `
                    <p style="color: #2e7d32; margin-bottom: 10px;">
                        🎉 <strong>Toutes les fonctionnalités débloquées !</strong><br>
                        ✅ 200 questions • 4 stages complets
                    </p>
                    <div style="background: white; padding: 12px; border-radius: 8px; margin-bottom: 10px;">
                        <div style="color: #666; font-size: 0.9em;">
                            Code : <strong>${premiumCode.substring(0, 6)}***${premiumCode.slice(-3)}</strong>
                        </div>
                    </div>
                    <button onclick="if(confirm('Êtes-vous sûr de vouloir désactiver Premium ?')) app.deactivatePremiumAndReload()"
                            style="padding: 8px 16px; background: #ff6b6b; color: white; border: none; border-radius: 6px; font-size: 0.9em; cursor: pointer;">
                        Désactiver Premium
                    </button>
                `}
            </div>

            <!-- SÉLECTION DES STAGES -->
            <div class="info-box" style="margin-bottom: 20px; background: #e8f4ff; border-left: 4px solid #667eea;">
                <h3 style="margin-bottom: 10px;">📚 Stages à réviser</h3>
                <p style="color: #666; margin-bottom: 15px; font-size: 0.9em;">
                    Sélectionnez les stages selon votre progression
                </p>
                ${stages.map(stage => {
                    const isActive = activeStages.includes(stage.key);
                    const questionCount = allQuestions.filter(q => q.category.startsWith(stage.key)).length;
                    const isLocked = !stage.free && !isPremium;
                    return `
                        <div class="notification-toggle" style="margin-bottom: 10px; ${isLocked ? 'opacity: 0.6;' : ''}">
                            <div class="info" style="flex: 1;">
                                <h3 style="font-size: 1em; margin-bottom: 3px;">
                                    ${stage.icon} ${stage.name}
                                    ${isLocked ? '<span style="background: #ff9800; color: white; padding: 2px 8px; border-radius: 8px; font-size: 0.75em; margin-left: 8px;">🔒 PREMIUM</span>' : ''}
                                </h3>
                                <p style="font-size: 0.85em;">${stage.desc} (${questionCount} questions)</p>
                            </div>
                            <label class="switch">
                                <input type="checkbox"
                                       id="stage-${stage.key.replace(/[^a-z0-9]/gi, '')}"
                                       ${isActive ? 'checked' : ''}
                                       ${isLocked ? 'disabled' : ''}
                                       onchange="app.toggleStage('${stage.key}')">
                                <span class="slider"></span>
                            </label>
                        </div>
                    `;
                }).join('')}
                <p style="color: #999; margin-top: 15px; font-size: 0.85em;">
                    💡 Les questions seront filtrées selon les stages activés
                </p>
            </div>

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

            <!-- LIMITE QUOTIDIENNE -->
            <div class="info-box" style="margin-top: 20px;">
                <strong>📊 Limite quotidienne de questions</strong>
                <p style="margin-top: 8px; color: #666; font-size: 0.9em;">
                    Maximum par session (les questions prioritaires passent en premier)
                </p>
                <div style="display: flex; gap: 10px; margin-top: 12px;">
                    ${[20, 30, 40, 50].map(n => `
                        <button onclick="app.setDailyLimit(${n})"
                                style="flex: 1; padding: 10px; border: 2px solid ${currentLimit === n ? '#667eea' : '#e0e0e0'};
                                       background: ${currentLimit === n ? '#667eea' : 'white'};
                                       color: ${currentLimit === n ? 'white' : '#333'};
                                       border-radius: 8px; font-size: 1em; font-weight: bold; cursor: pointer;">
                            ${n}
                        </button>
                    `).join('')}
                </div>
                <p style="color: #999; margin-top: 10px; font-size: 0.8em;">
                    💡 Les questions en cours d'apprentissage sont toujours prioritaires
                </p>
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

    setDailyLimit(n) {
        localStorage.setItem('daily-limit', n.toString());
        this.updateDashboard();
        this.showSettings();
    }

    toggleStage(stageKey) {
        const defaultStages = JSON.stringify(['Fondamentaux & Sécurité']);
        let activeStages = JSON.parse(localStorage.getItem('active-stages') || defaultStages);

        if (activeStages.includes(stageKey)) {
            // Désactiver le stage
            activeStages = activeStages.filter(s => s !== stageKey);
            // Empêcher de désactiver tous les stages
            if (activeStages.length === 0) {
                alert('⚠️ Au moins un stage doit rester activé !');
                document.getElementById('stage-' + stageKey.replace(/[^a-z0-9]/gi, '')).checked = true;
                return;
            }
        } else {
            // Activer le stage
            activeStages.push(stageKey);
        }

        localStorage.setItem('active-stages', JSON.stringify(activeStages));

        // Compter les cartes avant rechargement
        const cardsBefore = this.cards.length;

        // Recharger les cartes filtrées et ajouter les nouvelles questions
        this.loadData();
        this.saveData(); // ✨ Sauvegarder les nouvelles cartes ajoutées
        this.updateDashboard();

        // Calculer les nouvelles questions ajoutées
        const cardsAfter = this.cards.length;
        const newQuestionsAdded = cardsAfter - cardsBefore;

        setTimeout(() => {
            if (newQuestionsAdded > 0) {
                alert(`✅ ${activeStages.length} stage(s) activé(s)\n\n🆕 ${newQuestionsAdded} nouvelles questions ajoutées !\n📚 Total : ${cardsAfter} questions disponibles\n\n💡 Les nouvelles questions seront étalées sur 3 jours max`);
            } else {
                alert(`✅ ${activeStages.length} stage(s) activé(s) - ${cardsAfter} questions disponibles`);
            }
        }, 100);
    }

    showQuizTab() {
        this.quiz.showCategorySelection();
    }

    showCalculatorTab() {
        this.calculator.showMenu();
    }

    showFormulas() {
        document.getElementById('formulas-tab').innerHTML = `
            <h2 style="text-align: center; margin-bottom: 20px;">📐 Formules essentielles</h2>
            <p style="color: #666; text-align: center; margin-bottom: 30px; font-size: 0.9em;">
                Toutes les formules à connaître pour le CAP M.I.T FC
            </p>

            <!-- CONVERSIONS COURANTES -->
            <div class="info-box" style="margin-bottom: 20px;">
                <h3 style="margin-bottom: 15px; color: #667eea;">🔄 Conversions courantes</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div>
                        <strong>Longueurs :</strong>
                        <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9em;">
                            <li>1 m = 100 cm = 1000 mm</li>
                            <li>1\" (pouce) = 25.4 mm</li>
                            <li>1/2\" = 12.7 mm</li>
                            <li>3/4\" = 19.05 mm</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Volumes :</strong>
                        <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9em;">
                            <li>1 m³ = 1000 litres</li>
                            <li>1 L = 1 dm³</li>
                            <li>1 L = 1000 cm³</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Débits :</strong>
                        <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9em;">
                            <li>L/min × 60 = L/h</li>
                            <li>m³/h ÷ 60 = L/min</li>
                            <li>1 m³/h = 16.67 L/min</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Puissance :</strong>
                        <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9em;">
                            <li>1 kW = 1000 W</li>
                            <li>1 W ≈ 0.86 kcal/h</li>
                            <li>1 kWh = 3600 kJ</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Pression :</strong>
                        <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9em;">
                            <li>1 bar = 100 kPa</li>
                            <li>1 bar = 100000 Pa</li>
                            <li>1 bar ≈ 1 atm</li>
                            <li>10 m CE = 1 bar</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Température :</strong>
                        <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9em;">
                            <li>K = °C + 273</li>
                            <li>0°C = 273 K</li>
                            <li>20°C = 293 K</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- DIAMÈTRES CUIVRE -->
            <div class="info-box" style="margin-bottom: 20px; background: #fff3e0; border-left: 4px solid #ff9800;">
                <h3 style="margin-bottom: 15px; color: #ff9800;">🔧 Diamètres cuivre (DN nominal)</h3>
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9em;">
                    <tr style="background: #fff; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ddd;">Pouces</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">DN</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Ø ext (mm)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Usage</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">3/8"</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">10</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">12</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Alimentation</td>
                    </tr>
                    <tr style="background: #fafafa;">
                        <td style="padding: 8px; border: 1px solid #ddd;">1/2"</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">14</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">14</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Sanitaire</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">3/4"</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">16</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">16</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Distribution</td>
                    </tr>
                    <tr style="background: #fafafa;">
                        <td style="padding: 8px; border: 1px solid #ddd;">1"</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">20</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">22</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Nourrice</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">1"1/4</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">26</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">28</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Collecteur</td>
                    </tr>
                    <tr style="background: #fafafa;">
                        <td style="padding: 8px; border: 1px solid #ddd;">1"1/2</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">33</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">35</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Principal</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">2"</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">40</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">42</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Colonne</td>
                    </tr>
                </table>
            </div>

            <!-- CINTRAGE CUIVRE -->
            <div class="info-box" style="margin-bottom: 20px;">
                <h3 style="margin-bottom: 15px; color: #667eea;">📏 Formules cintrage cuivre</h3>
                <ul style="margin: 0; padding-left: 20px;">
                    <li><strong>Périmètre du cercle :</strong> P = π × D (π ≈ 3.14)</li>
                    <li><strong>Longueur développée d'un coude 90° :</strong> L = (π × D) / 4</li>
                    <li><strong>Rayon de cintrage minimum :</strong> R = 3.5 × D (tube recuit)</li>
                    <li><strong>Angle de cintrage max :</strong> 90° sans déformation</li>
                    <li><strong>Matrice :</strong> Rayon = 3 à 5 × Ø extérieur du tube</li>
                </ul>
            </div>

            <!-- ACIER ET TARAUDAGE -->
            <div class="info-box" style="margin-bottom: 20px; background: #e8f5e9; border-left: 4px solid #4caf50;">
                <h3 style="margin-bottom: 15px; color: #4caf50;">🔩 Acier - Diamètres et taraudage</h3>
                <table style="width: 100%; border-collapse: collapse; font-size: 0.9em; margin-bottom: 15px;">
                    <tr style="background: #fff; font-weight: bold;">
                        <td style="padding: 8px; border: 1px solid #ddd;">Pouces</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">DN</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Ø ext (mm)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Filetage</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">1/2"</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">15</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">21.3</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">20/27</td>
                    </tr>
                    <tr style="background: #f5f5f5;">
                        <td style="padding: 8px; border: 1px solid #ddd;">3/4"</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">20</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">26.9</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">26/34</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">1"</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">25</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">33.7</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">33/42</td>
                    </tr>
                    <tr style="background: #f5f5f5;">
                        <td style="padding: 8px; border: 1px solid #ddd;">1"1/4</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">32</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">42.4</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">40/49</td>
                    </tr>
                </table>
                <ul style="margin: 0; padding-left: 20px;">
                    <li><strong>Filetage gaz ISO 228 :</strong> pas de 11 filets/pouce pour 1/2" à 2"</li>
                    <li><strong>Longueur de filetage :</strong> 6 à 9 filets minimum pour étanchéité</li>
                    <li><strong>Taraudage :</strong> Ø perçage = Ø nominal - pas du filet</li>
                </ul>
            </div>

            <!-- CHAUFFAGE -->
            <div class="info-box" style="margin-bottom: 20px; background: #ffebee; border-left: 4px solid #f44336;">
                <h3 style="margin-bottom: 15px; color: #f44336;">🔥 Formules chauffage</h3>
                <ul style="margin: 0; padding-left: 20px;">
                    <li><strong>Puissance nécessaire :</strong> P (W) = Volume (m³) × Coef isolation (W/m³)</li>
                    <li><strong>Coefficients isolation :</strong>
                        <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9em;">
                            <li>Mauvaise : 100 W/m³</li>
                            <li>Moyenne : 60 W/m³</li>
                            <li>Bonne : 40 W/m³</li>
                            <li>Excellente (BBC) : 30 W/m³</li>
                        </ul>
                    </li>
                    <li><strong>Déperditions par m² :</strong> Q = K × S × ΔT
                        <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9em;">
                            <li>K = coefficient déperdition (W/m²·K)</li>
                            <li>S = surface (m²)</li>
                            <li>ΔT = différence de température (K)</li>
                        </ul>
                    </li>
                    <li><strong>Débit de circulation :</strong> Q (L/h) = P (W) / (1.16 × ΔT)
                        <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9em;">
                            <li>P = puissance (W)</li>
                            <li>ΔT = écart température départ/retour (°C)</li>
                            <li>1.16 = chaleur volumique eau</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- HYDRAULIQUE -->
            <div class="info-box" style="margin-bottom: 20px;">
                <h3 style="margin-bottom: 15px; color: #667eea;">💧 Formules hydraulique</h3>
                <ul style="margin: 0; padding-left: 20px;">
                    <li><strong>Débit :</strong> Q = S × v
                        <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9em;">
                            <li>Q = débit (m³/s ou L/s)</li>
                            <li>S = section (m² ou cm²)</li>
                            <li>v = vitesse (m/s)</li>
                        </ul>
                    </li>
                    <li><strong>Vitesse recommandée :</strong> 1 à 2 m/s (sanitaire)</li>
                    <li><strong>Pression hydrostatique :</strong> P (bar) = ρ × g × h / 100000
                        <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9em;">
                            <li>10 m de hauteur d'eau = 1 bar</li>
                            <li>1 m CE (colonne d'eau) = 0.1 bar</li>
                        </ul>
                    </li>
                    <li><strong>Perte de charge linéaire :</strong> Consulter abaques selon Ø et débit</li>
                </ul>
            </div>

            <!-- ÉVACUATION -->
            <div class="info-box" style="margin-bottom: 20px; background: #f3e5f5; border-left: 4px solid #9c27b0;">
                <h3 style="margin-bottom: 15px; color: #9c27b0;">↘️ Évacuation - Pentes</h3>
                <ul style="margin: 0; padding-left: 20px;">
                    <li><strong>Pente (%) :</strong> (dénivelé / longueur) × 100</li>
                    <li><strong>Pente (cm/m) :</strong> dénivelé (cm) / longueur (m)</li>
                    <li><strong>Pentes minimales eaux usées :</strong>
                        <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9em;">
                            <li>DN 32-40 : 2 à 3 cm/m (2-3%)</li>
                            <li>DN 100 : 1 à 3 cm/m (1-3%)</li>
                            <li>DN 125 : 0.5 à 2 cm/m</li>
                            <li>DN 160 : 0.5 à 1.5 cm/m</li>
                        </ul>
                    </li>
                    <li><strong>Diamètres évacuation :</strong>
                        <ul style="margin: 5px 0; padding-left: 20px; font-size: 0.9em;">
                            <li>Lavabo, bidet : DN 32</li>
                            <li>Évier, douche : DN 40</li>
                            <li>WC, chute : DN 100</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- SURFACES ET VOLUMES -->
            <div class="info-box">
                <h3 style="margin-bottom: 15px; color: #667eea;">📐 Surfaces et volumes</h3>
                <ul style="margin: 0; padding-left: 20px;">
                    <li><strong>Rectangle :</strong> S = L × l</li>
                    <li><strong>Cercle :</strong> S = π × r²</li>
                    <li><strong>Parallélépipède :</strong> V = L × l × h</li>
                    <li><strong>Cylindre :</strong> V = π × r² × h</li>
                    <li><strong>Périmètre cercle :</strong> P = π × D = 2 × π × r</li>
                </ul>
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
        case 'gaming':
            app.showGaming();
            break;
        case 'quiz':
            app.showQuizTab();
            break;
        case 'formulas':
            app.showFormulas();
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
        case 'calculator':
            app.showCalculatorTab();
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
