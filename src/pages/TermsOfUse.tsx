import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-12">
                <div className="space-y-4">
                    <Button variant="ghost" asChild className="mb-4">
                        <Link to="/" className="flex items-center gap-2">
                            <ChevronLeft className="h-4 w-4" />
                            Voltar ao Início
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
                        Termos de Uso
                    </h1>
                    <p className="text-xl font-bold text-secondary">
                        Diagnóstico de Marketing para Escritórios de Advocacia
                    </p>
                    <p className="text-sm text-muted-foreground">Última atualização: 2026</p>
                </div>

                <section className="space-y-6 text-foreground leading-relaxed">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Aceitação dos termos</h2>
                        <p>
                            Ao acessar e utilizar o diagnóstico disponível no site advogado.vextriq.com, o usuário concorda com os presentes Termos de Uso.
                        </p>
                        <p>
                            Caso não concorde com qualquer parte destes termos, recomenda-se não utilizar o serviço.
                        </p>
                    </div>

                    <hr className="border-border" />

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Objetivo do diagnóstico</h2>
                        <p>
                            O diagnóstico disponibilizado tem caráter informativo e estratégico, com o objetivo de avaliar oportunidades de crescimento através de marketing digital para escritórios de advocacia.
                        </p>
                        <p>
                            Ele não substitui consultoria jurídica, contábil ou empresarial.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Uso das informações</h2>
                        <p>As respostas fornecidas pelo usuário poderão ser utilizadas para:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>análise de perfil do escritório</li>
                            <li>geração de diagnóstico estratégico</li>
                            <li>contato comercial</li>
                            <li>envio de conteúdos e informações relacionadas a marketing jurídico</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Responsabilidades do usuário</h2>
                        <p>O usuário declara que:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>fornecerá informações verdadeiras</li>
                            <li>utilizará o diagnóstico de forma legítima</li>
                            <li>não utilizará o site para fins ilegais ou abusivos</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Propriedade intelectual</h2>
                        <p>Todo o conteúdo disponibilizado no site, incluindo:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>textos</li>
                            <li>layout</li>
                            <li>identidade visual</li>
                            <li>metodologia de diagnóstico</li>
                        </ul>
                        <p>
                            é protegido por direitos de propriedade intelectual e não pode ser reproduzido sem autorização.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Limitação de responsabilidade</h2>
                        <p>
                            A VEXTRIQ não garante resultados específicos decorrentes do uso das estratégias sugeridas no diagnóstico.
                        </p>
                        <p>
                            Os resultados podem variar conforme fatores como mercado, investimento, execução e contexto do escritório.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Natureza informativa</h2>
                        <p>
                            O diagnóstico e qualquer material fornecido possuem finalidade educacional e estratégica voltada ao marketing digital.
                        </p>
                        <p>Não constituem aconselhamento jurídico nem parecer legal.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Modificações</h2>
                        <p>
                            A VEXTRIQ pode alterar estes Termos de Uso a qualquer momento para refletir mudanças legais ou operacionais.
                        </p>
                    </div>

                    <div className="space-y-4 pt-8 border-t border-border bg-muted/30 p-6 rounded-lg">
                        <p className="text-sm italic text-muted-foreground">
                            Este site não é afiliado ao Facebook, Instagram ou a qualquer entidade da Meta Platforms, Inc. As marcas citadas pertencem aos seus respectivos proprietários. Os resultados apresentados são exemplos ou experiências próprias e não representam garantia de resultados.
                        </p>
                    </div>

                    <div className="space-y-4 pt-8 border-t border-border">
                        <h2 className="text-2xl font-bold">Contato</h2>
                        <div className="space-y-2">
                            <p><strong>Responsável:</strong> VEXTRIQ</p>
                            <p><strong>Telefone / WhatsApp:</strong> +55 27 99773-0304</p>
                            <p>
                                <strong>Instagram:</strong>{" "}
                                <a href="https://www.instagram.com/vextriq/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                                    https://www.instagram.com/vextriq/
                                </a>
                            </p>
                            <p>
                                <strong>Site institucional:</strong>{" "}
                                <a href="https://vextriq.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                                    https://vextriq.com/
                                </a>
                            </p>
                        </div>
                    </div>
                </section>

                <footer className="text-center pt-12 border-t border-border mt-12">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} VEXTRIQ. Todos os direitos reservados.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default TermsOfUse;
