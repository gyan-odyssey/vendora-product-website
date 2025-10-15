import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { useProductPageStore } from '../store/useProductPageStore';

export function CTA() {
  const { cta } = useProductPageStore();

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {cta.title}
            </h2>
            <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto">
              {cta.description}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-300/50 transition-all duration-300 flex items-center gap-3 mx-auto group"
            >
              {cta.buttonText}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </motion.button>

            <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-center gap-8 text-blue-50">
              <a
                href={cta.docs}
                className="flex items-center gap-2 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={20} />
                <span>Documentation</span>
              </a>
              <a
                href={`mailto:${cta.support}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>{cta.support}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
