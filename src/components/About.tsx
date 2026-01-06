import { CheckCircle2 } from "lucide-react";
const features = ["Certifikovaní elektrikári s dlhoročnou praxou", "Kvalitné materiály od overených dodávateľov", "Dodržiavanie termínov a dohodnutých cien", "Záruka na všetky vykonané práce", "Bezplatná obhliadka a cenová ponuka", "Poradenstvo a individuálny prístup"];
const About = () => {
  return <section id="o-nas" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl ml-auto">
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
              {features.map(feature => <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{feature}</span>
                </div>)}
            </div>
          </div>

        </div>
      </div>
    </section>;
};
export default About;