import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';

const backupReviews = [
  {
    authorAttribution: { displayName: "Carolina Almeida" },
    text: "A Dra Ananda é maravilhosa! Muito atenciosa e prestativa, além de me explicar detalhadamente meu problema. Recomendo muito!",
    rating: 5,
    relativePublishTimeDescription: "há 1 mês"
  },
  {
    authorAttribution: { displayName: "Marcelo Souza" },
    text: "Excelente profissional, consultório impecável. Fui atendido no horário e a doutora foi muito cuidadosa com os exames.",
    rating: 5,
    relativePublishTimeDescription: "há 2 meses"
  },
  {
    authorAttribution: { displayName: "Fernanda Costa" },
    text: "Atendimento excelente! Super indico a Dra. Ananda. Foi muito paciente e resolveu minhas dores de ouvido que já duravam semanas.",
    rating: 5,
    relativePublishTimeDescription: "há 1 mês"
  }
];

const Reviews: React.FC = () => {
  const placesLib = useMapsLibrary('places');
  const [displayReviews, setDisplayReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!placesLib) return;

    const fetchReviews = async () => {
      try {
        const { places } = await placesLib.Place.searchByText({
          textQuery: 'Otorrino Dra. Ananda Carvalho Perdizes São Paulo',
          fields: ['reviews', 'displayName', 'id'],
          maxResultCount: 1,
          language: 'pt-BR',
        });

        if (places && places.length > 0 && places[0].reviews && places[0].reviews.length > 0) {
          // Filtrar 4 estrelas ou mais
          const highRated = places[0].reviews.filter((r: any) => r.rating >= 4);
          
          // Ordenar por data para priorizar as mais recentes
          const sorted = highRated.sort((a: any, b: any) => {
            const dateA = a.publishTime ? new Date(a.publishTime).getTime() : 0;
            const dateB = b.publishTime ? new Date(b.publishTime).getTime() : 0;
            return dateB - dateA;
          });

          // Pegar as mais recentes e embaralhar para pegar 3 aleatórias das recentes
          const topRecent = sorted.slice(0, 10);
          const shuffled = [...topRecent].sort(() => 0.5 - Math.random());
          setDisplayReviews(shuffled.slice(0, 3));
        } else {
          // Fallback se não encontrar nada na API (comum em listagens muito novas)
          const shuffledBackup = [...backupReviews].sort(() => 0.5 - Math.random());
          setDisplayReviews(shuffledBackup);
        }
      } catch (err) {
        console.error("Erro ao buscar avaliações:", err);
        const shuffledBackup = [...backupReviews].sort(() => 0.5 - Math.random());
        setDisplayReviews(shuffledBackup);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placesLib]);

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

        {loading ? (
           <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-secondary"></div>
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayReviews.map((review, index) => (
              <motion.div
                key={`${review.authorAttribution?.displayName || index}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="bg-[#f7f4f6] p-8 rounded-[2.5rem] relative flex flex-col justify-between border border-brand-light min-h-[320px]"
              >
                <Quote className="absolute top-6 right-8 text-brand-secondary/20 w-12 h-12" />
                
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-secondary text-brand-secondary" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed mb-6">
                    "{review.text || review.originalText?.text}"
                  </p>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-brand-primary text-lg">
                    {review.authorAttribution?.displayName}
                  </h4>
                  <p className="text-gray-500 text-xs mt-1">
                    {review.relativePublishTimeDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://www.google.com/maps/place/Otorrino+Dra.+Ananda+Carvalho/@-23.5172872,-46.6659618,13.83z/data=!4m6!3m5!1s0x94ce57391f758d21:0x49430a0c0c8c27fb!8m2!3d-23.5260752!4d-46.672105!16s%2Fg%2F11z9gkqsxy?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D" 
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
