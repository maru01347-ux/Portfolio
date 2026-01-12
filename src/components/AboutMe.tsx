import { Palette, Lightbulb, Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: Palette,
      title: 'Diseño creativo',
      description: 'Creación de identidades visuales únicas y memorables'
    },
    {
      icon: Lightbulb,
      title: 'Soluciones innovadoras',
      description: 'Enfoque fresco y moderno en cada proyecto'
    },
    {
      icon: Heart,
      title: 'Pasión por el detalle',
      description: 'Atención meticulosa en cada elemento visual'
    },
    {
      icon: Sparkles,
      title: 'Experiencia completa',
      description: 'Desde branding hasta diseño digital'
    }
  ];

  const badges = ['Branding', 'Identidad Visual', 'Diseño Web', 'Social Media'];

  return (
    <section id="sobre-mi" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#2563EB]/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
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
            Sobre mí
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Diseñador gráfico apasionado por crear experiencias visuales impactantes
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Soy un joven creativo interesado en social media y branding, actualmente finalizando un grado superior de Marketing y Publicidad. Soy una persona proactiva que disfruta conectar con el público aplicando creatividad y estrategia para generar impacto real. Me motiva transformar ideas en contenido con personalidad y construir marcas auténticas.
            </p>
            <div className="flex flex-wrap gap-3">
              {badges.map((badge, index) => (
                <motion.span
                  key={badge}
                  className="px-4 py-2 bg-blue-50 text-[#2563EB] rounded-full border border-[#2563EB] cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)"
                  }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-[#F5F1E8] to-white p-6 rounded-2xl border-2 border-gray-200 relative overflow-hidden group cursor-default"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    borderColor: "#2563EB",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="bg-[#2563EB] w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative z-10"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="text-white" size={24} />
                  </motion.div>
                  <h3 className="text-gray-900 mb-2 relative z-10">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-600 relative z-10">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
