import { useEffect, useState } from 'react';
import { TrendingUp, MessageSquare, Target } from 'lucide-react';

const Sobre = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    const section = document.querySelector('#sobre');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: Target,
      title: 'Foco em Vendas',
      description: 'Automações de IA projetadas para aumentar conversões, qualificar leads e fechar mais negócios. Cada solução é pensada para gerar resultados diretos em vendas.'
    },
    {
      icon: MessageSquare,
      title: 'Atendimento Inteligente',
      description: 'Chatbots e assistentes virtuais que atendem 24/7, qualificam leads automaticamente e direcionam para vendas. Nunca perca uma oportunidade.'
    },
    {
      icon: TrendingUp,
      title: 'Otimização Contínua',
      description: 'Sistemas que aprendem com cada interação, otimizam estratégias de venda em tempo real e identificam padrões para maximizar resultados.'
    }
  ];

  return (
    <section
      id="sobre"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
            Sobre Nós 
          </span>*/}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Especialistas em{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-[#5539ff] bg-clip-text text-transparent">
              Automações com IA
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Somos especialistas em automações com IA focados em vendas. Criamos soluções inteligentes que convertem mais, 
            qualificam leads automaticamente e aumentam suas receitas.
          </p>
        </div>

        {/* 3 Cards */}
        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-slate-700/50 border border-slate-600/50 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {card.title}
                </h3>
                <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sobre;
