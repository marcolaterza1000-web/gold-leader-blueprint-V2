import { Phone, Shield, Clock } from "lucide-react";
import { useEffect } from "react";

const BookingSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <section id="kontakt" className="py-24 bg-background px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="border-2 border-primary/40 rounded-2xl p-8 md:p-14 text-center shadow-gold">
          <p className="font-inter text-sm text-primary uppercase tracking-widest mb-3">Der erste Schritt</p>
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-foreground mb-4 leading-snug">
            30 Minuten die alles verändern können.
          </h2>
          <p className="font-inter text-foreground/75 leading-relaxed mb-4 max-w-xl mx-auto text-lg">
            Im kostenlosen Erstgespräch analysieren wir gemeinsam deine Situation. Wir schauen wo du stehst, wo du hinwillst und ob eine Zusammenarbeit wirklich Sinn macht.
          </p>
          <p className="font-inter text-foreground/60 leading-relaxed mb-8 max-w-xl mx-auto">
            Kein Verkaufsgespräch. Kein Druck. Nur ein ehrliches Gespräch zwischen zwei Menschen die dasselbe Ziel haben: das Beste aus dir herauszuholen.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground font-inter text-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span>Vollständig vertraulich</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground font-inter text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span>30 Minuten, kein Verkaufsdruck</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground font-inter text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span>Online oder persönlich in Zürich</span>
            </div>
          </div>

          <div
            className="calendly-inline-widget rounded-lg overflow-hidden mb-8"
            data-url="https://calendly.com/marco-laterza/30min?hide_gdpr_banner=1&background_color=0d0f1a&text_color=f0f0f0&primary_color=c9a84c"
            style={{ minWidth: "320px", height: "700px" }}
          />

          <div className="flex items-center justify-center gap-2 text-muted-foreground font-inter text-sm">
            <Phone className="w-4 h-4" />
            <span>
              Lieber direkt anrufen?{" "}
              <a href="tel:+41794445851" className="text-primary hover:underline font-semibold">
                +41 79 444 58 51
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
