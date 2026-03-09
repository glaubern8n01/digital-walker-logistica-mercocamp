import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/layout/Footer";

const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="flex-grow container mx-auto px-6 py-12 max-w-4xl text-foreground">
                <div className="space-y-4 mb-12">
                    <Button variant="ghost" asChild className="mb-4">
                        <Link to="/" className="flex items-center gap-2">
                            <ChevronLeft className="h-4 w-4" />
                            Voltar ao Início
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                        Termos de Uso
                    </h1>
                </div>

                <div className="space-y-8 text-foreground leading-relaxed">
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold">1. Aceitação dos termos</h2>
                        <p>Ao acessar e usar este site e o diagnóstico oferecido, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nosso site ou serviços.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold">2. Uso das informações do site</h2>
                        <p>O conteúdo deste site e o resultado do diagnóstico são fornecidos para fins informativos e comerciais. Você não deve usar as informações aqui contidas para fins ilegais, não autorizados ou abusivos.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold">3. Limitação de responsabilidade</h2>
                        <p>Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou da incapacidade de usar este site ou as estratégias sugeridas. Os resultados podem variar conforme o contexto e a execução de cada operação.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold">4. Propriedade intelectual</h2>
                        <p>Todo o conteúdo deste site, incluindo textos, layout, gráficos, logotipos, imagens e a metodologia de diagnóstico, é protegido por leis de direitos autorais e propriedade intelectual. A reprodução não autorizada é estritamente proibida.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold">5. Alterações dos termos</h2>
                        <p>Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. O uso contínuo do site após as mudanças constitui aceitação dos novos termos.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold">6. Contato</h2>
                        <p>Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através dos canais de comunicação fornecidos (WhatsApp ou e-mail corporativo) para esclarecimentos.</p>
                    </section>

                    <div className="mt-16 pt-8 border-t border-border/50 text-sm italic text-muted-foreground">
                        <p>Este site não é afiliado ao Facebook, Instagram ou a qualquer entidade da Meta Platforms, Inc. As marcas citadas pertencem aos seus respectivos proprietários. Os resultados apresentados são exemplos ou experiências próprias e não representam garantia de resultados.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfUse;
