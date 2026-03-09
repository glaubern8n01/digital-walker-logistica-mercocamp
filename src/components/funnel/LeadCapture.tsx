import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import Footer from "@/components/layout/Footer";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  phone: z.string().trim().min(10, "WhatsApp inválido").max(20),
  instagram: z.string().trim().max(100).optional(), // City/State mapping
  lawFirm: z.string().trim().min(2, "Informe o nome da empresa").max(200), // Company mapping
});

export type LeadData = z.infer<typeof leadSchema>;

interface LeadCaptureProps {
  onSubmit: (data: LeadData) => void;
  onBack: () => void;
}

const LeadCapture = ({ onSubmit, onBack }: LeadCaptureProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", instagram: "", lawFirm: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    const result = leadSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((e) => {
        if (e.path[0]) fieldErrors[e.path[0] as string] = e.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate a brief delay
    setTimeout(() => {
      onSubmit(result.data);
      setLoading(false);
    }, 600);
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Quase lá! 🎯
            </h2>
            <p className="text-muted-foreground">
              Preencha seus dados para receber o diagnóstico de viabilidade logística.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { key: "name", label: "Nome completo", placeholder: "Seu nome", type: "text" },
              { key: "lawFirm", label: "Nome da empresa", placeholder: "Sua Empresa S.A.", type: "text" },
              { key: "email", label: "E-mail corporativo", placeholder: "seu@email.com", type: "email" },
              { key: "phone", label: "WhatsApp", placeholder: "(11) 99999-9999", type: "tel" },
              { key: "instagram", label: "Cidade/Estado", placeholder: "Vitória/ES", type: "text" },
            ].map((field) => (
              <div key={field.key} className="space-y-1.5">
                <Label htmlFor={field.key} className="text-sm font-medium text-foreground">
                  {field.label}
                </Label>
                <Input
                  id={field.key}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => update(field.key, e.target.value)}
                  className={errors[field.key] ? "border-destructive" : ""}
                />
                {errors[field.key] && (
                  <p className="text-xs text-destructive">{errors[field.key]}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between pt-2">
            <Button variant="ghost" onClick={onBack} className="text-muted-foreground">
              ← Voltar
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8"
            >
              {loading ? "Processando..." : "Gerar Diagnóstico"}
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            🔒 Seus dados estão seguros e seguem a LGPD.
          </p>
        </div>
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default LeadCapture;
