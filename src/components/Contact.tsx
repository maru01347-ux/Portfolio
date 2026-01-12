import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'maru01347@gmail.com'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+34 123 456 789'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Castellón de la plana'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-white to-[#F5F1E8] relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#2563EB]/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contacto
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Estoy disponible para nuevos proyectos y colaboraciones
          </motion.p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl p-8 border border-gray-200 relative overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
            }}
          >
            {/* Animated gradient overlay on hover */}
            <motion.div
              className="absolute inset-0 opacity-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at top right, rgba(37, 99, 235, 0.05), transparent 60%)",
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="space-y-6 relative z-10">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 8 }}
                  >
                    <motion.div 
                      className="bg-[#2563EB] p-3 rounded-xl shadow-md"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 5,
                        boxShadow: "0 10px 20px rgba(37, 99, 235, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="text-white" size={24} />
                    </motion.div>
                    <div>
                      <p className="text-gray-900">{item.label}</p>
                      <motion.p 
                        className="text-gray-600"
                        whileHover={{ color: "#2563EB" }}
                      >
                        {item.value}
                      </motion.p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-gray-300 relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="text-center text-gray-600">
          <p>© 2024 Portfolio. Todos los derechos reservados.</p>
        </div>
      </motion.div>
    </section>
  );
}
