import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: '1',
    name: "María García",
    comment: "Muy profesionales y cercanos. Nos ayudaron durante todo el proceso de compra de nuestra vivienda.",
    rating: 5,
    photo: "https://i.pravatar.cc/150?u=maria",
  },
  {
    id: '2',
    name: "Juan Pérez",
    comment: "Gran servicio y atención. Muy recomendables para gestionar alojamientos rurales.",
    rating: 5,
    photo: "https://i.pravatar.cc/150?u=juan",
  },
  {
    id: '3',
    name: "Elena Rodríguez",
    comment: "La fotografía profesional que hicieron de mi casa vacacional marcó la diferencia en las reservas.",
    rating: 5,
    photo: "https://i.pravatar.cc/150?u=elena",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Testimonios</span>
          <h2 className="text-4xl md:text-5xl font-serif">Lo que dicen nuestros clientes</h2>
        </div>

        <div className="relative max-w-4xl mx-auto h-[350px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center text-center"
            >
              <Quote size={60} className="text-accent/20 mb-8" />
              <div className="flex gap-1 mb-6">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-serif italic mb-8 leading-relaxed">
                "{reviews[currentIndex].comment}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={reviews[currentIndex].photo}
                  alt={reviews[currentIndex].name}
                  className="w-14 h-14 rounded-full border-2 border-accent"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <p className="font-bold text-lg">{reviews[currentIndex].name}</p>
                  <p className="text-accent text-sm uppercase tracking-widest">Cliente Satisfecho</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-accent w-8' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
