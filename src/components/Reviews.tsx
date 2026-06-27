import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    name: "Ana Silva",
    text: "Excelente atendimento! A Dra. Ananda é extremamente atenciosa e explicou tudo com muita clareza. Me senti muito segura durante toda a consulta.",
    rating: 5,
    date: "há 2 semanas"
  },
  {
    name: "João Pereira",
    text: "Profissional impecável. Levei meu filho para uma avaliação e ela foi muito paciente e cuidadosa. Recomendo fortemente para quem busca um otorrino de confiança.",
    rating: 5,
    date: "há 1 mês"
  },
  {
    name: "Mariana Costa",
    text: "A clínica é linda e o atendimento é pontual. O tratamento para minha rinite está dando ótimos resultados. Muito satisfeita!",
    rating: 5,
    date: "há 3 semanas"
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-brand-light rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-brand-light rounded-full blur-3xl opacity-50 -z-10" />

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-brand-secondary font-sans uppercase tracking-widest text-sm font-semibold mb-2">
            Depoimentos
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif text-brand-primary font-bold">
            O que dizem os pacientes
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-brand-light/30 p-8 rounded-[2.5rem] relative flex flex-col justify-between border border-brand-light"
            >
              <Quote className="absolute top-6 right-8 text-brand-secondary/20 w-12 h-12" />
              
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-secondary text-brand-secondary" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-brand-primary text-lg">
                  {review.name}
                </h4>
                <p className="text-gray-500 text-xs mt-1">
                  {review.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://www.google.com/search?q=Dra.+Ananda+Carvalho+Otorrinolaringologista" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-secondary font-medium hover:underline transition-all"
          >
            <span>Ver todas as avaliações no Google</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
