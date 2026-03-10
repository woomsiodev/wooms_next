'use client';

import { ArrowUpRight, MessageSquare, ChevronDown } from 'lucide-react';

export default function GuidelinesPage() {
  const colors = [
    { name: 'Primary Dark (Text/UI)', hex: '#01182D', description: 'Wird für alle Texte, Headlines und primäre UI-Elemente verwendet. Ersetzt reines Schwarz.' },
    { name: 'Accent Gold (Outline/Brand)', hex: '#D1B06B', description: 'Ein warmer Goldton für Pill-Outlines und dezente Marken-Akzente. Wirkt edel und modern.' },
    { name: 'Muted Sand (Section BG)', hex: '#F5F2ED', description: 'Ein sanfter Beigeton für alternative Sektions-Hintergründe, um Tiefe zu erzeugen.' },
    { name: 'Shopify Olive (Shopify BG)', hex: '#959574', description: 'Ein olivgrüner Khaki-Ton speziell für die Shopify-Seite. Erzeugt eine warme, natürliche Atmosphäre.' },
    { name: 'Brand Blue (Logo)', hex: '#092C4C', description: 'Die Originalfarbe aus dem wooms Logo. Wird für Marken-Akzente genutzt.' },
    { name: 'Background', hex: '#FFFFFF', description: 'Reines Weiß für den Hintergrund, um maximale Luftigkeit zu garantieren.' },
  ];

  const typography = [
    { weight: 'Thin 100', class: 'font-thin', description: 'Für sehr elegante, großflächige Textblöcke.' },
    { weight: 'Light 300', class: 'font-light', description: 'Standard für edle Headlines und beschreibende Texte.' },
    { weight: 'Regular 400', class: 'font-normal', description: 'Standard für Fließtext und gut lesbare Headlines.' },
    { weight: 'Medium 500', class: 'font-medium', description: 'Für Buttons und hervorgehobene Elemente.' },
  ];

  const fontScale = [
    { name: 'Hero Headline', size: '10vw - 14vw', usage: 'Haupt-Headline auf der Startseite. Maximaler Impact, enges Tracking (-0.03em).', sample: 'text-[14vw] md:text-[11vw] lg:text-[10vw]' },
    { name: 'Section Headline', size: '38px', usage: 'Überschriften für Inhaltsbereiche. Kraftvoll und präsent durch Regular-Gewichtung (400) und luftigen Zeilenabstand (1.5).', sample: 'text-[30px] md:text-[34px] lg:text-[38px]' },
    { name: 'Subline / Copy', size: '26px', usage: 'Erläuternde Texte unter Headlines. Erhöhte Lesbarkeit durch moderne Skalierung.', sample: 'text-[18px] md:text-[22px] lg:text-[26px]' },
    { name: 'UI / Label', size: '15px', usage: 'Buttons, Menüpunkte, kleine Metadaten. Hoher Kontrast durch Spacing (0.25em).', sample: 'text-[15px] uppercase tracking-[0.25em]' },
    { name: 'Legal / Footer', size: '12px (text-xs)', usage: 'Copyright-Hinweise und rechtliche Texte. Unaufdringlich aber präsent.', sample: 'text-xs uppercase tracking-[0.3em] font-bold' },
  ];

  return (
    <main className="min-h-screen bg-white pt-40 pb-20 px-8 md:px-20 lg:px-32 font-sans text-[#01182D]">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-24">
          <h1 className="text-6xl font-light tracking-tight mb-4 uppercase">Design Guidelines</h1>
          <p className="text-xl font-light opacity-50 italic">The visual language of wooms AI.</p>
        </header>

        {/* Brand Rule */}
        <section className="mb-32">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-10 opacity-40">Brand Identity</h2>
          <div className="p-12 bg-gray-50 rounded-[40px] border border-gray-100">
            <h3 className="text-4xl font-light mb-6">Naming: <span className="text-[#092C4C]">wooms</span></h3>
            <p className="text-xl font-light leading-relaxed max-w-2xl">
              Der Markenname wird <strong className="font-medium">immer kleingeschrieben</strong>. 
              Dies unterstreicht den modernen, technologischen und nahbaren Charakter der AI-First Lösung.
            </p>
          </div>
        </section>

        {/* Font Scale */}
        <section className="mb-32">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-10 opacity-40">Typographic Scale</h2>
          <div className="space-y-12">
            {fontScale.map((item) => (
              <div key={item.name} className="border-b border-gray-100 pb-12 flex flex-col lg:flex-row gap-8 lg:gap-24">
                <div className="lg:w-1/4">
                  <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded inline-block text-gray-500 mb-4">{item.size}</code>
                  <p className="text-sm font-light opacity-60 leading-relaxed">{item.usage}</p>
                </div>
                <div className="flex-1 flex items-center">
                  <p className={`text-[#01182D] 
                    ${item.name === 'Hero Headline' ? 'text-6xl md:text-7xl lg:text-8xl font-normal tracking-[-0.03em]' : 
                      item.name === 'Section Headline' ? 'text-[30px] md:text-[34px] lg:text-[38px] font-normal leading-[1.5] tracking-tight' : 
                      item.name === 'Subline / Copy' ? 'text-[18px] md:text-[22px] lg:text-[26px] font-light' : 
                      item.name === 'UI / Label' ? 'text-base font-medium tracking-[0.25em] uppercase' : 
                      'text-xs font-bold tracking-[0.3em] uppercase'}`}>
                    {item.name === 'UI / Label' ? 'ÜBER WOOMS AI' : 
                     item.name === 'Legal / Footer' ? '© 2026 wooms WMS GMBH' :
                     'Innovation durch Intelligenz.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Colors */}
        <section className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-10 opacity-40">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {colors.map((color) => (
              <div key={color.hex} className="flex flex-col gap-4">
                <div 
                  className="w-full aspect-square rounded-[30px] shadow-sm border border-gray-100" 
                  style={{ backgroundColor: color.hex }}
                />
                <div>
                  <h3 className="text-xl font-medium mb-1">{color.name}</h3>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded mb-2 inline-block">{color.hex}</code>
                  <p className="text-sm font-light opacity-60 leading-relaxed">{color.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-10 opacity-40">Typography (Noto Sans)</h2>
          <div className="space-y-12">
            {typography.map((type) => (
              <div key={type.weight} className="border-b border-gray-100 pb-10 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-20">
                <span className="text-sm opacity-40 min-w-[120px]">{type.weight}</span>
                <div className="flex-1">
                  <p className={`text-4xl md:text-5xl ${type.class} leading-tight`}>
                    Gemeinsam, Lager weiter Entwickeln.
                  </p>
                  <p className="mt-4 text-sm opacity-50 italic">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* UI Elements */}
        <section className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold mb-10 opacity-40">UI Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Button Style */}
            <div>
              <h3 className="text-sm font-medium mb-8 opacity-60">Pill Button</h3>
              <button className="group flex items-center justify-between gap-16 px-12 py-6 rounded-full border border-[#D1B06B] hover:border-[#01182D] transition-all duration-700">
                <span className="text-[16px] font-medium text-[#01182D] uppercase tracking-[0.25em]">ÜBER wooms AI</span>
                <ArrowUpRight size={28} strokeWidth={1.5} className="text-[#01182D] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

            {/* Header Style */}
            <div>
              <h3 className="text-sm font-medium mb-8 opacity-60">Glass Pill Header</h3>
              <div className="bg-white/70 backdrop-blur-xl rounded-full border border-gray-100 px-10 py-6 shadow-xl flex items-center justify-between">
                <div className="w-20 h-4 bg-gray-200 rounded-full animate-pulse" />
                <div className="flex gap-4">
                   <div className="w-4 h-4 rounded-full bg-gray-200 animate-pulse" />
                   <div className="w-4 h-4 rounded-full bg-gray-200 animate-pulse" />
                </div>
              </div>
              <p className="mt-6 text-sm opacity-50 leading-relaxed font-light">
                Semitransparent (`bg-white/70`) mit starker Unschärfe (`backdrop-blur-xl`) für Tiefe und Leichtigkeit.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}