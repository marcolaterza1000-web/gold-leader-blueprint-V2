import { Dumbbell, Apple, Brain, Activity } from "lucide-react";

const tiles = [
  {
    icon: Dumbbell,
    title: "Training das in dein Leben passt",
    text: "Kein Programm von der Stange. Wir trainieren nach deiner Tagesform, deinem Kalender und deinem Hormonstatus. HRV-Messungen zeigen uns täglich genau wie viel dein Körper leisten kann und will. Das Resultat ist maximale Wirkung bei minimalem Zeitaufwand.",
    tag: "Training"
  },
  {
    icon: Apple,
    title: "Ernährung die funktioniert ohne dass du darüber nachdenken musst",
    text: "Wir analysieren deine hormonelle Ausgangslage und entwickeln eine Strategie die bei Geschäftsessen genauso funktioniert wie auf Reisen. Kein Kalorienzählen. Keine Verbote. Stattdessen lernst du deinen Körper so zu versorgen dass das Mittagstief zur Vergangenheit gehört.",
    tag: "Ernährung"
  },
  {
    icon: Brain,
    title: "Mentale Stärke die dich in kritischen Momenten trägt",
    text: "Im vertraulichen Gespräch auf Augenhöhe arbeiten wir an den Mustern die dich unbewusst bremsen. Du lernst dein Nervensystem aktiv zu regulieren, Stressphasen produktiv zu nutzen und danach schnell wieder in Topform zu kommen. Das ist der Unterschied zwischen gut und aussergewöhnlich.",
    tag: "Mental"
  },
  {
    icon: Activity,
    title: "Präzise Daten als Grundlage für alles",
    text: "Bauchgefühl reicht nicht. Gemeinsam mit Spitzenmedizinern analysieren wir deine Biomarker, deinen Hormonstatus und deine Körperzusammensetzung. Erst wenn wir wissen was in deinem Körper wirklich passiert erstellen wir deinen Plan. Datengetrieben. Messbar. Nachhaltig.",
    tag: "Analyse"
  },
];

const MethodSection = () => (
  <section id="methode" className="py-24 bg-background px-4">
    <div className="container mx-auto max-w-5xl">
      <p className="font-inter text-sm text-primary uppercase tracking-widest text-center mb-3">Die Methode</p>
      <h2 className="font-inter font-bold text-3xl md:text-5xl text-foreground text-center mb-4">
        Vier Säulen. <span className="text-primary">Ein Ergebnis das bleibt.</span>
      </h2>
      <p className="text-center text-muted-foreground font-inter mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
        Jede Säule greift in die andere. Zusammen bilden sie ein System das deinen Körper und deinen Geist auf das Niveau bringt das du von dir selbst erwartest.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {tiles.map((t, i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-colors group">
            <div className="flex items-start justify-between mb-5">
              <t.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-inter text-xs text-primary/70 border border-primary/20 rounded-full px-3 py-1">{t.tag}</span>
            </div>
            <h3 className="font-inter font-bold text-xl text-foreground mb-3 leading-snug">{t.title}</h3>
            <p className="font-inter text-muted-foreground leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="#kontakt" className="inline-flex items-center px-10 py-4 rounded-full bg-primary text-primary-foreground font-inter font-semibold text-lg hover:brightness-110 transition shadow-gold">
          Das System kennenlernen
        </a>
      </div>
    </div>
  </section>
);

export default MethodSection;
