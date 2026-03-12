import { motion } from 'motion/react';
import { Home, Tag, Hotel, Camera, Share2 } from 'lucide-react';

const services = [
  {
    title: "Compra de viviendas",
    description: "Ayudamos a encontrar la propiedad ideal.",
    icon: <Home className="text-accent" size={32} />,
  },
  {
    title: "Venta de propiedades",
    description: "Te ayudamos a vender tu vivienda al mejor precio.",
    icon: <Tag className="text-accent" size={32} />,
  },
  {
    title: "Gestión de alojamientos rurales",
    description: "Gestionamos alojamientos turísticos para mejorar su rentabilidad.",
    icon: <Hotel className="text-accent" size={32} />,
  },
  {
    title: "Fotografía y vídeo profesional",
    description: "Creamos contenido visual profesional para destacar cada propiedad.",
    icon: <Camera className="text-accent" size={32} />,
  },
  {
    title: "Gestión de redes sociales",
    description: "Mejoramos la visibilidad online de alojamientos y viviendas.",
    icon: <Share2 className="text-accent" size={32} />,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Nuestros Servicios</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Soluciones Inmobiliarias Integrales</h2>
          <p className="text-gray-600 text-lg">
            Ofrecemos una amplia gama de servicios diseñados para maximizar el valor de su propiedad y facilitar su experiencia inmobiliaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
