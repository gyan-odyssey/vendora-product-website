import { useProductPageStore } from '../store/useProductPageStore';

export function Footer() {
  const { footer } = useProductPageStore();

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2">Vendora</div>
            <p className="text-blue-200">{footer.email}</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-8">
            {footer.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-blue-200 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
