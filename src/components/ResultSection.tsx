
import React from 'react';
import { Button } from '@/components/ui/button';
import { getQuizResult, type QuizResult } from '@/types/quiz';
import { MessageCircle, RotateCcw } from 'lucide-react';

interface ResultSectionProps {
  score: number;
  onRestart: () => void;
}

const ResultSection = ({ score, onRestart }: ResultSectionProps) => {
  const result = getQuizResult(score);
  
  const handleScheduleCall = () => {
    // You can replace this URL with the actual WhatsApp or scheduling link
    const whatsappUrl = "https://wa.me/5511999999999?text=Olá, completei o quiz de liderança e gostaria de agendar uma conversa gratuita com a Salo.";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-salo-gray to-salo-lilac/10 pt-20 pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="animate-scale-in">
          {/* Result Header */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">{result.profile.emoji}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-salo-purple mb-4 font-poppins">
              {result.profile.title}
            </h1>
            <div className="text-lg text-gray-600 font-inter">
              Pontuação: {result.score} de 24 pontos
            </div>
          </div>

          {/* Result Description */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed font-inter text-center">
              {result.profile.description}
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-salo-purple to-salo-purple-light rounded-3xl p-8 md:p-12 text-white text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
              💬 Quer aprofundar o seu perfil e receber orientação prática para evoluir como líder?
            </h2>
            
            <Button
              onClick={handleScheduleCall}
              className="bg-white text-salo-purple hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-poppins mt-6"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Agendar uma conversa gratuita com a Salo
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={onRestart}
              variant="outline"
              className="border-salo-purple text-salo-purple hover:bg-salo-purple hover:text-white px-6 py-3 rounded-xl font-poppins"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Refazer Quiz
            </Button>
            
            <Button
              onClick={handleScheduleCall}
              className="bg-salo-purple hover:bg-salo-purple-dark text-white px-6 py-3 rounded-xl font-poppins"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Agendar Conversa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
