/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // Very smooth deceleration (inertia)
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links for smooth scrolling with Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        const id = anchor.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, { offset: -80 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="font-sans text-[#333333] selection:bg-[#A88FAC] selection:text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
