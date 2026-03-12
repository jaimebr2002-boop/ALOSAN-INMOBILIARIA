import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Facebook, Instagram } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="inicio" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop"
          alt="Paisaje Asturias"
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-4 leading-tight">
            Alosan
            <span className="block text-accent text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.4em] mt-2 font-sans font-bold">Inmobiliaria</span>
          </h1>
          <h2 className="text-xl md:text-3xl font-serif mb-8 text-white/90">
            Encuentra tu próxima vivienda o saca el máximo rendimiento a tu propiedad
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Te ayudamos a comprar, vender o gestionar tu vivienda o alojamiento rural con un servicio profesional y cercano en Asturias.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#propiedades"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 bg-accent text-white rounded-full font-medium flex items-center justify-center gap-2 transition-colors hover:bg-accent/90"
            >
              Ver propiedades
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium transition-all hover:bg-white/20"
            >
              Contactar
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Social Media Links & Scroll Indicator - Bottom Middle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 z-20"
      >
        <div className="flex items-center gap-6">
          <a 
            href="https://www.facebook.com/people/Alosan-Inmobiliaria/61587104609225/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-accent transition-all hover:scale-110"
          >
            <Facebook size={22} />
          </a>
          <a 
            href="https://www.instagram.com/alosan_inmobiliaria/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-accent transition-all hover:scale-110"
          >
            <Instagram size={22} />
          </a>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Descubrir</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
