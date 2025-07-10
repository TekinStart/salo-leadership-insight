
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { questions, type Question } from '@/types/quiz';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface QuizSectionProps {
  onComplete: (totalScore: number) => void;
  onBack: () => void;
}

const QuizSection = ({ onComplete, onBack }: QuizSectionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleOptionSelect = (value: number) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
    setAnswers(newAnswers);
    
    if (isLastQuestion) {
      const totalScore = newAnswers.reduce((sum, score) => sum + score, 0);
      onComplete(totalScore);
    } else {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedOption(answers[currentQuestion - 1] || null);
    } else {
      onBack();
    }
  };

  const question = questions[currentQuestion];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-salo-gray to-salo-lilac/10 pt-20 pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              onClick={handlePrevious}
              className="text-salo-purple hover:bg-salo-purple/10"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <span className="text-sm text-gray-600 font-inter">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
          </div>
          
          <Progress value={progress} className="h-2 bg-gray-200">
            <div 
              className="h-full bg-gradient-to-r from-salo-purple to-salo-purple-light rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </Progress>
        </div>

        <div className="animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-salo-purple mb-12 font-poppins text-center leading-relaxed">
            {question.question}
          </h2>

          <div className="space-y-4 mb-12">
            {question.options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleOptionSelect(option.value)}
                className={`w-full p-6 text-left rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg ${
                  selectedOption === option.value
                    ? 'border-salo-purple bg-salo-purple/5 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-salo-purple/30'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                    selectedOption === option.value
                      ? 'bg-salo-purple text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {option.label}
                  </span>
                  <p className="text-gray-700 font-inter leading-relaxed">
                    {option.text}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={handleNext}
              disabled={selectedOption === null}
              className="bg-salo-purple hover:bg-salo-purple-dark disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-poppins"
            >
              {isLastQuestion ? 'Ver Resultado' : 'Próxima'}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
