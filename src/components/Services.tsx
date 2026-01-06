import { Plug, Wrench, Camera, FileCheck, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Plug,
    title: "Elektroinštalácie",
    description: "Kompletné elektroinštalačné práce pre novostavby, bytové domy a priemyselné objekty.",
  },
  {
    icon: Wrench,
    title: "Rekonštrukcie",
    description: "Modernizácia a rekonštrukcia existujúcich elektrických rozvodov podľa aktuálnych noriem.",
  },
  {
    icon: Camera,
    title: "Kamerové systémy",
    description: "Návrh a inštalácia bezpečnostných kamerových systémov pre domácnosti aj firmy.",
  },
  {
    icon: FileCheck,
    title: "Revízne správy",
    description: "Odborné revízie elektrických zariadení a vydávanie revíznych správ podľa legislatívy.",
  },
  {
    icon: Shield,
    title: "Poplašné systémy",
    description: "Zabezpečovacie a poplašné systémy na ochranu vášho majetku pred neoprávneným vstupom.",
  },
  {
    icon: Zap,
    title: "Bleskozvody",
    description: "Projektovanie, montáž a revízie bleskozvodov pre maximálnu ochranu budov.",
  },
];

const Services = () => {
  return (
    <section id="sluzby" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">
            Čo ponúkame
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Naše <span className="text-gradient-electric">služby</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Poskytujeme komplexné elektrikárske služby s dôrazom na kvalitu, bezpečnosť a spokojnosť zákazníka.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-electric"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-electric rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-electric">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
