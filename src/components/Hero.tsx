import { Zap, ArrowRight } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(50_93%_54%/0.1)_0%,transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Profesionálne elektrikárske služby - Košice a okolie     </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            Spoľahlivé{" "}
            <span className="text-gradient-electric">elektroinštalácie</span>
            <br />pre váš domov i firmu
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            Realizujeme komplexné elektroinštalácie, rekonštrukcie, kamerové a bezpečnostné systémy. 
            S nami máte istotu kvality a profesionálneho prístupu.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            <a href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-gradient-electric text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-electric hover:scale-105 transition-transform">
              Nezáväzná konzultácia
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#sluzby" className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary transition-colors">
              Naše služby
            </a>
          </div>

          {/* Stats */}
          
        </div>
      </div>
    </section>;
};
export default Hero;