import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface FooterProps {
    theme?: "light" | "dark";
    className?: string;
}

const Footer = ({ theme = "light", className }: FooterProps) => {
    const isDark = theme === "dark";

    return (
        <footer className={cn(
            "w-full py-8 px-4 mt-auto text-center border-t backdrop-blur-sm",
            isDark
                ? "bg-primary/95 border-primary-foreground/10 text-primary-foreground/60"
                : "bg-background/80 border-border text-muted-foreground",
            className
        )}>
            <div className="max-w-4xl mx-auto space-y-4">
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-medium">
                    <Link
                        to="/politica-de-privacidade"
                        className={cn(
                            "hover:underline transition-colors",
                            isDark ? "hover:text-secondary" : "hover:text-foreground"
                        )}
                    >
                        Política de Privacidade
                    </Link>
                    <span className={isDark ? "text-primary-foreground/20" : "text-border"}>|</span>
                    <Link
                        to="/termos-de-uso"
                        className={cn(
                            "hover:underline transition-colors",
                            isDark ? "hover:text-secondary" : "hover:text-foreground"
                        )}
                    >
                        Termos de Uso
                    </Link>
                </div>
                <p className="text-xs opacity-70">
                    © {new Date().getFullYear()} Mercocamp – Diagnóstico Logístico & Tributário. Todos os direitos reservados.
                </p>
                <p className="text-[10px] opacity-50 max-w-2xl mx-auto leading-relaxed">
                    Este site não é afiliado ao Facebook, Instagram ou a qualquer entidade da Meta Platforms, Inc. As marcas citadas pertencem aos seus respectivos proprietários. Os resultados apresentados são exemplos ou experiências próprias e não representam garantia de resultados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
