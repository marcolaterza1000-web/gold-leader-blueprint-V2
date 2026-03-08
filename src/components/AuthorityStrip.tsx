import { Award, Clock, Users, Star } from "lucide-react";

const items = [
  { icon: Award, text: "24× Titelseite internationaler Fitnessmagazine" },
  { icon: Clock, text: "Über 20 Jahre Erfahrung im High-End Segment" },
  { icon: Users, text: "Führungskräfte · Spitzensportler · Entscheider" },
  { icon: Star, text: "4.9 Google Bewertung · 59 verifizierte Rezensionen" },
];

const AuthorityStrip = () => (
  <section className="bg-secondary py-6 border-y border-border">
    <div className="container mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <item.icon className="w-4 h-4 text-primary shrink-0" />
          <span className="font-inter text-sm text-foreground/80">{item.text}</span>
        </div>
      ))}
    </div>
  </section>
);

export default AuthorityStrip;
