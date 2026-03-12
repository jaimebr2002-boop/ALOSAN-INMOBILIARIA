import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Contacto</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Hablemos de su proyecto</h2>
            <p className="text-gray-600 mb-12 text-lg">
              Si tienes un proyecto de turismo rural o una vivienda vacacional, te acompañamos en todo el proceso de forma cercana y profesional.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Teléfono</p>
                  <a href="tel:616040071" className="text-xl font-medium hover:text-accent transition-colors">616 040 071</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Dirección</p>
                  <p className="text-xl font-medium leading-relaxed">C. Río Nonaya, 7, 33850 Cornellana, Asturias</p>
                </div>
              </div>
            </div>

            <form className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-black/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Teléfono</label>
                <input 
                  type="tel" 
                  placeholder="600 000 000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Mensaje</label>
                <textarea 
                  rows={4}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all hover:bg-primary/90">
                Enviar Mensaje
                <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl border-8 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.115668673774!2d-6.159644723414999!3d43.41158506760455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd36bb5bb21b0341%3A0x37e4a360980b92a0!2sAlosan%20Inmobiliaria!5e0!3m2!1ses!2ses!4v1710234567890!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Alosan Inmobiliaria"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
