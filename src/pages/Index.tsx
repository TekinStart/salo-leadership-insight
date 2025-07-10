
import React, { useState } from 'react';
import Header from '@/components/Header';
import WelcomeSection from '@/components/WelcomeSection';
import QuizSection from '@/components/QuizSection';
import ResultSection from '@/components/ResultSection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

type AppState = 'welcome' | 'quiz' | 'result';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('welcome');
  const [quizScore, setQuizScore] = useState<number>(0);

  const handleStartQuiz = () => {
    setCurrentState('quiz');
  };

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    setCurrentState('result');
  };

  const handleRestart = () => {
    setCurrentState('welcome');
    setQuizScore(0);
  };

  const handleBackToWelcome = () => {
    setCurrentState('welcome');
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      
      {currentState === 'welcome' && (
        <WelcomeSection onStartQuiz={handleStartQuiz} />
      )}
      
      {currentState === 'quiz' && (
        <QuizSection onComplete={handleQuizComplete} onBack={handleBackToWelcome} />
      )}
      
      {currentState === 'result' && (
        <ResultSection score={quizScore} onRestart={handleRestart} />
      )}
      
      <FloatingCTA visible={currentState === 'result'} />
      
      <Footer />
    </div>
  );
};

export default Index;
