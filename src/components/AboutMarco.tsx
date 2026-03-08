import portrait from "@/assets/marco-portrait.jpg";
import { Star, CheckCircle } from "lucide-react";

const stats = [
  { value: "20+", label: "Jahre Erfahrung" },
  { value: "24×", label: "Titelseiten" },
  { value: "4.9", label: "Google Sterne", icon: true },
  { value: "500+", label: "Klienten" },
];

const credentials = [
  "Akkreditierter Mental Coach",
  "Zertifizierter Ernährungsberater",
  "Spezialist für Hormonforschung und Bioprint",
  "Ausgebildet nach der Charles Poliquin Methode",
];

const AboutMarco = () => (
  <section id="ueber-marco" className="py-24 bg-secondary px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <img
            src={portrait}
            alt="Marco Laterza Personal Trainer Zürich"
            className="rounded-lg w-full object-cover aspect-[4/5]"
            loading="lazy"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary rounded-lg" />
          <div className="absolute -top-4 -left-4 bg-card border border-primary/40 rounded-lg px-4 py-3 shadow-gold">
            <p className="font-inter text-xs text-muted-foreground">International anerkannt</p>
            <p className="font-inter text-primary font-bold text-lg">24× Cover</p>
          </div>
        </div>

        <div>
          <p className="font-inter text-sm text-primary uppercase tracking-widest mb-3">Über Marco Laterza</p>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mb-6 leading-snug">
            Ich weiss wie dein Alltag wirklich aussieht.
          </h2>

          <p className="font-inter text-foreground/80 leading-relaxed mb-5 text-base">
            Ich habe über zwei Jahrzehnte mit Menschen gearbeitet die in ihrem Beruf keine Kompromisse kennen. CEOs die um 6 Uhr morgens im Flieger sitzen. Sportler die auf internationalem Niveau performen. Unternehmer die gleichzeitig Dutzende Baustellen managen.
          </p>
          <p className="font-inter text-foreground/70 leading-relaxed mb-5 text-base">
            Was ich dabei gelernt habe: Standardprogramme funktionieren für diese Menschen nicht. Was sie brauchen ist ein System das ihre Biologie versteht, sich in ihren Alltag fügt und trotzdem Ergebnisse liefert die man sieht und spürt.
          </p>
          <p className="font-inter text-foreground/70 leading-relaxed mb-8 text-base">
            Meine eigene Karriere als internationales Fitnessmodel mit 24 Magazin-Titelseiten hat mir gezeigt was der menschliche Körper leisten kann wenn man ihn richtig behandelt. Heute gebe ich dieses Wissen an dich weiter. Präzise. Individuell. Ohne Umwege.
          </p>

          <div className="grid grid-cols-1 gap-2 mb-8">
            {credentials.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="font-inter text-sm text-foreground/80">{c}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8 py-6 border-y border-border">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-inter font-black text-2xl md:text-3xl text-primary flex items-center justify-center gap-1">
                  {s.value}
                  {s.icon && <Star className="w-4 h-4 fill-primary text-primary" />}
                </div>
                <div className="font-inter text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <a href="#kontakt" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-inter font-semibold hover:brightness-110 transition shadow-gold">
            Kostenloses Erstgespräch buchen
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMarco;
