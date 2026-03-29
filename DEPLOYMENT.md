# GitHub Sync Setup for Cross-Device Sync

## Why GitHub Sync?

Your progress tracker now supports **cross-device synchronization** using your own GitHub repository! This means your progress syncs seamlessly between devices without needing external services.

## How It Works

- **Shared Progress**: Same progress across ALL your devices (phone, tablet, computer)
- **Data Storage**: Progress is saved as a JSON file (`progress-data.json`) in your GitHub repo
- **Version Control**: Every save creates a commit in your repository
- **Privacy**: Data stays in your GitHub repo, under your control

## Quick GitHub Sync Setup (10 minutes)

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** in the top right → **"New repository"**
3. Repository name: `progress-tracker`
4. Make it **Private** (recommended for personal data)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

### 2. Create a Personal Access Token

1. Go to [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. Click **"Generate new token (classic)"**
3. Give it a name: `Progress Tracker Sync`
4. Select scopes:
   - ✅ `repo` (Full control of private repositories)
5. Click **"Generate token"**
6. **⚠️ COPY THE TOKEN IMMEDIATELY** - You won't see it again!

### 3. Configure Your App

The config is already set up for your repo! Just replace the token in `index.html`:

```javascript
window.githubConfig = {
    username: 'sys-skye',                    // ← Already set
    repo: 'progress-tracker',                // ← Already set
    token: 'ghp_xxxxxxxxxxxxxxxxxxxx',       // ← PASTE YOUR TOKEN HERE
    dataFile: 'progress-data.json'           // ← Keep as-is
};
```

### 4. Deploy to GitHub Pages

Follow the deployment steps below, then your sync will work automatically!

## Security & Privacy

- **Your data only** - Stored in your private GitHub repository
- **No external services** - Everything stays under your control
- **Version history** - See all your progress changes in Git commits
- **Private by default** - Make your repo private for maximum privacy

## Testing Sync

1. Complete some tasks on your computer
2. Open the app on your phone
3. Progress should appear automatically!
4. Changes sync instantly across devices

## Troubleshooting

- **Not syncing?** Check browser console for errors
- **GitHub errors?** Make sure your token has `repo` permissions
- **Still not working?** Try clearing browser cache and reloading

---

# Deployment Guide - Progress Tracker

## Quick Deployment in 5 Steps

### 1. Repository Setup

Your repository is already configured in the code:
- Username: `sys-skye`
- Repository: `progress-tracker`

### 2. Upload Files to GitHub

**Option A: GitHub Web Interface**
1. Go to [github.com/sys-skye/progress-tracker](https://github.com/sys-skye/progress-tracker)
2. Click **"Add file"** → **"Upload files"**
3. Upload all files:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
   - `DEPLOYMENT.md`

**Option B: Git CLI**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/sys-skye/progress-tracker.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository settings
2. Scroll to **"Pages"** section
3. Under **"Source"**, select **"Deploy from a branch"**
4. Select **"main"** branch and **"/ (root)"** folder
5. Click **"Save"**
6. Your site will be live at: `https://sys-skye.github.io/progress-tracker/`

### 4. Update Token

After creating your token (step 2 above), edit `index.html` and replace the placeholder token.

### 5. Test Your App

Visit your GitHub Pages URL and test the sync functionality!
```bash
cd /Users/skye/Documents/Github\ pJ
git init
git add .
git commit -m "Initial commit: 15-Tage Intensiv-Plan Tracker"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/repo-name.git
git push -u origin main
```

### 3. GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (rechts im Menü)
3. Klicke links auf **Pages**
4. Bei **Source** wähle:
   - Branch: `main` (oder `master`)
   - Folder: `/ (root)`
5. Klicke auf **Save**

### 4. Warten auf Deployment

Nach ca. 1-2 Minuten erscheint deine Seite unter:
```
https://DEIN-USERNAME.github.io/repo-name/
```

Du siehst eine Bestätigungsmeldung von GitHub.

### 5. Testen

Öffne die URL in deinem Browser und teste:
- ✅ Alle 15 Tage werden angezeigt
- ✅ Checkboxen funktionieren
- ✅ Fortschrittsbalken aktualisiert sich
- ✅ Phasen-Filter arbeiten
- ✅ Mobile Ansicht (Teste auf Smartphone)

## 📱 Mobile Testing

Um die mobile Ansicht zu testen:
1. Öffne die Seite auf deinem Smartphone
2. Oder im Browser: F12 → Device Toolbar → Toggle device toolbar

## 🔧 Custom Domain (Optional)

Wenn du eine eigene Domain verwenden möchtest:

1. In GitHub Repository: **Settings → Pages**
2. Bei **Custom domain** deine Domain eingeben
3. Bei deinem Domain-Provider CNAME-Eintrag setzen:
   ```
   CNAME    www    DEIN-USERNAME.github.io
   ```
4. In GitHub auf **Save** klicken

## 🌐 Browser-Sync

Da der Fortschritt lokal gespeichert wird, kannst du:

**Für gleichen Browser auf verschiedenen Geräten:**
- Verwende Browser-Sync-Funktionen (Chrome Sync, Firefox Sync, etc.)

**Für verschiedene Browser:**
- Exportiere localStorage manuell (für fortgeschrittene Nutzer)

## 🚨 Troubleshooting

### Seite wird nicht geladen
- Prüfe, ob alle Dateien im Repository sind
- Warte 2-3 Minuten nach dem Upload
- Prüfe Settings → Pages für Fehler

### Fortschritt wird nicht gespeichert
- Prüfe, ob Cookies/localStorage im Browser erlaubt sind
- Öffne Browser-Konsole (F12) für Fehlermeldungen

### Mobile Ansicht funktioniert nicht
- Prüfe, ob `viewport` Meta-Tag vorhanden ist
- Teste auf verschiedenen Geräten

## 📊 Analytics (Optional)

Um Besucherzahlen zu tracken:

**Google Analytics:**
1. Erstelle Account bei [Google Analytics](https://analytics.google.com/)
2. Füge Tracking-Code in `index.html` vor `</head>` ein

**GitHub Pages Analytics:**
- Repository → Insights → Traffic (eingebaut)

## 🔄 Updates veröffentlichen

Wenn du Änderungen an der App machst:

```bash
# Änderungen machen
# ...

git add .
git commit -m "Beschreibung der Änderungen"
git push origin main
```

GitHub Pages aktualisiert sich automatisch!

## 📞 Support

Bei Problemen:
1. Prüfe die Browser-Konsole (F12)
2. Prüfe GitHub Pages Settings für Fehler
3. Stelle sicher, dass alle Dateien im Repository sind

## ✅ Checklist vor dem Launch

- [ ] Alle Dateien im Repository
- [ ] GitHub Pages aktiviert
- [ ] URL funktioniert
- [ ] Alle Checkboxen funktionieren
- [ ] Fortschrittsbalken aktualisiert sich
- [ ] Mobile Ansicht getestet
- [ ] README.md vorhanden
- [ ] Keine sensiblen Daten im Code

---

**Viel Erfolg mit deinem Lernfortschritts-Tracker! 🎉**
