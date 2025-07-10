
import React from 'react';
import { Button } from '@/components/ui/button';

interface WelcomeSectionProps {
  onStartQuiz: () => void;
}

const WelcomeSection = ({ onStartQuiz }: WelcomeSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-salo-gray to-salo-lilac/10 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-salo-purple mb-6 font-poppins leading-tight">
            Qual o seu perfil de liderança na prática?
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto font-inter leading-relaxed">
            Descubra em menos de 2 minutos como você actua na gestão de pessoas — e o que pode fazer para evoluir com clareza e confiança.
          </p>
          
          <Button
            onClick={onStartQuiz}
            className="bg-salo-purple hover:bg-salo-purple-dark text-white px-12 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-poppins"
          >
            Começar Quiz
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
