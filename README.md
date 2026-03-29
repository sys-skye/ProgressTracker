# Progress Tracker - 15-Day Intensive Learning Plan

An interactive web tracker for your 15-day intensive learning plan in Economic Policy and Social Inequality.

## 🚀 Features

- **Interactive Progress Tracker**: Mark tasks as completed and track your learning progress
- **Automatic Storage**: Your progress is saved locally in the browser
- **🌐 Cross-Device Sync**: Synchronize your progress automatically across ALL devices using GitHub
- **Responsive Design**: Perfect for desktop and mobile
- **Two Phases**:
  - Phase 1 (Day 1-10): Content Acquisition
  - Phase 2 (Day 11-15): Networking & Exam Training
- **Progress Overview**: Visual progress bar shows your overall completion
- **Phase Filter**: Filter by Phase 1, Phase 2, or all days

## 📱 Installation & Deployment

### GitHub Pages Deployment (Recommended - Free)

1. **Create Repository**:
   - Repository name: `progress-tracker`
   - Make it **Private** for personal data privacy

2. **Upload Files**:
   - Upload all files to your GitHub repository
   - Files: `index.html`, `styles.css`, `app.js`, `README.md`, `DEPLOYMENT.md`

3. **Enable GitHub Pages**:
   - Go to Repository → Settings → Pages
   - Under "Source" select: `main` branch and `/(root)` folder
   - Click "Save"

4. **Your site is live!**
   - Your website will be at: `https://sys-skye.github.io/progress-tracker/`

### Local Usage

Simply open `index.html` in your browser:
```bash
# Open the HTML file directly
open index.html  # macOS
start index.html  # Windows
xdg-open index.html  # Linux
```

## 🔑 GitHub Sync Setup

For cross-device synchronization:

1. **Create a Personal Access Token** at [GitHub Settings → Tokens](https://github.com/settings/tokens)
2. **Give it `repo` permissions**
3. **Update the token** in `index.html` config
4. **Deploy to GitHub Pages**

Your progress will now sync automatically across all your devices!

## 🎯 How It Works

### Phase Filter
Click the filter buttons at the top to view:
- **All**: Shows all 15 days
- **Phase 1**: Only Day 1-10 (Content Acquisition)
- **Phase 2**: Only Day 11-15 (Networking & Exam Training)

### Task Completion
- Check off each completed task
- Progress bar updates automatically
- Days with 100% completion are highlighted

### Progress Overview
- **Overall Progress**: Visual bar shows % completed
- **Detail View**: Shows number of completed/total tasks

### Reset Progress
- Click "Reset Progress" at the bottom of the page
- Confirm the action to clear all data

## 💾 Data Storage

Your progress is stored in two places:
- **Local**: Browser localStorage (works offline, instant)
- **GitHub**: JSON file in your repository (cross-device sync)

## 🛠️ Technical Details

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Variables, Flexbox, Grid
- **Vanilla JavaScript**: No frameworks required
- **GitHub API**: For cross-device synchronization
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Accessible checkboxes and navigation

## 🛠️ Technische Details

- **HTML5**: Semantisches Markup
- **CSS3**: Moderne Styling mit CSS Variables, Flexbox, Grid
- **Vanilla JavaScript**: Keine Frameworks benötigt
- **Responsive Design**: Mobile-First Ansatz
- **Barrierefreiheit**: Accessible Checkboxen und Navigation

## 📋 Lernpfel-Übersicht

### Phase 1: Stoffaneignung (Tag 1-10)
- Tag 1: Wirtschaftspolitik I (Grundlagen & Konjunktur)
- Tag 2: Wirtschaftspolitik II (Theorien, EZB & Krisen)
- Tag 3: Europäische Union I (Struktur & Binnenmarkt)
- Tag 4: Europäische Union II (Krise, Vertiefung & Zukunft)
- Tag 5: Soziale Ungleichheit I (Wandel & Dimensionen)
- Tag 6: Soziale Ungleichheit II (Modelle & Sozialstaat)
- Tag 7: Globale Strukturen I (Macht, Frieden & Konflikt)
- Tag 8: Globale Strukturen II (Akteure & Sicherheitspolitik)
- Tag 9: Globale Strukturen III (Wirtschaft & Global Governance)
- Tag 10: Puffer-Tag & Lückenschluss

### Phase 2: Vernetzung, Operatoren & Klausurtraining (Tag 11-15)
- Tag 11: Vernetzung Wirtschaft & Soziales
- Tag 12: Vernetzung Globales & EU
- Tag 13: Klausur-Simulation (Teil 1)
- Tag 14: Klausur-Simulation (Teil 2) & Urteilsbildung
- Tag 15: Cool-Down & Helikopter-Blick

## 🎨 Design

- Modernes, sauberes Design mit Blautönen
- Klare visuelle Hierarchie
- Hover-Effekte für bessere User Experience
- Farbige Markierungen für abgeschlossene Tage
- Anpassbare CSS-Variablen für einfaches Theming

## 📱 Mobile Optimierung

- Touch-freundliche Checkboxen (mindestens 44x44px)
- Responsive Grid-Layout
- Angepasste Schriftgrößen für kleine Bildschirme
- Scrollbare Navigation auf Mobile

## 🔧 Erweiterungsmöglichkeiten

Möchtest du die App erweitern? Hier sind einige Ideen:

1. **Backend-Integration**: Firebase oder Supabase für Cloud-Sync
2. **Export-Funktion**: Fortschritt als PDF oder Bild exportieren
3. **Zeit-Tracking**: Zeit pro Aufgabe tracken
4. **Notizen-Funktion**: Eigene Notizen zu jedem Tag hinzufügen
5. **Gamification**: Badges oder Achievements für Meilensteine
6. **Dark Mode**: Dunkelhelle Variante hinzufügen

## 📄 Lizenz

Dieses Projekt ist frei verfügbar und kann nach Belieben verwendet und angepasst werden.

## 🤝 Contributing

Fühl dich frei, Forks zu erstellen und Pull Requests zu senden!

## 📮 Feedback

Hast du Fragen oder Vorschläge? Erstelle ein Issue in diesem Repository.

---

**Viel Erfolg bei deinem 15-Tage Intensiv-Plan! 🎓**
