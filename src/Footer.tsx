export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Prihláste sa na odb noviniek</h3>
              <p className="text-red-100 text-sm">Získajte zľavu 5% na prvý nákup!</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Váš email..."
                className="px-4 py-2.5 rounded-lg bg-white/20 border border-white/30 text-white placeholder-red-200 flex-1 md:w-72 focus:outline-none focus:bg-white/30"
              />
              <button className="bg-gray-900 hover:bg-gray-800 px-6 py-2.5 rounded-lg font-medium transition-colors whitespace-nowrap">
                Odoberať
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-red-600 rounded-lg p-1.5">
                <span className="text-xl">🔧</span>
              </div>
              <span className="text-lg font-bold">Auto<span className="text-red-400">Dielne</span>.sk</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sme najväčší online predajca náhradných dielov na Slovensku. Ponúkame originálne aj alternatívne diely od overených výrobcov za najlepšie ceny.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors text-sm">f</a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors text-sm">in</a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors text-sm">yt</a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors text-sm">ig</a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Rýchle odkazy</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-red-400 transition-colors">O nás</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Obchodné podmienky</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Reklamačný poriadok</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Ochrana osobných údajov</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Mapa stránok</a></li>
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Zákaznícky servis</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-red-400 transition-colors">Ako nakupovať</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Doprava a doručenie</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Platobné metódy</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Vrátenie tovaru</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">FAQ - Časté otázky</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Kontaktujte nás</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Kontakt</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Automobilová 12, 821 01 Bratislava</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+421 900 123 456</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>info@autodielne.sk</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Po-Pia: 8:00 - 18:00</span>
              </li>
            </ul>

            {/* Payment methods */}
            <div className="mt-6">
              <h5 className="text-xs text-gray-500 uppercase tracking-wide mb-2">Platobné metódy</h5>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-800 px-2 py-1 rounded text-xs">💳 Visa</span>
                <span className="bg-gray-800 px-2 py-1 rounded text-xs">💳 Mastercard</span>
                <span className="bg-gray-800 px-2 py-1 rounded text-xs">🏦 Prevod</span>
                <span className="bg-gray-800 px-2 py-1 rounded text-xs">📦 Dobierka</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-500">
            <p>© 2024 AutoDielne.sk - Všetky práva vyhradené</p>
            <p>Vytvorené s ❤️ na Slovensku</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
