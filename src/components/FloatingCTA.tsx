
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface FloatingCTAProps {
  visible: boolean;
}

const FloatingCTA = ({ visible }: FloatingCTAProps) => {
  const handleScheduleCall = () => {
    const whatsappUrl = "https://wa.me/5511999999999?text=Olá, completei o quiz de liderança e gostaria de agendar uma conversa gratuita com a Salo.";
    window.open(whatsappUrl, '_blank');
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        onClick={handleScheduleCall}
        className="bg-salo-purple hover:bg-salo-purple-dark text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-poppins"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Agendar Conversa
      </Button>
    </div>
  );
};

export default FloatingCTA;
