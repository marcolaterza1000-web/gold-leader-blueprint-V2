import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Für wen ist die Zusammenarbeit mit Marco wirklich geeignet?",
    a: "Für Menschen die im Leben Verantwortung tragen und verstehen dass ihr Körper keine Nebensache ist. Führungskräfte, Unternehmer, Sportler und alle die mit sich selbst denselben Anspruch haben wie mit ihrer Arbeit. Voraussetzung ist nicht ein bestimmtes Fitnesslevel sondern die Bereitschaft konsequent zu arbeiten."
  },
  {
    q: "Wie läuft das erste Gespräch ab und worauf kann ich mich vorbereiten?",
    a: "Das Erstgespräch dauert 30 Minuten und ist kostenlos. Wir sprechen über deine aktuelle Situation, deine Ziele und was du bisher versucht hast. Am Ende wissen wir beide ob und wie eine Zusammenarbeit aussehen könnte. Du musst dich nicht vorbereiten. Komm einfach so wie du bist."
  },
  {
    q: "Wo findet das Training statt?",
    a: "In unserem privaten Studio in Urdorf oder im Ultimate Personal Training in Zürich. Beide Standorte bieten höchste Diskretion und sind exklusiv für unsere Klienten. Auf Wunsch bieten wir auch hybride Modelle mit Online-Sessions für Klienten die viel reisen oder international tätig sind."
  },
  {
    q: "Wann werde ich erste Ergebnisse spüren?",
    a: "Die meisten Klienten berichten bereits nach zwei bis drei Wochen von deutlich mehr Energie und besserem Schlaf. Sichtbare körperliche Veränderungen zeigen sich in der Regel nach sechs bis acht Wochen. Was zählt sind nachhaltige Ergebnisse die bleiben und nicht kurzfristige Effekte die nach dem Coaching verschwinden."
  },
  {
    q: "Warum arbeitet Marco nur mit einer begrenzten Anzahl Klienten?",
    a: "Weil echte Betreuung Zeit braucht. Marco begleitet dich persönlich und ist nicht nur beim Training dabei. Er analysiert deine Fortschritte, passt das Programm laufend an und ist für dich erreichbar wenn du ihn brauchst. Das ist nur möglich wenn die Zahl der Klienten begrenzt bleibt. Aktuell sind zwei Plätze verfügbar."
  },
];

const FAQSection = () => (
  <section className="py-24 bg-secondary px-4">
    <div className="container mx-auto max-w-3xl">
      <p className="font-inter text-sm text-primary uppercase tracking-widest text-center mb-3">Häufige Fragen</p>
      <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground text-center mb-4">
        Was du wissen möchtest.
      </h2>
      <p className="text-center font-inter text-muted-foreground mb-12 max-w-xl mx-auto">
        Die Fragen die wir am häufigsten hören. Und ehrliche Antworten darauf.
      </p>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
            <AccordionTrigger className="font-inter font-semibold text-foreground hover:text-primary py-5 text-left">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="font-inter text-muted-foreground leading-relaxed pb-5 text-base">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="text-center mt-12">
        <p className="font-inter text-muted-foreground mb-4">Noch weitere Fragen?</p>
        <a href="#kontakt" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-inter font-semibold hover:brightness-110 transition shadow-gold">
          Direkt fragen im Erstgespräch
        </a>
      </div>
    </div>
  </section>
);

export default FAQSection;
