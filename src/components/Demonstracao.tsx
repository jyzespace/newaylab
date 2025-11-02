import { useEffect, useState, useRef } from 'react';
import { Sparkles, TrendingUp, Clock, Users } from 'lucide-react';

const Demonstracao = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

    const section = document.querySelector('#demonstracao');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: 'Atendimento 24/7',
      description: 'Nunca mais perca um pedido. Atendimento automático a qualquer hora do dia.'
    },
    {
      icon: TrendingUp,
      title: 'Aumento de Vendas',
      description: 'Clientes atendidos imediatamente resultam em mais conversões e pedidos.'
    },
    {
      icon: Users,
      title: 'Experiência do Cliente',
      description: 'Atendimento rápido e personalizado que seus clientes vão adorar.'
    },
    {
      icon: Sparkles,
      title: 'IA Inteligente',
      description: 'Sistema que aprende com cada interação e melhora continuamente.'
    }
  ];

  return (
    <section
      id="demonstracao"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
            Um dos nossos projetos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Conheça o{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-[#5539ff] bg-clip-text text-transparent">
              Jyze
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Sistema completo de IA para restaurantes. Veja como funciona na prática a implementação de um sistema completo de IA para o seu negócio.
          </p>
        </div>

        {/* Video Demo */}
        <div className={`mb-16 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-700/50">
            <video
              ref={videoRef}
              className="w-full h-auto"
              controls
              playsInline
            >
              <source src="/videos/jyze-demonstration.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-[#5539ff] rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-400 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Quer escalar suas vendas com Automações e IA? Agende uma consultoria gratuita e faça uma avaliação do seu negócio.
          </p>
          <a
            href="#schedule-meeting"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-[#5539ff] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            style={{ fontFamily: 'Inter, sans-serif' }}
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#schedule-meeting');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Agendar Reunião
          </a>
        </div>
      </div>
    </section>
  );
};

export default Demonstracao;

