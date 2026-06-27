import { HouseDrawn } from './Icons';
import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Location() {
  const whatsappNumber = "+5511910237800";
  return (
    <section id="localizacao" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        
        {/* Banner CTA Telemedicina */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-brand-light rounded-[2rem] p-10 md:p-16 text-center max-w-4xl mx-auto mb-24 shadow-sm border border-brand-accent/20"
        >
          <h3 className="text-2xl md:text-3xl font-sans font-light text-brand-primary mb-6 leading-relaxed">
            Além do atendimento presencial, também realizo <br className="hidden md:block"/>
            atendimentos por <span className="font-semibold text-brand-secondary">telemedicina</span>, de onde você estiver.
          </h3>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=Olá! Quero saber mais sobre consultas e telemedicina.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-secondary hover:bg-brand-secondary/90 text-white py-3 px-8 rounded-full font-medium transition-colors text-lg shadow-md"
          >
            AGENDAR CONSULTA
          </a>
        </motion.div>

        {/* Location Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 relative">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#f7f4f6] rounded-[2rem] p-8 md:p-12 w-full max-w-4xl mx-auto text-center border border-brand-accent/30 relative"
          >
            <HouseDrawn className="w-32 h-32 text-brand-secondary mx-auto mb-6" />
            <h4 className="text-2xl font-serif text-brand-secondary font-bold mb-4">
              Consultório em São Paulo
            </h4>
            <p className="text-gray-600 font-light text-lg mb-8">
              Av. Antártica, Perdizes<br/>
              São Paulo - SP, 05003-020
            </p>
            
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-inner border border-brand-accent/20 h-80 md:h-[400px] w-full relative bg-gray-100 flex items-center justify-center">
              <iframe 
                src="https://maps.google.com/maps?q=Otorrino%20Dra.%20Ananda%20Carvalho%2C%20Av.%20Ant%C3%A1rtica%2C%20Perdizes%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005003-020&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
