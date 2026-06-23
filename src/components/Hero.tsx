import { Phone } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = "+5511972562728";
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta com a Dra. Ananda.";
  const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative w-full min-h-[90vh] bg-[#F5F1F3] overflow-hidden flex items-center justify-center pt-48 md:pt-64 pb-16">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#A88FAC] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-[#E0CED8] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-8">
          <div className="relative inline-block">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-brand-primary leading-tight">
              <span className="block text-3xl md:text-4xl lg:text-5xl font-normal text-brand-secondary mb-2">Dra. Ananda</span>
              Carvalho
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-sans tracking-wide text-gray-600 uppercase font-light">
              Otorrinolaringologista
            </p>
          </div>

          <p className="text-lg text-gray-700 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
            Atendimento focado na saúde integral do seu nariz, ouvido e garganta. 
            Cuidado especializado, com atenção, acolhimento e suporte completo para você.
          </p>

          <div className="pt-4">
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-secondary hover:bg-brand-primary transition-colors duration-300 text-white font-medium py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
            >
              <Phone className="w-5 h-5" />
              AGENDAR CONSULTA
            </a>
          </div>
          
          <p className="text-sm text-gray-500 font-light mt-4">
            Atendimento exclusivo em São Paulo, SP
          </p>
        </div>

        {/* Right Photo */}
        <div className="flex-1 relative w-full max-w-md mx-auto flex items-center justify-center">
          <img 
            src="/no_bg_close.png" 
            alt="Dra. Ananda Carvalho"
            className="w-full h-auto max-h-[500px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(168,143,172,0.2)]"
          />
        </div>

      </div>
    </section>
  );
}
