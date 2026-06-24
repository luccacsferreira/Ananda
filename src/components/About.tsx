import { CheckCircle2, HeartPulse, Ear, HelpCircle, FileText, Clock } from 'lucide-react';

export default function About() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Soft background shape */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-light rounded-full opacity-60 mix-blend-multiply blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Photo */}
        <div className="w-full lg:w-1/2 relative mb-16 md:mb-0 mt-8">
          <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-10 w-full md:w-[75%] ml-auto md:mr-12">
            <img 
              src="/ananda_blue_smile.jpeg" 
              alt="Dra. Ananda"
              className="w-full h-[400px] object-cover object-center"
            />
          </div>
          
          <div className="absolute -bottom-16 left-0 md:left-4 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20 w-[65%] md:w-[55%]">
             <img 
              src="/Ananda Congresso.jpeg" 
              alt="Dra. Ananda no Congresso"
              className="w-full h-[240px] object-cover object-center"
            />
          </div>

          <div className="absolute -top-12 left-8 md:left-12 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-20 w-[45%] md:w-[40%]">
             <img 
              src="/ananda_smiling_lookaway.jpeg" 
              alt="Dra. Ananda"
              className="w-full h-[200px] object-cover object-center"
            />
          </div>

          {/* Decorative frame elements behind picture */}
          <div className="absolute -bottom-6 right-0 md:right-8 w-full md:w-[75%] h-[400px] rounded-[2rem] bg-brand-light z-0"></div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-6 pt-12 lg:pt-0">
          <div className="space-y-2">
            <h3 className="text-brand-secondary uppercase tracking-widest text-sm font-semibold">Sobre a Dra. Ananda Carvalho</h3>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-primary leading-tight">
              Cuidado especializado para <br/>
              <span className="text-brand-secondary/80">adultos e crianças</span>
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
                <p className="text-sm text-gray-700 font-medium leading-relaxed">
                  Graduação em Medicina pela Escola Bahiana de Medicina e Saúde Pública <span className="text-gray-500 font-light">(2010 - 2016)</span>.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-light p-2 rounded-full text-brand-secondary shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <p className="text-sm text-gray-700 font-medium leading-relaxed">
                  Especialização em Otorrinolaringologia pelo INOOA <span className="text-gray-500 font-light">(Instituto de Otorrinolaringologia Otorrinos Associados)</span>, autorizado pela ABORL-CCF <span className="text-gray-500 font-light">(2017 - 2020)</span>.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-light p-2 rounded-full text-brand-secondary shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <p className="text-sm text-gray-700 font-medium leading-relaxed">
                  Fellowship em Otorrinolaringologia Pediátrica pela UNIFESP <span className="text-gray-500 font-light">(2020 - 2021)</span>.
                </p>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
