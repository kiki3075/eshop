export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1 text-sm text-red-300 mb-4">
              🔥 Sezónny výpredaj - zľavy až 40%
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Kvalitné náhradné diely
              <span className="text-red-400 block">pre vaše auto</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Viac ako 500 000 dielov od overených výrobcov. Rýchle doručenie, odborná pomoc a najlepšie ceny na trhu.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-red-600/30"
              >
                Prezrieť produkty
              </a>
              <a
                href="#categories"
                className="border border-gray-500 hover:border-white text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Kategórie dielov
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-lg">✓</span>
                <span>Záruka 2 roky</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-lg">✓</span>
                <span>Doprava od 80€ zadarmo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-lg">✓</span>
                <span>Vrátenie do 30 dní</span>
              </div>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-red-400">500K+</div>
              <div className="text-sm text-gray-400 mt-1">Produktov v ponuke</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-red-400">150+</div>
              <div className="text-sm text-gray-400 mt-1">Značiek aut</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-red-400">50K+</div>
              <div className="text-sm text-gray-400 mt-1">Spokojných zákazníkov</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-red-400">24h</div>
              <div className="text-sm text-gray-400 mt-1">Expresné doručenie</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
