import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "+5511972562728";
  const getWhatsAppLink = () => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de agendar uma consulta com a Dra. Ananda.`)}`;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 relative z-10 group" aria-label="Início" draggable="false">
          <img src="/favicon_ananda_purple.png" alt="Dra. Ananda Carvalho" className="h-16 md:h-20 w-auto object-contain" draggable="false" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#contato" className="text-brand-primary/80 hover:text-brand-primary text-xs uppercase tracking-[0.15em] font-medium transition-colors" draggable="false">
            Contato
          </a>
          <a href="#servicos" className="text-brand-primary/80 hover:text-brand-primary text-xs uppercase tracking-[0.15em] font-medium transition-colors" draggable="false">
            Serviços
          </a>
          <a href="#localizacao" className="text-brand-primary/80 hover:text-brand-primary text-xs uppercase tracking-[0.15em] font-medium transition-colors" draggable="false">
            Localização
          </a>
          <a 
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            draggable="false"
            className="bg-brand-secondary hover:bg-brand-secondary/90 text-white px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-colors shadow-sm hover:shadow-md"
          >
            Agendamentos
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative z-50 text-brand-primary p-2"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`md:hidden fixed inset-0 bg-brand-light z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center gap-8">
            <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="text-brand-primary text-2xl font-serif transition-colors">Contato</a>
            <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="text-brand-primary text-2xl font-serif transition-colors">Serviços</a>
            <a href="#localizacao" onClick={() => setMobileMenuOpen(false)} className="text-brand-primary text-2xl font-serif transition-colors">Localização</a>
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-brand-secondary hover:bg-brand-secondary/90 text-white px-8 py-4 rounded-full text-lg font-medium tracking-wide shadow-md"
            >
              Agendamentos
            </a>
          </div>
        </div>

      </div>
    </header>
  )
}
