# Team-Seite - Dokumentation

## 🎨 Design-Konzept

Die neue Team-Seite wurde im wooms Design-System erstellt mit:

### Farben
- **Brand Blue**: `#01182D` - Hauptfarbe
- **Gold**: `#D1B06B` - Akzentfarbe
- **Weiß**: `#ffffff` - Primärer Hintergrund
- **Sand**: `#F5F2ED` - Sekundärer Hintergrund

### Typography
- **Headlines**: Lexend (bold, tight tracking)
- **Body**: Noto Sans (light, 300-400 weight)
- **Größen**: Responsive von Mobile bis Desktop

## 📍 Seitenstruktur

Die Team-Seite besteht aus 4 Hauptsektionen:

### 1. **TeamHero** (`/src/components/sections/team/TeamHero.tsx`)
- Vollbild-Hero mit animiertem Titel
- Gradient-Hintergrund von Brand Blue
- Schwebende Partikel-Animation
- Scroll-Indikator
- **GSAP-Animationen**: Staggered reveal, fade-in

### 2. **TeamStory** (`/src/components/sections/team/TeamStory.tsx`)
- Erzählt die Geschichte von wooms
- Info über Gründer Ansgar Sohn & Abbas Dhebar
- 5 Jahre Innovation-Highlight
- AI-Schwarm Sofarew Erwähnung
- **GSAP-Animationen**: Scroll-triggered parallax, staggered sections

### 3. **TeamMembers** (`/src/components/sections/team/TeamMembers.tsx`)
- 2-Spalten Grid für Founder Cards
- 3D-Hover-Effekte auf Karten
- LinkedIn & E-Mail Buttons
- Profil-Bilder (aktuell Platzhalter)
- **GSAP-Animationen**: 3D card tilt, scroll reveal, parallax hover

### 4. **TeamVision** (`/src/components/sections/team/TeamVision.tsx`)
- Vision Statement
- 3 Stats (5+ Jahre, 100% KI-first, 24/7 Echtzeit)
- CTA Button "Teil des Teams werden"
- Gradient Hintergrund mit dekorativen Kreisen
- **GSAP-Animationen**: Parallax scroll, back.out button reveal

## 🖼️ Bilder aktualisieren

Die Platzhalter-Bilder müssen durch echte Fotos ersetzt werden:

### Option 1: LinkedIn-Fotos direkt verwenden
1. Gehe zu den LinkedIn-Profilen:
   - Ansgar: https://de.linkedin.com/in/ansgar-wooms-wms
   - Abbas: https://in.linkedin.com/in/abbas-dhebar-113a91152
2. Rechtsklick auf Profilbild → "Bild-URL kopieren"
3. Ersetze in `TeamMembers.tsx` (Zeile 19 & 28):

```tsx
image: 'DEINE_LINKEDIN_IMAGE_URL_HIER',
```

### Option 2: Eigene Bilder hochladen
1. Speichere Fotos in `/public/media/team/`
2. Empfohlene Größe: 800x1000px (4:5 Format)
3. Ersetze in `TeamMembers.tsx`:

```tsx
image: '/media/team/ansgar-sohn.jpg',
image: '/media/team/abbas-dhebar.jpg',
```

### Bild-Anforderungen
- **Format**: JPG, PNG oder WebP
- **Größe**: Mindestens 800x1000px
- **Ratio**: 4:5 (Portrait)
- **Qualität**: Hochauflösend für Retina-Displays
- **Hintergrund**: Professionell, idealerweise Studio-Qualität

## 🎬 GSAP-Animationen

### Verwendete Animation-Pattern
1. **Scroll Trigger**: Animationen beim Scrollen aktiviert
2. **Stagger**: Gestaffelte Animationen für mehrere Elemente
3. **Parallax**: Elemente bewegen sich unterschiedlich schnell
4. **3D Transform**: Perspective & rotation für Card-Hover
5. **Scrub**: Smooth scroll-linked animations

### Performance-Optimierung
- Alle Animationen verwenden GPU-beschleunigte Properties (`transform`, `opacity`)
- ScrollTrigger ist lazy-loaded
- GSAP wird nur client-side registriert

## 🌐 Route

Die Seite ist erreichbar unter:
- **Development**: http://localhost:3000/team
- **Production**: https://wooms.de/team

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1400px

## 🔧 Weitere Anpassungen

### Texte ändern
Alle Texte sind hardcoded in den Komponenten:
- `TeamStory.tsx`: Story-Texte
- `TeamMembers.tsx`: Bio-Texte (Zeile 14-32)
- `TeamVision.tsx`: Vision & Stats

### Weitere Team-Mitglieder hinzufügen
In `TeamMembers.tsx`, im `teamMembers` Array:

```tsx
{
  name: 'Neues Mitglied',
  role: 'Position',
  bio: 'Bio text...',
  image: '/media/team/mitglied.jpg',
  linkedin: 'https://linkedin.com/in/username',
  email: 'email@wooms.de',
  color: '#D1B06B' // oder '#01182D'
}
```

### Animationen deaktivieren
Falls Animationen zu viel sind:
1. Lösche die `useGSAP()` Hooks
2. Entferne `ScrollTrigger`-Importe
3. Behalte nur die Hover-States

## 🎯 CodePen Inspirationen

Die Animationen wurden inspiriert von:
- 3D Card Tilt: https://codepen.io/nicolaskadis/pen/wvrbQXa
- Scroll-linked Text: https://codepen.io/GreenSock/pen/YzygYvM
- Parallax Sections: https://codepen.io/GreenSock/pen/QWqoKBv

## ✅ Testing Checklist

- [ ] Bilder durch echte Fotos ersetzen
- [ ] LinkedIn-Links funktionieren
- [ ] E-Mail-Links funktionieren
- [ ] Mobile-Ansicht testen
- [ ] Animationen auf verschiedenen Devices testen
- [ ] Performance-Check (Lighthouse)
- [ ] Cross-Browser-Test (Chrome, Safari, Firefox)

## 🚀 Deployment

Nach finalen Anpassungen:
```bash
npm run build
npm start
```

---

**Erstellt mit Claude Code** 🤖
Fragen? → https://github.com/anthropics/claude-code
