import { useState } from 'react';
import { useCart } from './CartContext';

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="bg-red-600 text-white text-sm py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>📞 +421 900 123 456 | ✉️ info@autodielne.sk</span>
          <span className="hidden md:block">🚚 Doprava zadarmo od 80€ | ⚡ Expresné doručenie do 24h</span>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-red-600 rounded-lg p-2">
              <span className="text-2xl">🔧</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                Auto<span className="text-red-500">Dielne</span>.sk
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block">Náhradné diely pre vaše auto</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Hľadať diely podľa názvu, značky alebo modelu..."
                className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-md transition-colors">
                Hľadať
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <span>👤</span>
              <span className="text-sm">Môj účet</span>
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
            >
              <span>🛒</span>
              <span className="hidden sm:inline text-sm font-medium">Košík</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className="md:hidden text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block mt-4 border-t border-gray-700 pt-3">
          <ul className="flex items-center gap-6 text-sm">
            <li><a href="#" className="hover:text-red-400 transition-colors font-medium">Úvod</a></li>
            <li><a href="#categories" className="hover:text-red-400 transition-colors">Kategórie</a></li>
            <li><a href="#products" className="hover:text-red-400 transition-colors">Produkty</a></li>
            <li><a href="#" className="hover:text-red-400 transition-colors">Výpredaj</a></li>
            <li><a href="#" className="hover:text-red-400 transition-colors">Novinky</a></li>
            <li><a href="#" className="hover:text-red-400 transition-colors">Kontakt</a></li>
            <li className="ml-auto"><a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">🏷️ Zľavy až -40%</a></li>
          </ul>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-700 pt-3">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Hľadať diely..."
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="block py-2 hover:text-red-400">Úvod</a></li>
              <li><a href="#categories" className="block py-2 hover:text-red-400">Kategórie</a></li>
              <li><a href="#products" className="block py-2 hover:text-red-400">Produkty</a></li>
              <li><a href="#" className="block py-2 hover:text-red-400">Výpredaj</a></li>
              <li><a href="#" className="block py-2 hover:text-red-400">Kontakt</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
