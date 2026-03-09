import { useState, useEffect } from "react";
import LandingPage from "@/components/funnel/LandingPage";
import QuizStep from "@/components/funnel/QuizStep";
import LeadCapture, { type LeadData } from "@/components/funnel/LeadCapture";
import ResultPage from "@/components/funnel/ResultPage";
import { trackEvent, TRACKING_EVENTS } from "@/lib/tracking";

const QUESTIONS = [
  {
    question: "Sua empresa já realiza operações de importação ou exportação?",
    options: [
      "Sim, importação",
      "Sim, exportação",
      "Sim, ambas",
      "Não, mas temos interesse em começar",
      "Não, apenas mercado nacional",
    ],
  },
  {
    question: "Qual é o seu principal desafio logístico hoje?",
    options: [
      "Reduzir custos de ICMS/Impostos",
      "Agilizar o desembaraço aduaneiro",
      "Otimizar armazenagem e estoque",
      "Melhorar o fluxo de transporte/distribuição",
      "Segurança e integridade da carga",
    ],
  },
  {
    question: "Qual o volume ou frequência média operacional?",
    options: [
      "Operações semanais / Alto volume",
      "Operações mensais",
      "Poucas vezes ao ano",
      "Ainda não operamos regularmente",
    ],
  },
  {
    question: "Sua operação é recorrente ou pontual?",
    options: ["Recorrente (Fluxo contínuo)", "Pontual (Demanda específica)", "Apenas sob consulta"],
  },
  {
    question: "Você atua como Pessoa Jurídica (CNPJ)?",
    options: ["Sim, possuo CNPJ", "Sim, em fase de abertura", "Não, atuo como Pessoa Física"],
  },
  {
    question: "Qual valor aproximado movimentado por mês em carga/logística?",
    options: [
      "Até R$ 50.000",
      "R$ 50.000 a R$ 200.000",
      "R$ 200.000 a R$ 500.000",
      "Mais de R$ 500.000",
    ],
  },
];

type Step = "landing" | "quiz" | "lead" | "result";

const Index = () => {
  const [step, setStep] = useState<Step>("landing");
  const [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(QUESTIONS.length).fill(null));
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadId, setLeadId] = useState<string | null>(null);

  useEffect(() => {
    if (step === "landing") {
      trackEvent(TRACKING_EVENTS.PAGE_VIEW);
    }
  }, [step]);

  const handleSelectOption = (option: string) => {
    const updated = [...answers];
    updated[quizIndex] = option;
    setAnswers(updated);
  };

  const handleQuizNext = () => {
    if (quizIndex === 0) {
      trackEvent(TRACKING_EVENTS.QUIZ_STARTED);
    }

    if (quizIndex < QUESTIONS.length - 1) {
      setQuizIndex((i) => i + 1);
    } else {
      trackEvent(TRACKING_EVENTS.QUIZ_COMPLETED);
      setStep("lead");
    }
  };

  const handleQuizBack = () => {
    if (quizIndex > 0) {
      setQuizIndex((i) => i - 1);
    } else {
      setStep("landing");
    }
  };

  const calculateScore = (answers: (string | null)[]) => {
    let score = 0;

    // Challenge scoring: Tax and speed are primary Mercocamp values
    const challenge = answers[1];
    if (challenge === "Reduzir custos de ICMS/Impostos") score += 35;
    if (challenge === "Agilizar o desembaraço aduaneiro") score += 25;

    // Volume scoring
    const volume = answers[5];
    if (volume === "Mais de R$ 500.000") score += 30;
    else if (volume === "R$ 200.000 a R$ 500.000") score += 20;

    // Continuity
    if (answers[3] === "Recorrente (Fluxo contínuo)") score += 15;

    // Formalization
    if (answers[4] === "Sim, possuo CNPJ") score += 10;

    return score;
  };

  const handleLeadSubmit = async (data: LeadData) => {
    setLeadName(data.name);
    setLeadEmail(data.email);
    setLeadPhone(data.phone);
    const score = calculateScore(answers);

    const leadEntry = {
      name: data.name,
      company: data.lawFirm, // Reusing field for company
      email: data.email,
      phone: data.phone,
      location: data.instagram || "", // Reusing field for city/state
      is_exporter_importer: answers[0] || "",
      main_challenge: answers[1] || "",
      frequency: answers[2] || "",
      is_recurrent: answers[3] || "",
      is_pj: answers[4] || "",
      monthly_volume: answers[5] || "",
      lead_score: score,
      timestamp: new Date().toLocaleString("pt-BR"),
    };

    // Send to Google Sheets
    const sendToGoogleSheets = async () => {
      const G_SHEETS_WEBHOOK = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK;
      if (G_SHEETS_WEBHOOK) {
        try {
          console.log("[Index] Sending lead to Google Sheets:", leadEntry);
          const response = await fetch(G_SHEETS_WEBHOOK, {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify(leadEntry),
          });
          const responseText = await response.text();
          console.log("[Index] Google Sheets response status:", response.status);
          console.log("[Index] Google Sheets response body:", responseText);
        } catch (err) {
          console.error("[Index] Error sending to Google Sheets:", err);
        }
      }
    };

    await sendToGoogleSheets();
    trackEvent(TRACKING_EVENTS.LEAD_SUBMITTED, { score });
    setStep("result");
  };

  if (step === "landing") return <LandingPage onStart={() => setStep("quiz")} />;

  if (step === "quiz") {
    const q = QUESTIONS[quizIndex];
    return (
      <QuizStep
        questionNumber={quizIndex + 1}
        totalQuestions={QUESTIONS.length}
        question={q.question}
        options={q.options}
        selectedOption={answers[quizIndex]}
        onSelect={handleSelectOption}
        onNext={handleQuizNext}
        onBack={handleQuizBack}
      />
    );
  }

  if (step === "lead") {
    return <LeadCapture onSubmit={handleLeadSubmit} onBack={() => setStep("quiz")} />;
  }

  return (
    <ResultPage
      name={leadName}
      email={leadEmail}
      phone={leadPhone}
      leadId={null}
      answers={answers}
    />
  );
};

export default Index;
