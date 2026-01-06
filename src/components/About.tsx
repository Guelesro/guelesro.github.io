import { CheckCircle2 } from "lucide-react";

const features = [
  "Certifikovaní elektrikári s dlhoročnou praxou",
  "Kvalitné materiály od overených dodávateľov",
  "Dodržiavanie termínov a dohodnutých cien",
  "Záruka na všetky vykonané práce",
  "Bezplatná obhliadka a cenová ponuka",
  "Poradenstvo a individuálny prístup",
];

const About = () => {
  return (
    <section id="o-nas" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">
              O nás
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Prečo práve <span className="text-gradient-electric">Guele s.r.o.</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Sme stabilná slovenská firma s viac ako 15-ročnými skúsenosťami v oblasti elektromontážnych prác. 
              Naším cieľom je poskytovať profesionálne služby na najvyššej úrovni s dôrazom na bezpečnosť 
              a spokojnosť každého zákazníka.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-card to-secondary rounded-3xl border border-border p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                <div className="w-24 h-24 bg-gradient-electric rounded-2xl flex items-center justify-center mb-8 shadow-electric animate-pulse-glow">
                  <span className="text-4xl font-bold text-primary-foreground">G</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Guele s.r.o.</h3>
                <p className="text-muted-foreground">
                  Vaša istota v elektrikárskych službách
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
