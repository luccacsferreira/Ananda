import { EarDrawn, NoseDrawn } from './Icons';
import { motion } from 'motion/react';

export default function Services() {
  const whatsappNumber = "+5511972562728";
  const getWhatsAppLink = (service: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${service}.`)}`;
  };

  const row1Services = [
    {
      title: 'Saúde dos Ouvidos',
      plainTitle: 'Saúde dos Ouvidos',
      image: '/Saúde_dos_ouvidos.jpeg',
      desc: 'Avaliação das infecções de ouvido, coceira e dificuldades auditivas.',
    },
    {
      title: 'Garganta e Voz',
      plainTitle: 'Garganta e Voz',
      image: '/Garganta_e_voz.jpeg',
      desc: 'Avaliação das amígdalas, rouquidão, faringites e laringites de repetição.',
    },
    {
      title: 'Avaliação Auditiva',
      plainTitle: 'Avaliação Auditiva',
      image: '/Avaliação_Auditiva.jpeg',
      desc: 'Investigação das perdas auditivas e zumbido.',
    },
    {
      title: 'Remoção de Cera',
      plainTitle: 'Remoção de Cera',
      image: '/Remoção_de_cera.jpg',
      desc: 'Realização de Lavagem dos ouvidos.',
    }
  ];

  const row2Services = [
    {
      title: 'Saúde Nasal e Seios da Face',
      plainTitle: 'Saúde Nasal e Seios da Face',
      image: '/Saúde_nasal_e_Seios_da_Face.jpeg',
      desc: 'Tratamento da rinite, sinusite, desvio de septo e dificuldades respiratórias.',
    },
    {
      title: 'Roncos e Respiração Oral',
      plainTitle: 'Roncos e Respiração Oral',
      image: '/Roncos_e_Respiração_oral.jpeg',
      desc: 'Investigação dos roncos e apneia em crianças e nos adultos.',
    },
    {
      title: (
        <>
          Nasofibrofaringo<br />laringoscopia
        </>
      ),
      plainTitle: 'Nasofibrofaringolaringoscopia',
      image: '/Nasofibrofaringolaringoscopia.jpg',
      desc: 'Exame rápido, realizado em crianças e adulto para avaliação das cavidades nasais, faringe e laringe.',
    }
  ];

  const pairConfigs = [
    { h: 'h-[70px] md:h-[110px]', scaleX: 'scale-x-100' },
    { h: 'h-[100px] md:h-[160px]', scaleX: 'scale-x-[-1.05]' },
    { h: 'h-[60px] md:h-[90px]', scaleX: 'scale-x-[1.1]' },
    { h: 'h-[120px] md:h-[180px]', scaleX: 'scale-x-[-1]' },
    { h: 'h-[80px] md:h-[130px]', scaleX: 'scale-x-[1.05]' },
    { h: 'h-[110px] md:h-[150px]', scaleX: 'scale-x-[1.15]' },
    { h: 'h-[65px] md:h-[100px]', scaleX: 'scale-x-[-1.1]' },
    { h: 'h-[95px] md:h-[140px]', scaleX: 'scale-x-100' },
    { h: 'h-[130px] md:h-[190px]', scaleX: 'scale-x-[-1.05]' },
    { h: 'h-[85px] md:h-[120px]', scaleX: 'scale-x-[1.1]' },
  ];

  return (
    <section id="servicos" className="py-24 bg-[#EBE4E7] relative overflow-hidden">
      {/* Flowing SVG Wallpaper */}
      <div className="absolute inset-0 w-full h-full z-0 flex flex-col opacity-50 mix-blend-overlay">
        {pairConfigs.map((pair, index) => (
          <div key={index} className="contents">
            {/* Top half: flat top, wavy bottom */}
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className={`w-full flex-none ${index === 0 ? '' : '-mt-[1px]'} ${pair.h} ${pair.scaleX}`} 
            >
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#FFFFFF"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-23.89,5.26,1.26,10.6,3.6,15.54,6.48V0Z" opacity=".5" fill="#FFFFFF"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#FFFFFF"></path>
            </svg>
            {/* Bottom half: wavy top, flat bottom */}
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className={`w-full flex-none scale-y-[-1] -mt-[1px] ${pair.h} ${pair.scaleX}`} 
            >
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#FFFFFF"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-23.89,5.26,1.26,10.6,3.6,15.54,6.48V0Z" opacity=".5" fill="#FFFFFF"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#FFFFFF"></path>
            </svg>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-brand-secondary font-sans uppercase tracking-widest text-sm font-semibold mb-2">
            Principais
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-brand-primary">Cuidados Oferecidos</h3>
          
          <EarDrawn className="absolute -top-10 left-10 md:left-20 w-16 h-16 text-brand-accent opacity-50" />
          <NoseDrawn className="absolute -bottom-10 right-10 md:right-20 w-16 h-16 text-brand-accent opacity-50" />
        </motion.div>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {row1Services.map((service, index) => (
              <motion.div 
                key={`row1-${index}`} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-4 pb-8 transition-transform duration-300 hover:scale-[1.02] flex flex-col justify-between shadow-[0_10px_30px_rgba(168,143,172,0.15)]"
              >
                <div className="rounded-[1.5rem] overflow-hidden bg-brand-light mb-6">
                  <img 
                    src={service.image} 
                    alt={service.plainTitle} 
                    className="w-full h-56 object-cover opacity-90 transition-opacity hover:opacity-100"
                  />
                </div>
                <div className="text-center px-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-serif font-semibold text-brand-primary mb-3">
                      {service.title}
                    </h4>
                    <p className="text-brand-secondary text-sm font-medium mb-6">
                      {service.desc}
                    </p>
                  </div>
                  <a 
                    href={getWhatsAppLink(service.plainTitle)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand-secondary text-white py-3 px-8 rounded-full font-medium shadow-sm hover:shadow-md hover:bg-brand-secondary/90 transition-all duration-300 text-sm tracking-wide"
                  >
                    saiba mais
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
            {row2Services.map((service, index) => (
              <motion.div 
                key={`row2-${index}`} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-4 pb-8 transition-transform duration-300 hover:scale-[1.02] flex flex-col justify-between shadow-[0_10px_30px_rgba(168,143,172,0.15)]"
              >
                <div className="rounded-[1.5rem] overflow-hidden bg-brand-light mb-6">
                  <img 
                    src={service.image} 
                    alt={service.plainTitle} 
                    className="w-full h-56 object-cover opacity-90 transition-opacity hover:opacity-100"
                  />
                </div>
                <div className="text-center px-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-serif font-semibold text-brand-primary mb-3">
                      {service.title}
                    </h4>
                    <p className="text-brand-secondary text-sm font-medium mb-6">
                      {service.desc}
                    </p>
                  </div>
                  <a 
                    href={getWhatsAppLink(service.plainTitle)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand-secondary text-white py-3 px-8 rounded-full font-medium shadow-sm hover:shadow-md hover:bg-brand-secondary/90 transition-all duration-300 text-sm tracking-wide"
                  >
                    saiba mais
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
