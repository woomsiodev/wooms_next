# WOOMS AI - More than a WMS

Eine Premium Landing Page für Wooms AI mit beeindruckenden Scroll-Effekten im Jung von Matt Stil.

## Features

### Design
- **Premium Light Theme** - Inspiriert vom Video-Hintergrund
- **Video Hero Section** - Fullscreen-Video mit eleganten Overlays
- **GSAP ScrollTrigger Animationen** - Wie auf gsap.com/scroll
- **Interaktive Visual Cards** - 3D-Hover-Effekte und Animationen
- **Responsive Design** - Optimiert für alle Geräte

### AI Features Sektionen

1. **Wooms Analytics AI Studio**
   - Predictive Analytics
   - Echtzeit-Dashboards
   - Anomalie-Erkennung
   - NLP Report Generator

2. **AI Address Guardian**
   - Echtzeit-Adressvalidierung
   - Automatische Korrektur
   - Geocoding & Routing
   - Internationale Formate

3. **Smart Routing AI**
   - Dynamic Route Optimization
   - Multi-Depot Routing
   - CO2-Optimierung
   - Kostenreduktion

4. **Inventory Intelligence AI**
   - Demand Forecasting
   - Automatische Nachbestellung
   - ABC-XYZ-Analyse
   - Seasonal Pattern Recognition

### Zukunfts-Features
- Autonomous Warehouse
- Natural Language Interface
- Predictive Maintenance
- Supply Chain AI Network

## Technologie-Stack

- **HTML5** - Semantisches Markup
- **CSS3** - Modern, Custom Properties, Grid & Flexbox
- **JavaScript (ES6+)** - Vanilla JS für Performance
- **GSAP 3.12** - Premium Animationen
- **ScrollTrigger** - Scroll-basierte Animationen

## Installation

### Standalone Version (Aktuell)

```bash
# Repository klonen oder Dateien kopieren
cd wooms_ai_WMS

# Mit lokalem Server öffnen
# Option 1: Python
python -m http.server 8000

# Option 2: PHP
php -S localhost:8000

# Option 3: Node.js (mit npx)
npx http-server -p 8000

# Im Browser öffnen
open http://localhost:8000
```

### Laravel Integration (Zukünftig)

```bash
# Laravel Projekt erstellen
composer create-project laravel/laravel wooms-ai
cd wooms-ai

# Dateien integrieren
# index.html → resources/views/welcome.blade.php
# css/styles.css → public/css/
# js/main.js → public/js/
# media/* → public/media/

# Laravel Server starten
php artisan serve
```

## Projektstruktur

```
wooms_ai_WMS/
├── index.html              # Haupt-HTML-Datei
├── css/
│   └── styles.css         # Alle Styles (Premium Design)
├── js/
│   └── main.js           # GSAP Animationen & Interaktionen
├── media/
│   └── wooms_AI_more_than_a_WMS.mp4
└── README.md
```

## Design-Philosophie

### Jung von Matt Ansatz
- **Klare Hierarchie** - Typography-first Design
- **White Space** - Großzügige Abstände für Premium-Feeling
- **Subtile Animationen** - Smooth, nicht aufdringlich
- **Performance** - Optimiert für schnelle Ladezeiten

### Farbschema
- **Background**: `#F8F9FA` - Helles, sauberes Grau
- **Text**: `#1A1A1A` - Fast-Schwarz für Lesbarkeit
- **Accent**: `#0066FF` - Kraftvolles Blau
- **AI Accent**: `#00D9FF` - Cyan für KI-Fokus

### Typography
- **Display**: SF Pro Display (Apple-like)
- **Body**: System Font Stack für optimale Performance
- **Sizes**: Clamp-basiert für perfekte Responsivität

## GSAP Animationen

### Hero Section
- Staggered Title Animation
- Parallax Video Effect
- Fade-out on Scroll

### Feature Sections
- ScrollTrigger-basierte Reveals
- Staggered List Items
- Visual Card Animations
- Parallax Effects

### Interactive Elements
- 3D Card Hover Effects
- Smooth Navigation Behavior
- Progressive Reveal Patterns

## Optimierung

### Performance
- CSS Custom Properties für theming
- Optimierte GSAP Timeline
- Lazy Loading vorbereitet
- Minimale Dependencies

### SEO
- Semantisches HTML5
- Meta Tags vorbereitet
- Strukturierte Daten-ready
- Mobile-First Approach

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Browsers (iOS Safari, Chrome Mobile)

## Anpassungen

### Farben ändern
Alle Farben sind in CSS Custom Properties definiert (`css/styles.css:10-20`):

```css
:root {
    --color-accent: #0066FF;  /* Hauptfarbe ändern */
    --color-ai: #00D9FF;      /* AI-Akzentfarbe */
}
```

### Scroll-Geschwindigkeit
In `js/main.js` ScrollTrigger-Parameter anpassen:

```javascript
scrollTrigger: {
    start: 'top 70%',  // Wann Animation startet
    end: 'bottom 60%', // Wann Animation endet
    scrub: true        // true = an Scroll gebunden
}
```

### Neue Feature-Sektion hinzufügen
1. HTML-Struktur in `index.html` kopieren
2. CSS-Klassen in `styles.css` anpassen
3. Animation in `main.js` registrieren

## Deployment

### Statische Hosting-Optionen
- **Netlify**: Drag & Drop
- **Vercel**: GitHub Integration
- **GitHub Pages**: Kostenlos
- **AWS S3 + CloudFront**: Enterprise

### Laravel Production
```bash
# Assets kompilieren
npm run production

# Laravel optimieren
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

## Roadmap

- [ ] Laravel Blade Integration
- [ ] Mehrsprachigkeit (DE/EN)
- [ ] CMS-Integration für Content
- [ ] Video-Alternativen (Bilder-Fallback)
- [ ] Advanced Analytics Integration
- [ ] Kontaktformular mit Backend
- [ ] Blog-Sektion für AI News

## Credits

**Design Inspiration**: Jung von Matt, gsap.com/scroll
**Animation Framework**: GSAP 3.12 by GreenSock
**Konzept**: Wooms AI - More than a WMS

## Lizenz

Proprietary - Alle Rechte vorbehalten
