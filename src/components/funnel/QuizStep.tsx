import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/Footer";

interface QuizStepProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const QuizStep = ({
  questionNumber,
  totalQuestions,
  question,
  options,
  selectedOption,
  onSelect,
  onNext,
  onBack,
}: QuizStepProps) => {
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-xl space-y-8">
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Pergunta {questionNumber} de {totalQuestions}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full bg-secondary rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-snug">
            {question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => onSelect(option)}
                className={cn(
                  "w-full text-left px-5 py-4 rounded-xl border-2 transition-all font-medium",
                  selectedOption === option
                    ? "border-secondary bg-secondary/10 text-foreground"
                    : "border-border bg-card text-foreground hover:border-secondary/50"
                )}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-4">
            <Button variant="ghost" onClick={onBack} className="text-muted-foreground">
              ← Voltar
            </Button>
            <Button
              onClick={onNext}
              disabled={!selectedOption}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8"
            >
              {questionNumber === totalQuestions ? "Continuar" : "Próxima →"}
            </Button>
          </div>
        </div>
      </div>
      <Footer theme="light" />
    </div>
  );
};

export default QuizStep;
