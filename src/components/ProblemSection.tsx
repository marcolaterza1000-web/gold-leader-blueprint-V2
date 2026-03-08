import { Zap, Clock, Brain } from "lucide-react";

const cards = [
  {
    icon: Zap,
    title: "Du funktionierst. Aber du spürst den Unterschied.",
    text: "Früher hattest du nach einem langen Tag noch Energie für das Wesentliche. Heute verwaltest du deinen Akku. Du weisst genau wovon ich spreche."
  },
  {
    icon: Clock,
    title: "Jede Stunde die du investierst muss sich rechnen.",
    text: "Du hast keine Zeit für ineffizientes Training. Du brauchst ein System das in deinen Kalender passt und trotzdem messbare Ergebnisse liefert. Nicht irgendwann. Jetzt."
  },
  {
    icon: Brain,
    title: "Dein Kopf arbeitet auf Hochtouren. Dein Körper kommt nicht mehr mit.",
    text: "Entscheidungsqualität, Fokus und Resilienz hängen direkt von deiner körperlichen Verfassung ab. Was in deiner Biologie passiert bestimmt was in deinem Büro passiert."
  },
];

const ProblemSection = () => (
  <section className="py-24 bg-background px-4">
    <div className="container mx-auto max-w-5xl">
      <p className="font-inter text-sm text-primary uppercase tracking-widest text-center mb-4">Die Realität von Leistungsträgern</p>
      <h2 className="font-inter font-bold text-3xl md:text-5xl text-foreground text-center mb-6">
        Kennst du dieses Gefühl?
      </h2>
      <p className="text-center font-inter text-muted-foreground mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
        Die meisten Menschen in deiner Position haben dasselbe Problem. Sie sind aussergewöhnlich diszipliniert in allem was sie tun. Nur beim eigenen Körper fehlt das richtige System.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-colors">
            <c.icon className="w-10 h-10 text-primary mb-6" />
            <h3 className="font-inter font-bold text-xl text-foreground mb-3 leading-snug">{c.title}</h3>
            <p className="font-inter text-muted-foreground leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-card border border-primary/20 rounded-2xl p-10 max-w-3xl mx-auto">
        <p className="font-inter text-xl text-foreground/90 leading-relaxed">
          Das Problem ist nicht fehlende Disziplin. Das Problem ist ein System das nicht zu dir passt. Genau das ändert die Zusammenarbeit mit Marco Laterza.
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
