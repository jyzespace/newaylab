import { useEffect, useState } from 'react';
import AnimatedButton from './AnimatedButton';

const FinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  // URL do WhatsApp
  const phoneNumber = "554588294919";
  const message = encodeURIComponent("Olá! Quero agendar uma consultoria gratuita sobre Automação e IA para meu negócio.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Função para ir para seção de agendamento
  const goToSchedule = () => {
    const element = document.querySelector('#schedule-meeting');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    'Consultoria 100% gratuita',
    'Sem compromisso',
    'Diagnóstico personalizado'
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a]">
      <div className="max-w-6xl mx-auto text-center">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Pronto para escalar com Automação e IA?
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            Agende uma consultoria gratuita e descubra o potencial de IA no seu negócio
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <AnimatedButton
              onClick={goToSchedule}
              variant="primary"
              className="!text-lg shadow-lg"
            >
              Agendar Consultoria
            </AnimatedButton>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 overflow-hidden group text-white bg-transparent border-2 border-white/20 hover:border-white/30 hover:bg-white/5 shadow-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {/* Efeito de borda animada - cobra deslizando */}
              <span className="absolute inset-0 rounded-lg overflow-hidden">
                {/* Borda animada superior */}
                <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-border-top"></span>

                {/* Borda animada direita */}
                <span className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-border-right"></span>

                {/* Borda animada inferior */}
                <span className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent via-blue-500 to-transparent animate-border-bottom"></span>

                {/* Borda animada esquerda */}
                <span className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent via-blue-500 to-transparent animate-border-left"></span>
              </span>

              {/* Conteúdo do botão */}
              <span className="relative z-10 flex items-center gap-2">
                Falar no WhatsApp
              </span>
            </a>
          </div>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2"
              >
                <svg className="w-5 h-5" style={{ color: '#5539ff' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
