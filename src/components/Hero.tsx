import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { useProductPageStore } from '../store/useProductPageStore';

export function Hero() {
  const { hero } = useProductPageStore();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-blue-900 via-blue-700 to-blue-500">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      {/* Soft radial highlight from the top-left corner flowing downward */}
      <div className="pointer-events-none absolute inset-0 opacity-60 md:opacity-50 bg-[radial-gradient(1200px_1400px_at_0%_0%,rgba(255,255,255,0.35),rgba(255,255,255,0.15)_45%,transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 mb-12 max-w-4xl mx-auto leading-relaxed">
            {hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-300/50 transition-all duration-300 flex items-center gap-2 group"
            >
              {hero.primaryCTA}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/under-development.html"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <FileText size={20} />
              {hero.secondaryCTA}
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-56 md:h-72 bg-gradient-to-b from-transparent via-white/60 to-white"></div>
    </section>
  );
}
