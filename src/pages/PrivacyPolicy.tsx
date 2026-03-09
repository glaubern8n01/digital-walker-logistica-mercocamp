import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const PrivacyPolicy = () => {
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
                        Política de Privacidade
                    </h1>
                    <p className="text-xl font-bold text-secondary">
                        VEXTRIQ – Diagnóstico para Escritórios de Advocacia
                    </p>
                    <p className="text-sm text-muted-foreground">Última atualização: 2026</p>
                </div>

                <section className="space-y-6 text-foreground leading-relaxed">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Introdução</h2>
                        <p>
                            A VEXTRIQ respeita a privacidade dos usuários e está comprometida em proteger os dados pessoais coletados por meio deste site e de seus formulários de diagnóstico.
                        </p>
                        <p>
                            Esta Política de Privacidade explica como coletamos, utilizamos e protegemos suas informações ao acessar o diagnóstico disponível em:
                        </p>
                        <p className="font-medium text-secondary">https://advogado.vextriq.com</p>
                        <p>
                            Ao utilizar este site, você concorda com as práticas descritas nesta política.
                        </p>
                    </div>

                    <hr className="border-border" />

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Dados que coletamos</h2>
                        <p>Podemos coletar as seguintes informações durante o diagnóstico ou contato:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Nome</li>
                            <li>E-mail</li>
                            <li>Número de telefone ou WhatsApp</li>
                            <li>Área de atuação jurídica</li>
                            <li>Informações relacionadas ao escritório de advocacia</li>
                            <li>Respostas fornecidas no diagnóstico</li>
                        </ul>
                        <p>Também podemos coletar dados técnicos automaticamente:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Endereço IP</li>
                            <li>Tipo de dispositivo</li>
                            <li>Navegador</li>
                            <li>Dados de navegação</li>
                            <li>Cookies e tecnologias semelhantes</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Finalidade da coleta de dados</h2>
                        <p>Os dados coletados podem ser utilizados para:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Entrar em contato com o usuário</li>
                            <li>Enviar o resultado do diagnóstico</li>
                            <li>Apresentar soluções de marketing digital para escritórios de advocacia</li>
                            <li>Melhorar a experiência do usuário no site</li>
                            <li>Analisar métricas de marketing e desempenho de campanhas</li>
                            <li>Cumprir obrigações legais</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Compartilhamento de dados</h2>
                        <p>Os dados podem ser compartilhados com plataformas e ferramentas necessárias para operação do serviço, incluindo:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>ferramentas de marketing digital</li>
                            <li>plataformas de análise de tráfego</li>
                            <li>sistemas de automação e CRM</li>
                            <li>provedores de hospedagem</li>
                        </ul>
                        <p className="font-bold">A VEXTRIQ não vende dados pessoais.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Cookies e tecnologias de rastreamento</h2>
                        <p>Este site pode utilizar cookies e tecnologias semelhantes para:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>medir desempenho de campanhas</li>
                            <li>melhorar a navegação</li>
                            <li>entender o comportamento do usuário</li>
                        </ul>
                        <p>
                            Essas tecnologias podem ser utilizadas por plataformas de análise, publicidade e automação de marketing.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Segurança dos dados</h2>
                        <p>
                            Adotamos medidas técnicas e organizacionais adequadas para proteger os dados contra acesso não autorizado, perda ou uso indevido.
                        </p>
                        <p>Apesar disso, nenhum sistema na internet é completamente seguro.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Direitos do titular de dados</h2>
                        <p>
                            De acordo com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018), o usuário pode solicitar:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>confirmação da existência de tratamento de dados</li>
                            <li>acesso aos dados pessoais</li>
                            <li>correção de dados incompletos ou incorretos</li>
                            <li>exclusão de dados quando aplicável</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Retenção de dados</h2>
                        <p>
                            Os dados serão armazenados apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Alterações nesta política</h2>
                        <p>
                            Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças legais ou operacionais.
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

export default PrivacyPolicy;
