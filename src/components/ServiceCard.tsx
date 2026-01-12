import { LucideIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
  hasDetails?: boolean;
}

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

export function ServiceCard({ service, onClick }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div 
      className={`group bg-white rounded-2xl overflow-hidden border-2 border-gray-200 relative ${ 
        service.hasDetails ? 'cursor-pointer' : ''
      }`}
      onClick={onClick}
      whileHover={{ 
        y: -12,
        borderColor: "#2563EB",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Animated Glow Effect on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(37, 99, 235, 0.15), transparent 70%)",
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative h-64 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        >
          <ImageWithFallback
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {service.hasDetails && (
          <motion.div 
            className="absolute inset-0 bg-black/0 flex items-center justify-center"
            whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="bg-[#2563EB] rounded-full p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Eye className="text-white" size={24} />
            </motion.div>
          </motion.div>
        )}
        
        <div className="absolute bottom-6 left-6 flex items-center gap-3">
          <motion.div 
            className="bg-white p-3 rounded-xl shadow-lg"
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="text-[#2563EB]" size={24} />
          </motion.div>
          <h3 className="text-2xl text-white">
            {service.title}
          </h3>
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        <p className="text-gray-600 mb-6">
          {service.description}
        </p>
        
        <div className="space-y-2">
          {service.features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-1.5 h-1.5 bg-[#2563EB] rounded-full"
                whileHover={{ scale: 2 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>
        
        {service.hasDetails && (
          <motion.div 
            className="mt-6 pt-4 border-t border-gray-200"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-[#2563EB] group-hover:underline flex items-center gap-1">
              Ver proyecto completo 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
