import { Button } from "@/components/ui/button";
import { Ship, TrendingUp, ShieldCheck, CheckCircle } from "lucide-react";
import Footer from "@/components/layout/Footer";

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage = ({ onStart }: LandingPageProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-4 py-16 bg-primary relative overflow-hidden">
        {/* Background subtly styled */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm text-secondary font-medium">
            <Ship className="h-4 w-4" />
            <span>Diagnóstico Logístico & Tributário Mercocamp</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-primary-foreground">
            Sua operação logística está <span className="text-secondary">gerando os melhores resultados?</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Descubra em 60 segundos como reduzir custos operacionais e aproveitar benefícios fiscais exclusivos através da estrutura Mercocamp no Espírito Santo.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={onStart}
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-xl px-12 py-8 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Iniciar Diagnóstico Gratuito
            </Button>
            <p className="text-primary-foreground/50 text-sm flex items-center gap-4">
              <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3" /> Resultado imediato</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3" /> Foco em Redução de Custos</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-3 w-3" /> 100% Gratuito</span>
            </p>
          </div>
        </div>
      </section>

      {/* Social proof / Features */}
      <section className="py-20 px-4 bg-background border-t border-border/50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: ShieldCheck,
              title: "30 Anos de Mercado",
              desc: "Referência sólida em comércio exterior e logística integrada com infraestrutura própria."
            },
            {
              icon: TrendingUp,
              title: "Otimização Tributária",
              desc: "Especialistas em COMPETE, INVEST e FUNDAP no ES para máxima redução de ICMS."
            },
            {
              icon: CheckCircle,
              title: "Logística 360º",
              desc: "Desde o desembaraço aduaneiro até a armazenagem e distribuição de última milha."
            },
          ].map((item, i) => (
            <div key={i} className="text-center space-y-4 p-6 rounded-2xl border border-transparent hover:border-border hover:bg-card/50 transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10">
                <item.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer theme="light" />
    </div>
  );
};

export default LandingPage;
