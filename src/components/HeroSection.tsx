import heroBg from "@/assets/hero-bg.jpg";
import { Star, ArrowRight } from "lucide-react";

const stats = [
  { value: "20+", label: "Jahre Erfahrung" },
  { value: "24×", label: "Magazin-Cover" },
  { value: "500+", label: "Transformationen" },
  { value: "4.9★", label: "Google Bewertung" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
    {/* Right side image */}
    <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block">
      <img
        src={heroBg}
        alt="Marco Laterza Personal Training Zürich"
        className="w-full h-full object-cover"
        style={{ objectPosition: "center 10%" }}
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
    </div>

    {/* Mobile background */}
    <div className="absolute inset-0 md:hidden">
      <img
        src={heroBg}
        alt="Marco Laterza"
        className="w-full h-full object-cover"
        style={{ objectPosition: "center 10%" }}
        loading="eager"
      />
      <div className="absolute inset-0 bg-background/80" />
    </div>

    {/* Content left */}
    <div className="relative z-10 w-full md:w-1/2 px-6 md:px-12 lg:px-20 pt-28 pb-16">
      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <p className="font-inter text-xs text-primary uppercase tracking-widest">
          Personal Coaching · Zürich
        </p>
      </div>

      <h1 className="font-inter font-black text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-6">
        Du hast alles<br />erreicht.<br />
        <span className="text-primary">Dein Körper<br />hält nicht Schritt.</span>
      </h1>

      <p className="font-inter text-base text-foreground/70 max-w-md mb-8 leading-relaxed">
        Marco Laterza arbeitet mit Führungskräften, Unternehmern und Spitzensportlern die verstehen dass körperliche Leistungsfähigkeit kein Luxus ist. Sie ist die Voraussetzung für alles andere.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <a
          href="#kontakt"
          className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-inter font-semibold text-base hover:brightness-110 transition shadow-gold"
        >
          Kostenloses Erstgespräch
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#ergebnisse"
          className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-border text-foreground/70 font-inter text-base hover:border-primary/50 transition"
        >
          Resultate ansehen
        </a>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-4 pt-8 border-t border-border">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="font-inter font-black text-xl text-primary">{s.value}</div>
            <div className="font-inter text-xs text-muted-foreground mt-0.5 leading-tight">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Social proof */}
      <div className="mt-6 flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-primary fill-primary" />)}
        </div>
        <span className="font-inter text-xs text-muted-foreground">
          59 verifizierte Google Bewertungen · Maximal 2 Plätze verfügbar
        </span>
      </div>
    </div>
  </section>
);

export default HeroSection;
