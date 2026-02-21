// ========================================
// 🎮 SYSTÈME GAMING - Version 3.1
// ========================================

class GamingSystem {
    constructor() {
        this.loadGamingData();
    }

    loadGamingData() {
        const saved = localStorage.getItem('gaming-data');
        if (saved) {
            const data = JSON.parse(saved);
            this.xp = data.xp || 0;
            this.level = data.level || 1;
            this.streakCount = data.streakCount || 0;
            this.bestStreak = data.bestStreak || 0;
            this.lastVisit = data.lastVisit ? new Date(data.lastVisit) : new Date();
            this.streakFreezeAvailable = data.streakFreezeAvailable !== undefined ? data.streakFreezeAvailable : true;
            this.lastFreezeReset = data.lastFreezeReset ? new Date(data.lastFreezeReset) : new Date();
            this.badges = data.badges || [];
            this.dailyGoals = data.dailyGoals || this.getDefaultDailyGoals();
            this.stats = data.stats || {
                totalQuestions: 0,
                correctAnswers: 0,
                todayQuestions: 0,
                weekQuestions: [0, 0, 0, 0, 0, 0, 0], // Lun-Dim
                bestDayQuestions: 0,
                consecutiveCorrect: 0,
                bestConsecutiveCorrect: 0
            };
        } else {
            this.xp = 0;
            this.level = 1;
            this.streakCount = 0;
            this.bestStreak = 0;
            this.lastVisit = new Date();
            this.streakFreezeAvailable = true;
            this.lastFreezeReset = new Date();
            this.badges = [];
            this.dailyGoals = this.getDefaultDailyGoals();
            this.stats = {
                totalQuestions: 0,
                correctAnswers: 0,
                todayQuestions: 0,
                weekQuestions: [0, 0, 0, 0, 0, 0, 0],
                bestDayQuestions: 0,
                consecutiveCorrect: 0,
                bestConsecutiveCorrect: 0
            };
        }

        this.checkStreak();
        this.checkDailyGoalsReset();
        this.checkMonthlyFreezeReset();
    }

    saveGamingData() {
        const data = {
            xp: this.xp,
            level: this.level,
            streakCount: this.streakCount,
            bestStreak: this.bestStreak,
            lastVisit: this.lastVisit,
            streakFreezeAvailable: this.streakFreezeAvailable,
            lastFreezeReset: this.lastFreezeReset,
            badges: this.badges,
            dailyGoals: this.dailyGoals,
            stats: this.stats
        };
        localStorage.setItem('gaming-data', JSON.stringify(data));
    }

    // ========================================
    // 🔥 SYSTÈME DE STREAKS
    // ========================================

    checkStreak() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const lastVisit = new Date(this.lastVisit);
        lastVisit.setHours(0, 0, 0, 0);

        const daysDiff = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysDiff === 0) {
            // Même jour, ne rien faire
            return;
        } else if (daysDiff === 1) {
            // Jour suivant, continuer la série
            this.streakCount++;
            if (this.streakCount > this.bestStreak) {
                this.bestStreak = this.streakCount;
            }
            this.lastVisit = new Date();
            this.saveGamingData();
            this.showStreakContinued();
        } else if (daysDiff > 1) {
            // Série cassée !
            if (this.streakFreezeAvailable) {
                // Proposer d'utiliser le gel
                this.offerStreakFreeze(daysDiff);
            } else {
                // Série perdue
                this.resetStreak();
            }
        }
    }

    showStreakContinued() {
        if (this.streakCount >= 3) {
            this.showNotification(`🔥 ${this.streakCount} jours de série !`, 'success');
        }
    }

    offerStreakFreeze(daysMissed) {
        if (daysMissed <= 2 && confirm(`⚠️ Tu as manqué ${daysMissed} jour(s) !\n\n🛡️ Veux-tu utiliser ton GEL DE SÉRIE pour sauver ta série de ${this.streakCount} jours ?\n(1 gel disponible par mois)`)) {
            this.streakFreezeAvailable = false;
            this.lastVisit = new Date();
            this.saveGamingData();
            this.showNotification('🛡️ Gel de série utilisé ! Ta série continue !', 'success');
        } else {
            this.resetStreak();
        }
    }

    resetStreak() {
        const oldStreak = this.streakCount;
        this.streakCount = 1; // Redémarre à 1 (aujourd'hui)
        this.lastVisit = new Date();
        this.saveGamingData();
        if (oldStreak >= 3) {
            this.showNotification(`💔 Série perdue (${oldStreak} jours). Redémarre aujourd'hui !`, 'warning');
        }
    }

    checkMonthlyFreezeReset() {
        const today = new Date();
        const lastReset = new Date(this.lastFreezeReset);

        // Reset le 1er de chaque mois
        if (today.getMonth() !== lastReset.getMonth() || today.getFullYear() !== lastReset.getFullYear()) {
            this.streakFreezeAvailable = true;
            this.lastFreezeReset = new Date();
            this.saveGamingData();
        }
    }

    // ========================================
    // ⭐ SYSTÈME XP + NIVEAUX
    // ========================================

    addXP(amount, reason = '') {
        const oldLevel = this.level;
        this.xp += amount;

        // Calcul du niveau
        while (this.xp >= this.getXPForNextLevel()) {
            this.level++;
        }

        this.saveGamingData();

        // Animation XP
        this.showXPGain(amount, reason);

        // Level up !
        if (this.level > oldLevel) {
            this.onLevelUp(oldLevel);
        }
    }

    getXPForNextLevel() {
        // Formule : 100 * niveau^1.5
        return Math.floor(100 * Math.pow(this.level, 1.5));
    }

    getXPForCurrentLevel() {
        if (this.level === 1) return 0;
        return Math.floor(100 * Math.pow(this.level - 1, 1.5));
    }

    getXPProgress() {
        const currentLevelXP = this.getXPForCurrentLevel();
        const nextLevelXP = this.getXPForNextLevel();
        return {
            current: this.xp - currentLevelXP,
            max: nextLevelXP - currentLevelXP,
            percentage: Math.round(((this.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100)
        };
    }

    getLevelTitle() {
        if (this.level >= 30) return 'Formateur CAP';
        if (this.level >= 25) return 'Maître Installateur';
        if (this.level >= 20) return 'Expert Confirmé';
        if (this.level >= 15) return 'Installateur Expert';
        if (this.level >= 10) return 'Technicien Qualifié';
        if (this.level >= 5) return 'Ouvrier Qualifié';
        return 'Apprenti';
    }

    onLevelUp(oldLevel) {
        this.showLevelUpAnimation();
        this.checkBadges();
    }

    showLevelUpAnimation() {
        const title = this.getLevelTitle();
        this.showNotification(`🎉 NIVEAU ${this.level} !\n${title}`, 'levelup');
    }

    showXPGain(amount, reason) {
        const message = reason ? `+${amount} XP - ${reason}` : `+${amount} XP`;
        this.showNotification(message, 'xp');
    }

    // ========================================
    // 🎯 OBJECTIFS QUOTIDIENS
    // ========================================

    getDefaultDailyGoals() {
        return {
            date: new Date().toDateString(),
            goals: [
                { id: 'daily_questions', name: 'Réviser 20 questions', target: 20, current: 0, xp: 100, completed: false },
                { id: 'maintain_streak', name: 'Maintenir ta série', target: 1, current: 0, xp: 50, completed: false },
                { id: 'master_cards', name: 'Maîtriser 3 cartes', target: 3, current: 0, xp: 150, completed: false }
            ]
        };
    }

    checkDailyGoalsReset() {
        const today = new Date().toDateString();
        if (this.dailyGoals.date !== today) {
            this.dailyGoals = this.getDefaultDailyGoals();
            this.saveGamingData();
        }
    }

    updateDailyGoal(goalId, increment = 1) {
        const goal = this.dailyGoals.goals.find(g => g.id === goalId);
        if (goal && !goal.completed) {
            goal.current = Math.min(goal.current + increment, goal.target);

            if (goal.current >= goal.target && !goal.completed) {
                goal.completed = true;
                this.addXP(goal.xp, `Objectif : ${goal.name}`);
                this.showNotification(`✅ ${goal.name} - Accompli !`, 'success');
            }

            this.saveGamingData();
        }
    }

    getDailyGoalsProgress() {
        const completed = this.dailyGoals.goals.filter(g => g.completed).length;
        const total = this.dailyGoals.goals.length;
        return { completed, total, percentage: Math.round((completed / total) * 100) };
    }

    // ========================================
    // 🏆 SYSTÈME DE BADGES
    // ========================================

    getAllBadges() {
        return [
            // Badges Séries
            { id: 'streak_3', name: '🔥 Débutant déterminé', desc: 'Série de 3 jours', condition: () => this.streakCount >= 3 },
            { id: 'streak_7', name: '🔥 Semaine parfaite', desc: 'Série de 7 jours', condition: () => this.streakCount >= 7 },
            { id: 'streak_14', name: '🔥 Deux semaines !', desc: 'Série de 14 jours', condition: () => this.streakCount >= 14 },
            { id: 'streak_30', name: '🔥 Mois de fer', desc: 'Série de 30 jours', condition: () => this.streakCount >= 30 },
            { id: 'streak_100', name: '🔥 Centurion', desc: 'Série de 100 jours', condition: () => this.streakCount >= 100 },

            // Badges Niveaux
            { id: 'level_5', name: '⭐ Qualifié', desc: 'Atteindre niveau 5', condition: () => this.level >= 5 },
            { id: 'level_10', name: '⭐ Technicien', desc: 'Atteindre niveau 10', condition: () => this.level >= 10 },
            { id: 'level_15', name: '⭐ Expert', desc: 'Atteindre niveau 15', condition: () => this.level >= 15 },
            { id: 'level_20', name: '⭐ Maître', desc: 'Atteindre niveau 20', condition: () => this.level >= 20 },
            { id: 'level_30', name: '⭐ Formateur', desc: 'Atteindre niveau 30', condition: () => this.level >= 30 },

            // Badges Questions
            { id: 'questions_100', name: '📚 Studieux', desc: '100 questions révisées', condition: () => this.stats.totalQuestions >= 100 },
            { id: 'questions_500', name: '📚 Marathon', desc: '500 questions révisées', condition: () => this.stats.totalQuestions >= 500 },
            { id: 'questions_1000', name: '📚 Encyclopédie', desc: '1000 questions révisées', condition: () => this.stats.totalQuestions >= 1000 },

            // Badges Précision
            { id: 'accuracy_50', name: '🎯 Bon élève', desc: '50 bonnes réponses', condition: () => this.stats.correctAnswers >= 50 },
            { id: 'accuracy_200', name: '🎯 Tireur d\'élite', desc: '200 bonnes réponses', condition: () => this.stats.correctAnswers >= 200 },
            { id: 'combo_5', name: '⚡ Combo x5', desc: '5 bonnes d\'affilée', condition: () => this.stats.bestConsecutiveCorrect >= 5 },
            { id: 'combo_10', name: '⚡ Combo x10', desc: '10 bonnes d\'affilée', condition: () => this.stats.bestConsecutiveCorrect >= 10 },
            { id: 'combo_20', name: '⚡ Inarrêtable', desc: '20 bonnes d\'affilée', condition: () => this.stats.bestConsecutiveCorrect >= 20 },

            // Badges Spéciaux
            { id: 'first_review', name: '🎓 Première révision', desc: 'Commencer l\'aventure', condition: () => this.stats.totalQuestions >= 1 },
            { id: 'day_champion', name: '🏆 Champion du jour', desc: '50 questions en un jour', condition: () => this.stats.bestDayQuestions >= 50 },
            { id: 'perfectionist', name: '💎 Perfectionniste', desc: '20 questions sans erreur', condition: () => this.stats.bestConsecutiveCorrect >= 20 }
        ];
    }

    checkBadges() {
        const allBadges = this.getAllBadges();
        let newBadges = [];

        for (const badge of allBadges) {
            if (!this.badges.includes(badge.id) && badge.condition()) {
                this.badges.push(badge.id);
                newBadges.push(badge);
            }
        }

        if (newBadges.length > 0) {
            this.saveGamingData();
            for (const badge of newBadges) {
                this.showBadgeUnlocked(badge);
            }
        }
    }

    showBadgeUnlocked(badge) {
        this.showNotification(`🏆 BADGE DÉBLOQUÉ !\n${badge.name}\n${badge.desc}`, 'badge');
    }

    getUnlockedBadges() {
        const allBadges = this.getAllBadges();
        return allBadges.filter(b => this.badges.includes(b.id));
    }

    getLockedBadges() {
        const allBadges = this.getAllBadges();
        return allBadges.filter(b => !this.badges.includes(b.id));
    }

    // ========================================
    // 📊 STATISTIQUES
    // ========================================

    recordAnswer(correct) {
        this.stats.totalQuestions++;
        this.stats.todayQuestions++;

        // Mise à jour semaine
        const dayOfWeek = new Date().getDay();
        const adjustedDay = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Lundi = 0
        this.stats.weekQuestions[adjustedDay]++;

        // Record du jour
        if (this.stats.todayQuestions > this.stats.bestDayQuestions) {
            this.stats.bestDayQuestions = this.stats.todayQuestions;
        }

        if (correct) {
            this.stats.correctAnswers++;
            this.stats.consecutiveCorrect++;

            if (this.stats.consecutiveCorrect > this.stats.bestConsecutiveCorrect) {
                this.stats.bestConsecutiveCorrect = this.stats.consecutiveCorrect;
            }

            // XP pour bonne réponse
            let xp = 10;

            // Bonus combo
            if (this.stats.consecutiveCorrect >= 5) {
                xp += Math.min(this.stats.consecutiveCorrect * 2, 50);
                if (this.stats.consecutiveCorrect % 5 === 0) {
                    this.showNotification(`🔥 COMBO x${this.stats.consecutiveCorrect} !`, 'combo');
                }
            }

            this.addXP(xp, correct ? 'Bonne réponse' : '');
        } else {
            this.stats.consecutiveCorrect = 0;
        }

        // Mise à jour objectifs
        this.updateDailyGoal('daily_questions', 1);

        this.saveGamingData();
        this.checkBadges();
    }

    recordMasteredCard() {
        this.updateDailyGoal('master_cards', 1);
        this.addXP(100, 'Carte maîtrisée');
    }

    // ========================================
    // 🎨 NOTIFICATIONS & ANIMATIONS
    // ========================================

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `gaming-notification ${type}`;
        notification.textContent = message;

        const styles = {
            'info': 'background: #667eea; color: white;',
            'success': 'background: #48bb78; color: white;',
            'warning': 'background: #ed8936; color: white;',
            'xp': 'background: #4299e1; color: white; font-size: 0.9em;',
            'combo': 'background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; font-size: 1.1em; font-weight: bold;',
            'levelup': 'background: linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%); color: #333; font-size: 1.2em; font-weight: bold;',
            'badge': 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 1.1em; font-weight: bold;'
        };

        notification.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 25px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 10000;
            animation: slideDown 0.3s ease-out;
            max-width: 90%;
            text-align: center;
            white-space: pre-line;
            ${styles[type] || styles.info}
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideUp 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, type === 'levelup' || type === 'badge' ? 3000 : 2000);
    }

    // ========================================
    // 🎮 DASHBOARD GAMING
    // ========================================

    renderGamingDashboard() {
        const xpProgress = this.getXPProgress();
        const dailyProgress = this.getDailyGoalsProgress();
        const unlockedBadges = this.getUnlockedBadges();
        const nextBadges = this.getLockedBadges().slice(0, 3);

        return `
            <!-- HEADER GAMING -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <div>
                        <div style="font-size: 0.9em; opacity: 0.9;">Niveau ${this.level}</div>
                        <div style="font-size: 1.3em; font-weight: bold;">${this.getLevelTitle()}</div>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-size: 2em;">🔥</div>
                        <div style="font-size: 1.2em; font-weight: bold;">${this.streakCount}</div>
                        <div style="font-size: 0.8em; opacity: 0.9;">jours</div>
                    </div>
                </div>

                <!-- BARRE XP -->
                <div style="background: rgba(255,255,255,0.2); border-radius: 20px; height: 30px; overflow: hidden; position: relative;">
                    <div style="background: rgba(255,255,255,0.9); height: 100%; width: ${xpProgress.percentage}%; transition: width 0.5s ease;"></div>
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.9em; font-weight: bold; color: #667eea; text-shadow: 0 1px 2px rgba(255,255,255,0.5);">
                        ${xpProgress.current} / ${xpProgress.max} XP
                    </div>
                </div>
                <div style="text-align: center; margin-top: 8px; font-size: 0.85em; opacity: 0.9;">
                    Plus que ${xpProgress.max - xpProgress.current} XP pour le niveau ${this.level + 1} !
                </div>
            </div>

            ${this.streakCount === 0 ? `
                <div class="info-box" style="background: #fff3cd; border-left: 4px solid #ffc107; margin-bottom: 20px;">
                    <strong>⚠️ Commence ta série !</strong><br>
                    Révise tous les jours pour créer une série 🔥
                </div>
            ` : this.streakCount >= 3 ? `
                <div class="info-box" style="background: #d4edda; border-left: 4px solid #28a745; margin-bottom: 20px;">
                    <strong>🔥 Série active : ${this.streakCount} jours !</strong><br>
                    Record : ${this.bestStreak} jours
                    ${this.streakFreezeAvailable ? '<br>🛡️ Gel de série disponible' : ''}
                </div>
            ` : ''}

            <!-- OBJECTIFS QUOTIDIENS -->
            <div class="info-box" style="margin-bottom: 20px;">
                <h3 style="margin-bottom: 15px;">🎯 Objectifs du jour (${dailyProgress.completed}/${dailyProgress.total})</h3>
                ${this.dailyGoals.goals.map(goal => `
                    <div style="margin-bottom: 15px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span>${goal.completed ? '✅' : '⬜'} ${goal.name}</span>
                            <span style="color: #667eea; font-weight: bold;">${goal.current}/${goal.target}</span>
                        </div>
                        <div style="background: #e0e0e0; border-radius: 10px; height: 8px; overflow: hidden;">
                            <div style="background: ${goal.completed ? '#48bb78' : '#667eea'}; height: 100%; width: ${Math.min((goal.current / goal.target) * 100, 100)}%; transition: width 0.3s ease;"></div>
                        </div>
                        ${!goal.completed ? `<div style="font-size: 0.8em; color: #666; margin-top: 3px;">+${goal.xp} XP</div>` : ''}
                    </div>
                `).join('')}
            </div>

            <!-- BADGES -->
            <div class="info-box" style="margin-bottom: 20px;">
                <h3 style="margin-bottom: 15px;">🏆 Badges (${unlockedBadges.length}/${this.getAllBadges().length})</h3>

                ${unlockedBadges.length > 0 ? `
                    <div style="margin-bottom: 15px;">
                        <div style="font-size: 0.9em; color: #666; margin-bottom: 8px;">Débloqués récemment</div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px;">
                            ${unlockedBadges.slice(-6).reverse().map(badge => `
                                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px; border-radius: 8px; text-align: center;">
                                    <div style="font-size: 1.5em; margin-bottom: 5px;">${badge.name.split(' ')[0]}</div>
                                    <div style="font-size: 0.75em; opacity: 0.9;">${badge.name.split(' ').slice(1).join(' ')}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${nextBadges.length > 0 ? `
                    <div>
                        <div style="font-size: 0.9em; color: #666; margin-bottom: 8px;">Prochains badges</div>
                        ${nextBadges.map(badge => `
                            <div style="display: flex; align-items: center; padding: 8px; background: #f5f5f5; border-radius: 6px; margin-bottom: 8px;">
                                <div style="font-size: 1.5em; margin-right: 10px; opacity: 0.3;">${badge.name.split(' ')[0]}</div>
                                <div style="flex: 1;">
                                    <div style="font-weight: bold; font-size: 0.9em;">${badge.name.split(' ').slice(1).join(' ')}</div>
                                    <div style="font-size: 0.8em; color: #666;">${badge.desc}</div>
                                </div>
                                <div style="color: #999;">🔒</div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>

            <!-- STATS CETTE SEMAINE -->
            <div class="info-box">
                <h3 style="margin-bottom: 15px;">📊 Cette semaine</h3>
                ${this.renderWeekChart()}
                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; text-align: center;">
                        <div>
                            <div style="font-size: 0.8em; color: #666;">Aujourd'hui</div>
                            <div style="font-size: 1.5em; font-weight: bold; color: #667eea;">${this.stats.todayQuestions}</div>
                        </div>
                        <div>
                            <div style="font-size: 0.8em; color: #666;">Record</div>
                            <div style="font-size: 1.5em; font-weight: bold; color: #48bb78;">${this.stats.bestDayQuestions}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderWeekChart() {
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
        const max = Math.max(...this.stats.weekQuestions, 1);
        const today = new Date().getDay();
        const adjustedToday = today === 0 ? 6 : today - 1;

        return `
            <div style="display: flex; justify-content: space-around; align-items: flex-end; height: 100px; gap: 5px;">
                ${this.stats.weekQuestions.map((count, i) => {
                    const height = (count / max) * 80 + 20;
                    const isToday = i === adjustedToday;
                    return `
                        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                            <div style="font-size: 0.7em; color: ${isToday ? '#667eea' : '#999'}; margin-bottom: 5px; font-weight: ${isToday ? 'bold' : 'normal'};">
                                ${count}
                            </div>
                            <div style="background: ${isToday ? '#667eea' : count > 0 ? '#48bb78' : '#e0e0e0'}; width: 100%; height: ${height}%; border-radius: 4px 4px 0 0; transition: height 0.3s ease;"></div>
                            <div style="font-size: 0.8em; margin-top: 5px; font-weight: ${isToday ? 'bold' : 'normal'}; color: ${isToday ? '#667eea' : '#666'};">
                                ${days[i]}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }
}
