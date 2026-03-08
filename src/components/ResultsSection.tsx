import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Kaspar Luginbühl",
    role: "Wirtschaftsanwalt, Partner",
    quote: "Dank Marcos Coaching fühle ich mich mit Mitte 40 so ausgeglichen und fitt wie noch nie. Seine Methode verbindet körperliche Leistungsfähigkeit mit mentaler Klarheit. Genau das was ich als Anwalt täglich brauche.",
    highlight: "Fitter mit 40 als mit 30"
  },
  {
    name: "Burkhard Boeckem",
    role: "CTO Hexagon AB",
    quote: "Als CTO eines globalen Unternehmens ist Energie und Fokus mein wichtigstes Kapital. Marco versteht das und arbeitet entsprechend. Er hat mich wieder in Topform gebracht ohne dass ich meinen Alltag auf den Kopf stellen musste.",
    highlight: "Topform trotz globalem Führungsalltag"
  },
  {
    name: "Pascal Zuberbühler",
    role: "Senior Football Expert, FIFA",
    quote: "Es war schwierig wieder in einen guten Trainingsmodus hineinzukommen. Marco hat mich dabei immens unterstützt. Sein strukturierter und individueller Ansatz ist das Beste was mir passieren konnte.",
    highlight: "Zurück auf Top-Niveau"
  },
  {
    name: "Manuela Leonhard",
    role: "Assistentin Stadtpräsidentin Zürich",
    quote: "Von Marco habe ich gelernt dass mein Körper alles schaffen kann. Es ist der Geist den man überzeugen muss. Dank Marcos ganzheitlichem Coaching konnte ich genau das erreichen.",
    highlight: "Körper und Geist in Einklang"
  },
  {
    name: "Gabriela Weiss",
    role: "Senior Payroll Specialist",
    quote: "Dank Marco konnte ich meinen Körperfettanteil von 26 Prozent auf 17 Prozent senken. Nachhaltig, ohne Crash-Diäten und ohne mein Leben auf den Kopf zu stellen.",
    highlight: "Von 26% auf 17% Körperfett"
  },
  {
    name: "Nicola Hägeli",
    role: "Unternehmer",
    quote: "Als Unternehmer ist mein Alltag oft chaotisch. Marco hat das geändert ohne Druck aber mit Klarheit. Strukturiert, individuell und alltagstauglich. Kein leeres Versprechen sondern ehrliche Arbeit mit einem klaren Plan.",
    highlight: "Endlich ein System das hält"
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-4">
    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />)}
  </div>
);

const ResultsSection = () => (
  <section id="ergebnisse" className="py-24 bg-secondary px-4">
    <div className="container mx-auto max-w-6xl">
      <p className="font-inter text-sm text-primary uppercase tracking-widest text-center mb-3">Echte Klienten. Echte Ergebnisse.</p>
      <h2 className="font-inter font-bold text-3xl md:text-5xl text-foreground text-center mb-4">
        Was Menschen sagen die <span className="text-primary">denken wie du.</span>
      </h2>
      <p className="text-center font-inter text-muted-foreground mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
        Führungskräfte, Spitzensportler und Entscheider die denselben Anspruch an sich selbst stellen wie du.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-7 flex flex-col hover:border-primary/40 transition-colors">
            <Stars />
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4 self-start">
              <span className="font-inter text-xs text-primary font-medium">{t.highlight}</span>
            </div>
            <Quote className="w-6 h-6 text-primary/30 mb-3" />
            <p className="font-inter text-foreground/80 leading-relaxed mb-6 flex-1 text-sm">{t.quote}</p>
            <div className="border-t border-border pt-4">
              <p className="font-inter font-semibold text-foreground text-sm">{t.name}</p>
              <p className="font-inter text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="#kontakt" className="inline-flex items-center px-10 py-4 rounded-full bg-primary text-primary-foreground font-inter font-semibold text-lg hover:brightness-110 transition shadow-gold">
          Schreib deine eigene Erfolgsgeschichte
        </a>
      </div>
    </div>
  </section>
);

export default ResultsSection;
