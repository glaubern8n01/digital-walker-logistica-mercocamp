import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle } from "lucide-react";
import { trackEvent, TRACKING_EVENTS } from "@/lib/tracking";
import Footer from "@/components/layout/Footer";

interface ResultPageProps {
  name: string;
  email: string;
  phone: string;
  leadId: string | null;
  answers: (string | null)[];
}

const WHATSAPP_NUMBER = "5527998150199";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, acabei de realizar o diagnóstico logístico e gostaria de conversar sobre como a Mercocamp pode ajudar minha empresa."
);

const ResultPage = ({ name, email, phone, answers }: ResultPageProps) => {
  const firstName = name.split(" ")[0];

  const handleWhatsappClick = () => {
    trackEvent(TRACKING_EVENTS.WHATSAPP_CLICKED);
    trackEvent("Lead");
  };

  const getPersonalizedMessage = () => {
    const challenge = answers[1];
    const volume = answers[5];

    if (challenge === "Reduzir custos de ICMS/Impostos") {
      return "Sua empresa tem um alto potencial para aproveitar os benefícios fiscais do ES (COMPETE/INVEST), o que pode reduzir drasticamente sua carga tributária.";
    }

    if (volume === "Mais de R$ 500.000") {
      return "Para operações de alto volume como a sua, a Mercocamp oferece infraestrutura robusta e agilidade aduaneira para otimizar toda a sua cadeia.";
    }

    return "Sua empresa pode ganhar muita competitividade com nossas soluções de logística integrada e armazenagem estratégica no Espírito Santo.";
  };

  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl text-center space-y-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mx-auto">
            <CheckCircle className="h-8 w-8 text-secondary" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground leading-snug">
            {firstName}, temos uma estratégia para sua empresa! 🚀
          </h1>

          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
            {getPersonalizedMessage()}
          </p>

          <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 space-y-4 max-w-md mx-auto">
            <h3 className="text-lg font-bold text-primary-foreground">Próximo passo:</h3>
            <p className="text-primary-foreground/70 text-sm">
              Fale agora com um especialista para entender como implementar esses benefícios e reduzir seus custos operacionais.
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white text-xl px-12 py-8 rounded-xl font-bold shadow-lg transition-transform hover:scale-105"
              onClick={handleWhatsappClick}
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Falar com Especialista
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Footer theme="dark" />
    </div>
  );
};

export default ResultPage;
