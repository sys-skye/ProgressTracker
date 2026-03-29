# Progress Tracker - 15-Day Intensive Learning Plan

An interactive web tracker for your 15-day intensive learning plan in Economic Policy and Social Inequality.

## 🚀 Features

- **Interactive Progress Tracker**: Mark tasks as completed and track your learning progress
- **Automatic Storage**: Your progress is saved locally in the browser
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
   - Upload all files to your GitHub repository

2. **Enable GitHub Pages**:
   - Go to Repository → Settings → Pages
   - Select `main` branch and `/(root)` folder
   - Your website will be live

### Local Usage

Simply open `index.html` in your browser:
```bash
# Open the HTML file directly
open index.html  # macOS
start index.html  # Windows
xdg-open index.html  # Linux
```

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

## ☁️ Cloud Sync (kostenlos)

Synchronisiere deinen Fortschritt kostenlos über mehrere Geräte mit GitHub Gist:

### Setup-Anleitung:

1. **Erstelle einen GitHub Gist**:
   - Gehe zu [gist.github.com](https://gist.github.com)
   - Erstelle einen neuen Gist mit dem Dateinamen `progress.json`
   - Füge als Inhalt ein leeres JSON-Objekt hinzu: `{}`
   - **Wichtig**: Für Privatsphäre erstelle einen privaten Gist

2. **Erstelle einen Personal Access Token** (nur für private Gists):
   - Gehe zu [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
   - Erstelle einen neuen Token mit `gist` Berechtigung
   - **Wichtig**: Speichere den Token sicher - er wird nur einmal angezeigt!

3. **Konfiguriere die Sync in der App**:
   - Öffne die App in deinem Browser
   - Scrolle zum Footer-Bereich "Cloud-Sync"
   - Gib die Gist-ID ein (die lange Zahlenfolge in der URL)
   - Gib deinen Personal Access Token ein (falls privater Gist)
   - Klicke "Einstellungen speichern"

4. **Synchronisation**:
   - Fortschritt wird automatisch beim Ändern gespeichert
   - Beim ersten Öffnen auf einem neuen Gerät wird der Fortschritt aus der Cloud geladen
   - Status-Meldungen zeigen Sync-Erfolg/-Fehler an
   - **Manuelle Sync**: Verwende "Von Cloud laden" und "Zu Cloud speichern" Buttons für manuelle Steuerung

### Vorteile:
- ✅ Kostenlos (GitHub Account erforderlich)
- ✅ Funktioniert auf allen Geräten
- ✅ Automatische Synchronisation
- ✅ Datenschutz (private Gists)
- ✅ Offline-fähig (sync bei Verbindung)

### Sicherheit:
- Private Gists sind nur für dich sichtbar
- Token wird lokal im Browser gespeichert
- Niemals den Token mit anderen teilen

## ☁️ Cloud Sync (Free)

Sync your progress across devices for free using GitHub Gist:

### Setup Instructions:

1. **Create a GitHub Gist**:
   - Go to [gist.github.com](https://gist.github.com)
   - Create a new gist with filename `progress.json`
   - Add an empty JSON object as content: `{}`
   - **Important**: Create a private gist for privacy

2. **Create a Personal Access Token** (private gists only):
   - Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
   - Create a new token with `gist` permission
   - **Important**: Save the token securely - it's shown only once!

3. **Configure Sync in the App**:
   - Open the app in your browser
   - Scroll to the footer "Cloud-Sync" section
   - Enter the Gist ID (the long number sequence in the URL)
   - Enter your Personal Access Token (if using private gist)
   - Click "Einstellungen speichern" (Save Settings)

4. **Synchronization**:
   - Progress is automatically saved when changed
   - When opening on a new device, progress loads from cloud
   - Status messages show sync success/failure
   - **Manual sync**: Use "Von Cloud laden" (Load from Cloud) and "Zu Cloud speichern" (Save to Cloud) buttons for manual control

### Benefits:
- ✅ Free (GitHub account required)
- ✅ Works on all devices
- ✅ Automatic synchronization
- ✅ Privacy (private gists)
- ✅ Offline-capable (syncs when connected)

### Security:
- Private gists are visible only to you
- Token stored locally in browser
- Never share your token with others

## 🛠️ Technical Details

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Variables, Flexbox, Grid
- **Vanilla JavaScript**: No frameworks required
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
