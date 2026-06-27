import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const whatsappNumber = "+5511972562728";
  const whatsappMessage = "Olá! Gostaria de agendar uma consulta com a Dra. Ananda.";
  const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative w-full min-h-[90vh] bg-[#F7F4F6] overflow-hidden flex pt-32 md:pt-64">
      {/* Layered Wavy Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <svg className="absolute w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#F8F5F6" d="M0 0H1440V900H0V0Z"/>
          <path fill="#F5F1F3" d="M0 300C240 450 480 300 720 300C960 300 1200 450 1440 300V900H0V300Z"/>
          <path fill="#F1EAEE" d="M0 450C240 600 480 450 720 500C960 550 1200 400 1440 450V900H0V450Z"/>
          <path fill="#EBE4E7" d="M0 650C240 550 480 750 720 700C960 650 1200 800 1440 650V900H0V650Z"/>
          <path fill="#E0CED8" fillOpacity="0.4" d="M0 800C240 750 480 850 720 800C960 750 1200 850 1440 800V900H0V800Z"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center md:items-end gap-0 md:gap-12 max-w-6xl">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-4 md:space-y-8 pb-0 md:pb-32 z-10 w-full pt-4 md:pt-0 flex flex-col items-center md:items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block text-center md:text-left"
          >
            <h1 className="font-serif leading-none flex flex-col gap-1">
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-brand-secondary mb-1">Dra.</span>
              <span className="block text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-brand-primary tracking-tight">Ananda</span>
              <span className="block text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-brand-primary tracking-tight">Carvalho</span>
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-2xl font-sans tracking-widest text-gray-500 uppercase font-medium">
              Otorrinolaringologista
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-lg text-gray-700 max-w-lg mx-auto md:mx-0 font-light leading-relaxed px-4 md:px-0"
          >
            Atendimento focado na saúde integral do seu nariz, ouvido e garganta. 
            Cuidado especializado, com atenção, acolhimento e suporte completo para você.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-0 md:pt-4 w-full md:w-auto px-4 md:px-0 z-20"
          >
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full md:w-auto gap-3 bg-brand-secondary hover:bg-brand-secondary/90 transition-colors duration-300 text-white font-medium py-4 px-8 rounded-full shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              AGENDAR CONSULTA
            </a>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs md:text-sm text-[#364153] font-light mt-2 hidden md:block"
          >
            Atendimento exclusivo em São Paulo, SP
          </motion.p>
        </div>

        {/* Right Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 relative w-full mx-auto flex items-end justify-center md:justify-end self-end -mb-2 md:-mb-1 mt-8 md:mt-0"
        >
          <img 
            src="/landingpage_ananda_no_bg.png" 
            alt="Dra. Ananda Carvalho"
            className="w-full max-w-none h-auto object-contain object-bottom drop-shadow-[0_20px_35px_rgba(168,143,172,0.25)] origin-bottom scale-[0.94] sm:scale-[1.0] md:scale-[1.05] lg:scale-[1.2] md:translate-x-0 lg:translate-x-2"
          />
        </motion.div>

      </div>
    </section>
  );
}
