import { Palette, Sparkles, Instagram, Monitor } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { ProjectModal } from './ProjectModal';
import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const services = [
    {
      id: 'branding',
      title: 'Branding y Diseño',
      description: 'Desarrollo completo de la identidad visual y comunicación de Chicken Juicy.',
      icon: Palette,
      // AQUÍ ESTÁ EL CAMBIO: Apunta a la carpeta public/img
      image: '/img/branding-cover.png', 
      features: [
        'Logo',
        'Packaging',
        'Aplicaciones en food truck',
      ],
      detailImages: [
        '/img/branding-1.png',
        '/img/branding-2.png',
        '/img/branding-3.png'
      ],
      hasDetails: true,
    },
    {
      id: 'identity',
      title: 'Diseño de Marca e Identidad Visual',
      description: 'Creación de identidades visuales únicas y coherentes.',
      icon: Sparkles,
      image: '/img/identity-cover.png',
      features: [
        'Diseño de logotipo',
        'Paleta de colores',
        'Tipografía corporativa',
        'Elementos gráficos',
      ],
      detailImages: [
        '/img/identity-1.png',
        '/img/identity-2.png',
        '/img/identity-3.png'
      ],
      hasDetails: true,
    },
    {
      id: 'social',
      title: 'Contenido Redes Sociales',
      description: 'Diseño de contenido visual atractivo y optimizado.',
      icon: Instagram,
      image: '/img/social-cover.png',
      features: [
        'Posts e historias',
        'Plantillas personalizadas',
        'Calendario de contenido',
        'Animaciones y GIFs',
      ],
      detailImages: [
        '/img/social-1.png',
        '/img/social-2.png',
        '/img/social-3.png'
      ],
      hasDetails: true,
    },
    {
      id: 'web',
      title: 'Diseño Interfaz Web',
      description: 'Interfaces web intuitivas y modernas.',
      icon: Monitor,
      image: '/img/web-cover.png',
      features: [
        'Diseño UI/UX',
        'Prototipos interactivos',
        'Responsive design',
        'Sistemas de diseño',
      ],
      detailImages: [
        '/img/web-1.png',
        '/img/web-2.png'
      ],
      hasDetails: true,
    },
  ];

  const handleCardClick = (service: any) => {
    if (service.hasDetails) {
      setSelectedProject(service);
      setModalOpen(true);
    }
  };

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-[#F5F1E8] to-white relative overflow-hidden">
      {/* Fondo animado 1 */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-[#2563EB]/5 blur-3xl"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Fondo animado 2 */}
      <motion.div
        className="absolute top-1/3 right-10 w-1 h-32 bg-gradient-to-b from-[#2563EB]/30 to-transparent"
        animate={{
          scaleY: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
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
            Proyectos
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Proyectos académicos y ficticios
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
            >
              <ServiceCard 
                service={service}
                onClick={() => handleCardClick(service)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedProject.title}
          description={selectedProject.description}
          images={selectedProject.detailImages || []}
        />
      )}
    </section>
  );
}