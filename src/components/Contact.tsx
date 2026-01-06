import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefón",
    value: "+421 900 000 000",
    href: "tel:+421900000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@guele.sk",
    href: "mailto:info@guele.sk",
  },
  {
    icon: MapPin,
    label: "Adresa",
    value: "Slovenská republika",
    href: null,
  },
  {
    icon: Clock,
    label: "Pracovná doba",
    value: "Po - Pi: 7:00 - 17:00",
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="kontakt" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Spojte sa s <span className="text-gradient-electric">nami</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Radi zodpovieme vaše otázky a pripravíme nezáväznú cenovú ponuku na mieru vašim potrebám.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-electric rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-semibold hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-lg font-semibold">{item.value}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-card border border-border rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-4">Potrebujete nezáväznú konzultáciu?</h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Zavolajte nám alebo napíšte email. Radi vám poradíme a pripravíme cenovú ponuku zadarmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+421900000000"
                className="inline-flex items-center justify-center gap-2 bg-gradient-electric text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-electric hover:scale-105 transition-transform"
              >
                <Phone className="w-5 h-5" />
                Zavolajte nám
              </a>
              <a
                href="mailto:info@guele.sk"
                className="inline-flex items-center justify-center gap-2 bg-card border border-primary/50 text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Napíšte nám
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
