import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Bed, Maximize, X, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const properties = [
  {
    id: '1',
    title: 'Vivienda en La Arquera (Salas)',
    image: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773333634/642499618_17867516364569422_2876021224577984728_n._rifulk.jpg',
    price: '67.500 €',
    location: 'La Arquera, Salas',
    beds: 3,
    sqm: 195,
    description: 'Se vende casa en La Arquera, concejo de Salas, en un entorno tranquilo y rural, ideal tanto como vivienda habitual como para proyecto de rehabilitación o segunda residencia. La vivienda cuenta con 195 m² construidos y parcela de 200 m², ofreciendo múltiples posibilidades de distribución y mejora.',
    features: ['Instalaciones de agua y luz existentes', 'Acceso rodado', 'Entorno natural', 'Buena conexión con Salas'],
    gallery: [
      'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773333634/642499618_17867516364569422_2876021224577984728_n._rifulk.jpg',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '2',
    title: 'Bajo Comercial + Primera Planta',
    image: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773333634/624440237_17863552914569422_5621395619029972574_n._gojk5n.jpg',
    price: 'A consultar',
    location: 'Casco histórico, Grado',
    beds: 4,
    sqm: 267,
    description: 'Excelente oportunidad en el casco histórico de Grado. Se vende conjunto de bajo comercial y primera planta. Ubicado en la Calle Julio César Estrada, 5. Ideal para emprendedores o inversores que busquen una ubicación céntrica y con gran visibilidad.',
    features: ['Bajo comercial: 112 m²', 'Primera planta: 155 m²', 'Instalaciones existentes', 'Zona céntrica', 'A pie de calle'],
    gallery: [
      'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773333634/624440237_17863552914569422_5621395619029972574_n._gojk5n.jpg',
      'https://images.unsplash.com/photo-1582408921715-18e7806365c1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: '3',
    title: 'VIVIENDA / CASA',
    image: 'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773333633/623384584_17863141872569422_3731028935119147847_n._xgm4p3.jpg',
    price: '67.500 €',
    location: 'La Arquera, Salas',
    beds: 3,
    sqm: 195,
    description: 'Casa tradicional asturiana en La Arquera, Salas. Una propiedad con carácter y muchas posibilidades de reforma. Cuenta con agua y luz, y un excelente acceso rodado.',
    features: ['Vivienda: 195 m²', 'Parcela: 200 m²', 'Servicios de agua y luz', 'Acceso rodado'],
    gallery: [
      'https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773333633/623384584_17863141872569422_3731028935119147847_n._xgm4p3.jpg',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop'
    ]
  },
];

export default function Properties() {
  const [selectedProperty, setSelectedProperty] = useState<typeof properties[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProperty.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProperty.gallery.length) % selectedProperty.gallery.length);
    }
  };

  return (
    <section id="propiedades" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Catálogo</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Propiedades Destacadas</h2>
            <p className="text-gray-600 text-lg">
              Descubra nuestra selección exclusiva de viviendas y alojamientos rurales en el corazón de Asturias.
            </p>
          </div>
          <a href="#contacto" className="text-primary font-medium flex items-center gap-2 group border-b border-primary pb-1 transition-all hover:text-accent hover:border-accent">
            Ver todas las propiedades
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-primary shadow-sm">
                  {property.price}
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex items-center gap-1 text-accent text-xs uppercase tracking-widest mb-2">
                  <MapPin size={14} />
                  {property.location}
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors">{property.title}</h3>
                
                <div className="flex items-center gap-6 text-gray-500 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <Bed size={18} />
                    <span>{property.beds} Hab.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize size={18} />
                    <span>{property.sqm} m²</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    setSelectedProperty(property);
                    setCurrentImageIndex(0);
                  }}
                  className="w-full py-3 border border-primary/20 rounded-xl font-medium transition-all hover:bg-primary hover:text-white hover:border-primary"
                >
                  Ver detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Property Details Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProperty(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col lg:flex-row"
            >
              <button 
                onClick={() => setSelectedProperty(null)}
                className="absolute top-6 right-6 z-50 p-2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full text-white lg:text-primary lg:bg-gray-100 lg:hover:bg-gray-200 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Gallery Section */}
              <div className="relative w-full lg:w-3/5 h-[300px] lg:h-auto bg-black flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={selectedProperty.gallery[currentImageIndex]}
                    alt={`${selectedProperty.title} - ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="p-2 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full text-white transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="p-2 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full text-white transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProperty.gallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Info Section */}
              <div className="w-full lg:w-2/5 p-8 lg:p-12 overflow-y-auto">
                <div className="flex items-center gap-2 text-accent text-xs uppercase tracking-widest mb-4">
                  <MapPin size={14} />
                  {selectedProperty.location}
                </div>
                <h3 className="text-3xl font-serif mb-2">{selectedProperty.title}</h3>
                <p className="text-2xl font-bold text-primary mb-8">{selectedProperty.price}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-3">
                    <Bed className="text-accent" size={20} />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Habitaciones</p>
                      <p className="font-bold">{selectedProperty.beds}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-3">
                    <Maximize className="text-accent" size={20} />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Superficie</p>
                      <p className="font-bold">{selectedProperty.sqm} m²</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm uppercase tracking-widest font-bold mb-4 text-primary">Descripción</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProperty.description}
                  </p>
                </div>

                <div className="mb-10">
                  <h4 className="text-sm uppercase tracking-widest font-bold mb-4 text-primary">Características</h4>
                  <ul className="space-y-3">
                    {selectedProperty.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-600">
                        <CheckCircle2 className="text-accent" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#contacto"
                  onClick={() => setSelectedProperty(null)}
                  className="block w-full py-4 bg-primary text-white text-center rounded-xl font-bold hover:bg-accent transition-colors shadow-lg shadow-primary/20"
                >
                  Solicitar información
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
