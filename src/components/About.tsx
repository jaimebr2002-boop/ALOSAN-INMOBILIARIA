import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="sobre-nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
                alt="Alosan Inmobiliaria Office"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-white font-serif text-3xl font-bold">Asturias</p>
              <p className="text-white/80 text-sm uppercase tracking-widest">Turismo Rural</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Nuestra Historia</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Sobre Alosan Inmobiliaria</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Somos una inmobiliaria ubicada en Cornellana especializada en la compra, venta y gestión de viviendas y alojamientos rurales.
              </p>
              <p>
                Nuestro objetivo es ayudar a propietarios y compradores a encontrar las mejores oportunidades, ofreciendo un servicio cercano, transparente y profesional.
              </p>
              <p>
                También ayudamos a propietarios de alojamientos rurales y viviendas vacacionales a mejorar su visibilidad y rentabilidad mediante fotografía profesional, vídeo y gestión de redes sociales.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-serif font-bold text-primary mb-1">Cercanía</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Trato Personalizado</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-primary mb-1">Calidad</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Gestión Integral</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
