import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useProductPageStore } from '../store/useProductPageStore';

export function Glance() {
  const { glance } = useProductPageStore();

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-sky-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {glance.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {glance.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-3 bg-white p-5 rounded-xl border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={24} />
              <span className="text-gray-700 font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
