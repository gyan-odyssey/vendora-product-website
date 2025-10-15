import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`text-2xl font-bold ${
              isScrolled
                ? 'bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent'
                : 'text-white'
            }`}>
              Vendora
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className={`${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-white/80'
              } transition-colors font-medium`}
            >
              Features
            </a>
            <a
              href="#integrations"
              className={`${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-white/80'
              } transition-colors font-medium`}
            >
              Integrations
            </a>
            <button
              className={`${
                isScrolled
                  ? 'px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50'
                  : 'px-6 py-2 border-2 border-white text-white rounded-lg bg-transparent hover:bg-white/10'
              } transition-all duration-300 font-medium`}
            >
              Request Demo
            </button>
            <a
              href="#contact"
              className={`${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-white/80'
              } transition-colors font-medium`}
            >
              Contact
            </a>
          </nav>

          <button
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="#features"
              className={`${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-white/80'
              } transition-colors font-medium`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#integrations"
              className={`${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-white/80'
              } transition-colors font-medium`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Integrations
            </a>
            <button
              className={`${
                isScrolled
                  ? 'px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                  : 'px-6 py-2 border-2 border-white text-white bg-transparent'
              } rounded-lg font-medium text-left`}
            >
              Request Demo
            </button>
            <a
              href="#contact"
              className={`${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-white/80'
              } transition-colors font-medium`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
