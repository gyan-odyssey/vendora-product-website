import { motion } from 'framer-motion';
import { useProductPageStore } from '../store/useProductPageStore';

export function Integrations() {
  const { integrations } = useProductPageStore();

  return (
    <section className="py-24 bg-gray-50" id="integrations">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {integrations.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {integrations.partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-200 hover:border-blue-400 grayscale hover:grayscale-0"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-400 group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
