import { HouseDrawn } from './Icons';
import { MapPin } from 'lucide-react';

export default function Location() {
  const whatsappNumber = "+5511972562728";
  return (
    <section id="localizacao" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        
        {/* Banner CTA Telemedicina */}
        <div className="bg-brand-light rounded-[2rem] p-10 md:p-16 text-center max-w-4xl mx-auto mb-24 shadow-sm border border-brand-accent/20">
          <h3 className="text-2xl md:text-3xl font-sans font-light text-brand-primary mb-6 leading-relaxed">
            Além do atendimento presencial, também realizo <br className="hidden md:block"/>
            <span className="font-semibold text-brand-secondary">atendimentos domiciliares em São Paulo (SP)</span> e por <br className="hidden md:block"/>
            <span className="font-semibold text-brand-secondary">telemedicina</span>, de onde você estiver.
          </h3>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=Olá! Quero saber mais sobre telemedicina ou atendimento domiciliar.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-secondary hover:bg-brand-secondary/90 text-white py-3 px-8 rounded-full font-medium transition-colors text-lg shadow-md"
          >
            AGENDAR CONSULTA
          </a>
        </div>

        {/* Location Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 relative">
          
          <div className="bg-brand-light/40 rounded-[2rem] p-8 md:p-12 w-full max-w-md text-center border border-brand-accent/30 relative">
            <HouseDrawn className="w-32 h-32 text-brand-secondary mx-auto mb-6" />
            <h4 className="text-2xl font-serif text-brand-secondary font-bold mb-4">
              Consultório em São Paulo
            </h4>
            <p className="text-gray-600 font-light text-lg mb-8">
              Av. Paulista, 1000 - Cj 50<br/>
              Bela Vista, São Paulo - SP
            </p>
            
            {/* Map Placeholder Image */}
            <div className="rounded-2xl overflow-hidden shadow-inner border border-brand-accent/20 h-48 relative bg-gray-100 flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                alt="Mapa" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white p-3 rounded-full shadow-lg text-brand-secondary group-hover:scale-110 transition-transform">
                   <MapPin className="w-6 h-6" />
                 </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
