// Learning path data
const learningPath = {
    phase1: {
        title: "Phase 1: Stoffaneignung (Tag 1-10)",
        description: "<strong>Ziel:</strong> Die Fakten, Modelle und Theorien verstehen und aktiv wiedergeben können.",
        days: [
            {
                day: 1,
                title: "Wirtschaftspolitik I (Grundlagen & Konjunktur)",
                tasks: [
                    { text: "BIP: Definition verstehen und Kritik daran", completed: false },
                    { text: "Alternative Wohlstandsindikatoren: Better-Life-Index, HDI", completed: false },
                    { text: "Grenzen des Wachstums vs. Postwachstumsökonomie", completed: false },
                    { text: "Magisches Viereck / Sechseck verstehen", completed: false },
                    { text: "Stabilitätsgesetz 1967 (StabG)", completed: false },
                    { text: "Maastricht-Kriterien", completed: false },
                    { text: "Zielbeziehungen (Konflikte/Harmonie)", completed: false },
                    { text: "Konjunkturzyklus (Phasen)", completed: false },
                    { text: "Konjunkturtheorien: Lange Wellen, exogene/endogene", completed: false },
                    { text: "Wirtschaftliche Prognosen & Sachverständigenrat", completed: false },
                    { text: "Praxis: Aktuelle konjunkturelle Daten einordnen", completed: false }
                ]
            },
            {
                day: 2,
                title: "Wirtschaftspolitik II (Theorien, EZB & Krisen)",
                tasks: [
                    { text: "Inflation & Deflation: Ursachen, Folgen, Messung (Verbraucherpreisindex)", completed: false },
                    { text: "Arbeitslosigkeit: Definition, ALQ, Stille Reserve", completed: false },
                    { text: "Arbeitslosigkeit: Arten, Ursachen, Folgen in DE", completed: false },
                    { text: "Nachfrageorientierte Theorien: Keynes / Fiskalpolitik", completed: false },
                    { text: "Angebotsorientierte Theorien: Friedman / Monetarismus", completed: false },
                    { text: "Multiplikator & Akzelerator", completed: false },
                    { text: "Policy mix", completed: false },
                    { text: "Geldschöpfung", completed: false },
                    { text: "EZB: Aufbau, Stellung, Ziele, Zwei-Säulen-Strategie", completed: false },
                    { text: "EZB: Instrumente, Leitzinsentwicklung", completed: false },
                    { text: "Staatsverschuldung: Folgen, Schuldenbremse, Schwarze Null", completed: false },
                    { text: "Außenhandel: Importe/Exporte, Vor-/Nachteile", completed: false },
                    { text: "Leistungsbilanz, Exportüberschüsse", completed: false }
                ]
            },
            {
                day: 3,
                title: "Europäische Union I (Struktur & Binnenmarkt)",
                tasks: [
                    { text: "Wiederholung: 15 Min. Kurz-Quiz zu Keynes vs. Friedman", completed: false },
                    { text: "Was ist Europa? Historie, Motive der Einigung", completed: false },
                    { text: "Schritte der Integration", completed: false },
                    { text: "Institutionen: Prinzipien", completed: false },
                    { text: "Europäischer Rat", completed: false },
                    { text: "EU-Parlament", completed: false },
                    { text: "Rat der EU", completed: false },
                    { text: "Kommission", completed: false },
                    { text: "EuGH", completed: false },
                    { text: "Gesetzgebungsverfahren", completed: false },
                    { text: "Europäischer Binnenmarkt (4 Freiheiten)", completed: false },
                    { text: "Schengen", completed: false },
                    { text: "Zuständigkeiten der EU", completed: false },
                    { text: "Regulations-, Kontroll- und Interventionsmechanismen", completed: false }
                ]
            },
            {
                day: 4,
                title: "Europäische Union II (Krise, Vertiefung & Zukunft)",
                tasks: [
                    { text: "Eurozone/EWWU", completed: false },
                    { text: "Stabilitäts- und Wachstumspakt", completed: false },
                    { text: "Überwindung der Euro-Krise: ESM", completed: false },
                    { text: "Europäischer Fiskalpakt", completed: false },
                    { text: "Bankenunion", completed: false },
                    { text: "Sparen vs. Schuldenkrise", completed: false },
                    { text: "Kopenhagener Kriterien", completed: false },
                    { text: "Beitrittskandidaten, Perspektiven", completed: false },
                    { text: "Integrationsmodelle: Bundesstaat, Staatenbund", completed: false },
                    { text: "Europa der Regionen/zwei Geschwindigkeiten/variablen Geometrie", completed: false },
                    { text: "Integrationstheorien: Föderalismus, Intergouvernementalismus, Funktionalismus", completed: false },
                    { text: "Herausforderungen: Demokratiedefizit, Migration/Flucht, Erweiterung", completed: false }
                ]
            },
            {
                day: 5,
                title: "Soziale Ungleichheit I (Wandel & Dimensionen)",
                tasks: [
                    { text: "Wiederholung: 15 Min. Institutionen-Dreieck der EU zeichnen", completed: false },
                    { text: "Sozialer Wandel seit 2. WK: Wohlstandsexplosion", completed: false },
                    { text: "Bildungsexpansion, Pluralisierung", completed: false },
                    { text: "Demografischer Wandel, Tertiärisierung", completed: false },
                    { text: "Subjektivierung, Entgrenzung von Arbeit", completed: false },
                    { text: "Prekarisierung: Atypische Beschäftigung, Niedriglohnsektor", completed: false },
                    { text: "Soziale Risiken", completed: false },
                    { text: "Einkommens- und Vermögensverteilung", completed: false },
                    { text: "Gini-Koeffizient, Lorenzkurve", completed: false },
                    { text: "Armut: Definition, Messung, Kinder-/Jugendarmut", completed: false },
                    { text: "Dimensionen: Materieller Wohlstand, Bildung, Macht, Prestige", completed: false }
                ]
            },
            {
                day: 6,
                title: "Soziale Ungleichheit II (Modelle & Sozialstaat)",
                tasks: [
                    { text: "Gesellschaftsmodelle: Klassen (Marx)", completed: false },
                    { text: "Schichten (Bolte, Dahrendorf, Geißler/Hausmodell)", completed: false },
                    { text: "Lagen (Hradil), Milieus (Sinus)", completed: false },
                    { text: "Individualisierungsthese (Beck)", completed: false },
                    { text: "GG-Verankerung des Sozialstaats", completed: false },
                    { text: "Ziele und Prinzipien: Solidarität, Subsidiarität", completed: false },
                    { text: "Versicherung, Versorgung, Fürsorge", completed: false },
                    { text: "Sozialversicherungen", completed: false },
                    { text: "ALG I & II (Bürgergeld)", completed: false },
                    { text: "Generationenvertrag", completed: false },
                    { text: "Finanzierung: Probleme & Modelle", completed: false },
                    { text: "Gerechtigkeitstheorien", completed: false },
                    { text: "Wohlfahrtsstaatsmodelle: konservativ, sozialdemokratisch, liberal", completed: false }
                ]
            },
            {
                day: 7,
                title: "Globale Strukturen I (Macht, Frieden & Konflikt)",
                tasks: [
                    { text: "Wiederholung: 15 Min. Vergleich der Gesellschaftsmodelle (Marx vs. Sinus)", completed: false },
                    { text: "Machtfaktoren", completed: false },
                    { text: "Verteilung: unipolar, bipolar, multipolar", completed: false },
                    { text: "Multilateralismus und seine Herausforderungen", completed: false },
                    { text: "Kriege, bewaffnete Konflikte", completed: false },
                    { text: "Asymmetrische (neue) Kriege, fragile Staaten", completed: false },
                    { text: "Friedenstheorien: Galtung (strukturelle Gewalt)", completed: false },
                    { text: "Friedenstheorien: Senghaas (Zivilisatorisches Hexagon)", completed: false },
                    { text: "Demokratischer Frieden", completed: false },
                    { text: "Menschenrechte: Charta, Generationen/Gruppen", completed: false },
                    { text: "UN-Menschenrechtsrat", completed: false }
                ]
            },
            {
                day: 8,
                title: "Globale Strukturen II (Akteure & Sicherheitspolitik)",
                tasks: [
                    { text: "UNO: Gründung, Ziele", completed: false },
                    { text: "Hauptorgane: Generalversammlung", completed: false },
                    { text: "Hauptorgane: Sicherheitsrat", completed: false },
                    { text: "Hauptorgane: Generalsekretär", completed: false },
                    { text: "Hauptorgane: IGH", completed: false },
                    { text: "UN-Friedenssicherung: Kapitel VI u. VII", completed: false },
                    { text: "R2P/Schutzverantwortung", completed: false },
                    { text: "Deutsche Außen- und Sicherheitspolitik", completed: false },
                    { text: "NATO", completed: false }
                ]
            },
            {
                day: 9,
                title: "Globale Strukturen III (Wirtschaft & Global Governance)",
                tasks: [
                    { text: "Handelstheorien: Adam Smith", completed: false },
                    { text: "Handelstheorien: David Ricardo (komparative Kostenvorteile)", completed: false },
                    { text: "Heckscher-Ohlin", completed: false },
                    { text: "Freihandel vs. Protektionismus", completed: false },
                    { text: "Globalisierung: Dimensionen, Ursachen/Antriebskräfte", completed: false },
                    { text: "Globalisierung: Merkmale, Folgen", completed: false },
                    { text: "Deutschland als Wirtschaftsstandort im internationalen Vergleich", completed: false },
                    { text: "Klimawandel: Ursachen, Folgen, Pariser Abkommen, Green Deal", completed: false },
                    { text: "Migration/Flucht", completed: false },
                    { text: "Nachhaltige Entwicklung: MDGs, SDGs", completed: false },
                    { text: "Akteure der Weltordnung: WTO, IWF, Weltbank", completed: false },
                    { text: "G7/G20, NGOs", completed: false }
                ]
            },
            {
                day: 10,
                title: "Puffer-Tag & Lückenschluss",
                tasks: [
                    { text: "Themen von Tag 1-9 aufarbeiten, bei denen du in Verzug geraten bist", completed: false },
                    { text: "Zu allen 4 Großthemen eine 'Essenz-Zusammenfassung' (Cheat Sheet) schreiben", completed: false },
                    { text: "Wiederholung aller offenen Punkte", completed: false },
                    { text: "Mindmaps zu allen Themen erstellen", completed: false }
                ]
            }
        ]
    },
    phase2: {
        title: "Phase 2: Vernetzung, Operatoren & Klausurtraining (Tag 11-15)",
        description: "<strong>Ziel:</strong> Wissen anwenden, Zusammenhänge erkennen und auf Klausurformat trimmen.",
        days: [
            {
                day: 11,
                title: "Vernetzung Wirtschaft & Soziales",
                tasks: [
                    { text: "Verschachteltes Lernen: EZB-Zinspolitik → soziale Ungleichheit (Gini-Koeffizient)", completed: false },
                    { text: "Verschachteltes Lernen: Atypische Beschäftigung → Einnahmen Sozialstaat", completed: false },
                    { text: "Operatoren-Training: 2 alte Klausuren zu Wirtschaft & Soziales", completed: false },
                    { text: "Lösungsstruktur gliedern: Einleitung, 3 Pro, 3 Contra, Fazit", completed: false },
                    { text: "Anforderungsbereich III (Erörtern/Beurteilen) trainieren", completed: false }
                ]
            },
            {
                day: 12,
                title: "Vernetzung Globales & EU",
                tasks: [
                    { text: "Verschachteltes Lernen: EU-Binnenmarkt vs. globaler Freihandel (Protektionismus)", completed: false },
                    { text: "Verschachteltes Lernen: EU-Rolle bei Global Governance & Klimawandel", completed: false },
                    { text: "Green Deal vs. SDGs analysieren", completed: false },
                    { text: "Senghaas-Hexagon komplett aus dem Kopf zeichnen", completed: false },
                    { text: "Magisches Sechseck komplett aus dem Kopf zeichnen", completed: false },
                    { text: "Kontrolle und Korrektur der Zeichnungen", completed: false }
                ]
            },
            {
                day: 13,
                title: "Klausur-Simulation (Teil 1)",
                tasks: [
                    { text: "Klausur-Situation simulieren (Handy weg, Wecker stellen)", completed: false },
                    { text: "Unbekannten Text auswählen (FAZ/SZ zu Staatsverschuldung oder EU-Demokratiedefizit)", completed: false },
                    { text: "Aufgabe 1: Analyse/Zusammenfassung bearbeiten", completed: false },
                    { text: "Aufgabe 2: Einordnung in theoretischen Kontext (Keynesianismus oder Integrationsmodelle)", completed: false },
                    { text: "Zeitmanagement während der Simulation beachten", completed: false }
                ]
            },
            {
                day: 14,
                title: "Klausur-Simulation (Teil 2) & Urteilsbildung",
                tasks: [
                    { text: "Aufgabe 3 (Erörterung/Beurteilung) komplett schreiben", completed: false },
                    { text: "Sachurteil prüfen: Effizienz, Machbarkeit", completed: false },
                    { text: "Werturteil prüfen: Legitimität, Gerechtigkeit, Grundgesetz", completed: false },
                    { text: "Nachmittag: Schwachstellen aus Simulation kontrollieren", completed: false },
                    { text: "Schwache Theorien nochmal nachlesen", completed: false }
                ]
            },
            {
                day: 15,
                title: "Cool-Down & Helikopter-Blick",
                tasks: [
                    { text: "Nur selbsterstellte Mindmaps oder Cheat-Sheets durchgehen", completed: false },
                    { text: "Laut vor sich hin sprechen: 'Wenn Thema X, dann Modell Y und Argument Z'", completed: false },
                    { text: "Lerntisch vorbereiten", completed: false },
                    { text: "Früh schlafen gehen", completed: false },
                    { text: "Abschlussreflexion: Was habe ich gelernt?", completed: false }
                ]
            }
        ]
    }
};

// Load saved progress from localStorage
function loadProgress() {
    try {
        const saved = localStorage.getItem('learningProgress');
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.warn('Could not load progress from localStorage:', e);
    }
    return {};
}

// Save progress to localStorage and sync to Gist
async function saveProgress(progress) {
    try {
        localStorage.setItem('learningProgress', JSON.stringify(progress));
        updateProgressDisplay();

        // Sync to Gist in background
        syncToGist(progress);
    } catch (e) {
        console.warn('Could not save progress to localStorage:', e);
        alert('Fortschritt konnte nicht gespeichert werden. Überprüfen Sie Ihre Browsereinstellungen.');
    }
}

// GitHub Gist sync functionality
const GIST_CONFIG_KEY = 'gistConfig';
let gistConfig = loadGistConfig();

function loadGistConfig() {
    try {
        const saved = localStorage.getItem(GIST_CONFIG_KEY);
        return saved ? JSON.parse(saved) : { gistId: '', token: '' };
    } catch (e) {
        console.warn('Could not load Gist config:', e);
        return { gistId: '', token: '' };
    }
}

function saveGistConfig(config) {
    try {
        localStorage.setItem(GIST_CONFIG_KEY, JSON.stringify(config));
        gistConfig = config;
    } catch (e) {
        console.warn('Could not save Gist config:', e);
    }
}

async function syncToGist(progress) {
    if (!gistConfig.gistId) return;

    try {
        const response = await fetch(`https://api.github.com/gists/${gistConfig.gistId}`, {
            method: 'PATCH',
            headers: {
                'Authorization': gistConfig.token ? `token ${gistConfig.token}` : undefined,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                files: {
                    'progress.json': {
                        content: JSON.stringify(progress, null, 2)
                    }
                }
            })
        });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        console.log('Progress synced to Gist successfully');
        updateSyncStatus('Synced to cloud ✓');
    } catch (e) {
        console.warn('Could not sync to Gist:', e);
        updateSyncStatus('Sync failed ✗');
    }
}

async function loadFromGist() {
    if (!gistConfig.gistId) return null;

    try {
        const response = await fetch(`https://api.github.com/gists/${gistConfig.gistId}`);
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const gist = await response.json();
        const progressData = gist.files['progress.json']?.content;
        if (progressData) {
            return JSON.parse(progressData);
        }
    } catch (e) {
        console.warn('Could not load from Gist:', e);
    }
    return null;
}

function updateSyncStatus(message) {
    const statusElement = document.getElementById('syncStatus');
    if (statusElement) {
        statusElement.textContent = message;
        statusElement.style.display = 'block';
        setTimeout(() => {
            statusElement.style.display = 'none';
        }, 3000);
    }
}

// Initialize progress object
function initializeProgress() {
    const progress = {};
    Object.keys(learningPath).forEach(phaseKey => {
        learningPath[phaseKey].days.forEach(day => {
            progress[`day${day.day}`] = {};
            day.tasks.forEach((task, index) => {
                progress[`day${day.day}`][`task${index}`] = false;
            });
        });
    });
    return progress;
}

// Get current progress (from localStorage or Gist)
async function getCurrentProgress() {
    let progress = loadProgress();

    // If no local progress, try loading from Gist
    if (Object.keys(progress).length === 0) {
        const gistProgress = await loadFromGist();
        if (gistProgress && Object.keys(gistProgress).length > 0) {
            progress = gistProgress;
            // Save to localStorage for faster access
            localStorage.setItem('learningProgress', JSON.stringify(progress));
            updateSyncStatus('Loaded from cloud ✓');
        } else {
            progress = initializeProgress();
        }
        saveProgress(progress);
    }
    return progress;
}

// Calculate overall progress
function calculateProgress(progress) {
    let totalTasks = 0;
    let completedTasks = 0;
    
    Object.keys(learningPath).forEach(phaseKey => {
        learningPath[phaseKey].days.forEach(day => {
            totalTasks += day.tasks.length;
            day.tasks.forEach((task, index) => {
                if (progress[`day${day.day}`][`task${index}`]) {
                    completedTasks++;
                }
            });
        });
    });
    
    return {
        total: totalTasks,
        completed: completedTasks,
        percentage: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
    };
}

// Update progress display
async function updateProgressDisplay() {
    const progress = await getCurrentProgress();
    const stats = calculateProgress(progress);

    const progressBar = document.getElementById('overallProgress');
    const progressText = document.getElementById('progressText');

    progressBar.style.width = `${stats.percentage}%`;
    progressText.textContent = `${stats.percentage}% abgeschlossen (${stats.completed}/${stats.total} Aufgaben)`;
}

// Render days
async function renderDays(filterPhase = 'all') {
    const container = document.getElementById('daysContainer');
    container.innerHTML = '';

    const phasesToRender = filterPhase === 'all'
        ? ['phase1', 'phase2']
        : [filterPhase];

    for (const phaseKey of phasesToRender) {
        const phase = learningPath[phaseKey];
        const phaseSection = document.createElement('div');
        phaseSection.className = 'phase-section';

        const phaseTitle = document.createElement('h2');
        phaseTitle.textContent = phase.title;
        phaseSection.appendChild(phaseTitle);

        const phaseDesc = document.createElement('div');
        phaseDesc.className = 'phase-description';
        phaseDesc.innerHTML = phase.description;
        phaseSection.appendChild(phaseDesc);

        for (const day of phase.days) {
            const dayCard = await createDayCard(day);
            phaseSection.appendChild(dayCard);
        }

        container.appendChild(phaseSection);
    }

    updateProgressDisplay();
}

// Create day card
async function createDayCard(day) {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.id = `day${day.day}`;

    const progress = await getCurrentProgress();
    const dayProgress = getDayProgress(day.day, progress);

    if (dayProgress === 100) {
        card.classList.add('completed');
    }
    
    const dayHeader = document.createElement('div');
    dayHeader.className = 'day-header';
    dayHeader.innerHTML = `
        <div class="day-title">Tag ${day.day}: ${day.title}</div>
        <div class="day-phase">Phase ${day.day <= 10 ? '1' : '2'}</div>
    `;
    card.appendChild(dayHeader);
    
    const tasksList = document.createElement('ul');
    tasksList.className = 'tasks-list';
    
    day.tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        if (progress[`day${day.day}`][`task${index}`]) {
            taskItem.classList.add('completed');
        }
        
        taskItem.innerHTML = `
            <label for="day${day.day}-task${index}" class="task-label">
                <input 
                    type="checkbox" 
                    class="task-checkbox" 
                    id="day${day.day}-task${index}"
                    ${progress[`day${day.day}`][`task${index}`] ? 'checked' : ''}
                    data-day="${day.day}"
                    data-task="${index}"
                >
                <div class="task-content">
                    <div class="task-text">${task.text}</div>
                </div>
            </label>
        `;
        
        tasksList.appendChild(taskItem);
    });
    
    card.appendChild(tasksList);
    return card;
}

// Get day progress percentage
function getDayProgress(dayNumber, progress) {
    const dayKey = `day${dayNumber}`;
    if (!progress[dayKey]) return 0;
    
    const tasks = Object.keys(progress[dayKey]);
    if (tasks.length === 0) return 0;
    
    const completed = tasks.filter(key => progress[dayKey][key]).length;
    return Math.round((completed / tasks.length) * 100);
}

// Toggle task completion
async function toggleTask(dayNumber, taskIndex, checkbox) {
    const progress = await getCurrentProgress();
    progress[`day${dayNumber}`][`task${taskIndex}`] = checkbox.checked;
    saveProgress(progress);

    const dayCard = document.getElementById(`day${dayNumber}`);
    const dayProgress = getDayProgress(dayNumber, progress);

    if (dayProgress === 100) {
        dayCard.classList.add('completed');
    } else {
        dayCard.classList.remove('completed');
    }

    updateProgressDisplay();
}

// Reset all progress
async function resetProgress() {
    if (confirm('Möchtest du wirklich deinen gesamten Fortschritt zurücksetzen? Dies kann nicht rückgängig gemacht werden.')) {
        localStorage.removeItem('learningProgress');
        await renderDays(document.querySelector('.phase-btn.active').dataset.phase);
        updateProgressDisplay();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', async () => {
    // Initial render
    await renderDays('all');

    // Phase filter buttons
    document.querySelectorAll('.phase-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            document.querySelectorAll('.phase-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            await renderDays(btn.dataset.phase);
        });
    });

    // Task checkboxes
    document.addEventListener('change', async (e) => {
        if (e.target.classList.contains('task-checkbox')) {
            await toggleTask(
                parseInt(e.target.dataset.day),
                parseInt(e.target.dataset.task),
                e.target
            );
        }
    });

    // Reset button
    document.getElementById('resetProgress').addEventListener('click', resetProgress);

    // Sync settings
    document.getElementById('saveSyncSettings').addEventListener('click', () => {
        const gistId = document.getElementById('gistId').value.trim();
        const token = document.getElementById('gistToken').value.trim();

        if (gistId) {
            saveGistConfig({ gistId, token });
            updateSyncStatus('Einstellungen gespeichert ✓');

            // Try to sync current progress
            getCurrentProgress().then(progress => {
                syncToGist(progress);
            });
        } else {
            updateSyncStatus('Bitte Gist ID eingeben');
        }
    });

    // Load saved sync settings
    document.getElementById('gistId').value = gistConfig.gistId;
    document.getElementById('gistToken').value = gistConfig.token;
});

window.addEventListener('offline', () => {
    updateSyncStatus('offline', 'Offline-Modus');
});
