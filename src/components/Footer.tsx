import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#412E38] text-brand-light py-16 text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-8 flex flex-col items-center">
          <img src="/Logo_Ananda_No_Bg.png" alt="Dra. Ananda Carvalho" className="h-24 w-auto object-contain mb-8 rounded-lg filter brightness-0 invert opacity-90" draggable="false" />
        </div>

        <div className="text-white/50 text-sm font-light space-y-2">
          <p>© 2026 Todos os direitos reservados</p>
          <p>Dra. Ananda Carvalho | Otorrinolaringologista</p>
          <p>São Paulo - SP</p>
        </div>
      </div>
    </footer>
  );
}
