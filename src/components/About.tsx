import { CheckCircle2, HeartPulse, Ear, HelpCircle, FileText, Clock } from 'lucide-react';

export default function About() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Soft background shape */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-light rounded-full opacity-60 mix-blend-multiply blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Photo */}
        <div className="w-full lg:w-1/2 relative mb-16 md:mb-0 mt-12 lg:mt-0 flex justify-center">
          
          {/* Brush Stroke Background */}
          <div className="absolute -inset-4 md:-inset-8 -z-10">
            <svg className="w-full h-full text-[#e7dbe1]" preserveAspectRatio="none" viewBox="0 0 200 250" fill="currentColor">
              <filter id="roughpaper">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" result="noise" numOctaves="4" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <path filter="url(#roughpaper)" d="M 8 15 C 20 -5, 180 5, 192 15 C 205 25, 195 235, 185 245 C 175 255, 10 250, 5 235 C -5 220, -5 35, 8 15 Z" fill="#e7dbe1" />
            </svg>
          </div>

          <div className="relative rounded-[2.5rem] overflow-hidden z-20 w-[90%] md:w-[85%] shadow-sm">
            <img 
              src="/ananda_blue_smile.jpeg" 
              alt="Dra. Ananda"
              className="w-full h-[450px] md:h-[550px] object-cover object-center"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-6 pt-12 lg:pt-0">
          <div className="space-y-2">
            <h3 className="text-[#364153] tracking-widest text-sm font-semibold">Sobre a Dra. Ananda Carvalho</h3>
            <h2 className="text-3xl md:text-4xl font-serif text-[#a88eac] leading-tight">
              Cuidado especializado para <br/>
              <span className="text-[#543949] uppercase font-bold">adultos e crianças</span>
            </h2>
          </div>

          <p className="text-gray-600 font-light text-lg leading-relaxed">
            Olá! Eu sou a Ananda Carvalho, otorrinolaringologista em São Paulo. 
            Minha missão é proporcionar um atendimento onde o paciente se sinta ouvido 
            e verdadeiramente cuidado, utilizando as melhores práticas médicas.
          </p>

          <div className="space-y-4 pt-4 border-t border-brand-accent/30">
            <h4 className="text-brand-primary font-serif text-xl mb-4">Formação e Experiência</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-light p-2 rounded-full text-brand-secondary shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  <span className="font-medium text-gray-900">Graduação em Medicina</span> pela <span className="font-medium text-gray-900">Escola Bahiana</span> de Medicina e Saúde Pública, conclusão <span className="text-gray-500">(2010 - 2016)</span>.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-light p-2 rounded-full text-brand-secondary shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  <span className="font-medium text-gray-900">Programa de Especialização em Otorrinolaringologia</span> do Instituto de Otorrinolaringologia Otorrinos Associados Ltda – <span className="font-medium text-gray-900">INOOA</span>, autorizado pela <span className="font-medium text-gray-900">ABORL-CCF</span> <span className="text-gray-500">(2017 - 2020)</span>.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-light p-2 rounded-full text-brand-secondary shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  <span className="font-medium text-gray-900">Título de especialista</span> pela Associação Brasileira de Otorrinolaringologia (<span className="font-medium text-gray-900">ABORL</span>).
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-light p-2 rounded-full text-brand-secondary shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  <span className="font-medium text-gray-900">Fellowship em Otorrinolaringologia Pediátrica</span> – <span className="font-medium text-gray-900">UNIFESP</span> <span className="text-gray-500">(2020 - 2021)</span>.
                </p>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
