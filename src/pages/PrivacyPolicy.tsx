import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
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
                        Política de Privacidade
                    </h1>
                </div>

                <div className="space-y-8 text-foreground leading-relaxed">
                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold">1. Introdução</h2>
                        <p>Sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos, protegemos e tratamos suas informações pessoais ao utilizar nosso site e formulários.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold">2. Dados coletados</h2>
                        <p>Coletamos informações que você nos fornece diretamente através de nossos formulários, como nome, telefone, e-mail, e outros dados preenchidos durante o diagnóstico.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold">3. Finalidade do uso dos dados</h2>
                        <p>Os dados coletados são utilizados exclusivamente para entrar em contato com você, entender suas necessidades operacionais, fornecer nossos serviços e enviar comunicações relevantes sobre nossos produtos e ofertas.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold">4. Compartilhamento de dados</h2>
                        <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer o serviço solicitado (como ferramentas de automação e CRM) ou quando exigido por lei.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold">5. Cookies e tecnologias</h2>
                        <p>Podemos utilizar cookies e tecnologias semelhantes para melhorar a experiência do usuário, analisar tendências e administrar o site. Você pode controlar o uso de cookies nas configurações do seu navegador.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold">6. Segurança das informações</h2>
                        <p>Adotamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso, alteração, divulgação ou destruição não autorizada.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold">7. Direitos do usuário</h2>
                        <p>Você tem o direito de acessar, corrigir ou solicitar a exclusão de suas informações pessoais armazenadas por nós a qualquer momento, entrando em contato através de nossos canais oficiais.</p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-bold">8. Alterações na política</h2>
                        <p>Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças legais ou operacionais. Recomendamos que você revise esta página regularmente para se manter informado sobre como protegemos suas informações.</p>
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

export default PrivacyPolicy;
