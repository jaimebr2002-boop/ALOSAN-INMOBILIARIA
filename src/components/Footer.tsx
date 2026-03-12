import { Facebook, Instagram, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#inicio" className="flex flex-col">
              <span className="text-3xl font-serif font-bold tracking-tight">ALOSAN</span>
              <span className="text-xs uppercase tracking-[0.3em] -mt-1 text-accent">Inmobiliaria</span>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Especialistas en la compra, venta y gestión de viviendas y alojamientos rurales en Asturias. Trato cercano y profesional.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/people/Alosan-Inmobiliaria/61587104609225/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/alosan_inmobiliaria/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#inicio" className="hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#sobre-nosotros" className="hover:text-accent transition-colors">Sobre Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Servicios</a></li>
              <li><a href="#propiedades" className="hover:text-accent transition-colors">Propiedades</a></li>
              <li><a href="#contacto" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif mb-6">Contacto</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-1" />
                <span>C. Río Nonaya, 7, 33850 Cornellana, Asturias</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:616040071" className="hover:text-accent transition-colors">616 040 071</a>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="text-lg font-serif mb-6">¿Buscas vender?</h4>
            <p className="text-gray-400 mb-6">
              Te ayudamos a sacar el máximo rendimiento a tu propiedad.
            </p>
            <a 
              href="#contacto" 
              className="inline-block w-full py-3 bg-accent text-white text-center rounded-xl font-medium hover:bg-accent/90 transition-colors"
            >
              Valorar mi propiedad
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Alosan Inmobiliaria. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
