export default function Features() {
  const features = [
    {
      icon: '🚚',
      title: 'Rýchla doprava',
      description: 'Doručenie do 24 hodín. Doprava zadarmo pri objednávkach nad 80€.',
    },
    {
      icon: '🛡️',
      title: 'Záruka kvality',
      description: '2-ročná záruka na všetky diely. Len originálne a certifikované produkty.',
    },
    {
      icon: '💬',
      title: 'Odborná pomoc',
      description: 'Náš tím odborníkov vám poradí s výberom správnych dielov pre vaše auto.',
    },
    {
      icon: '↩️',
      title: 'Jednoduché vrátenie',
      description: 'Nesedí vám diel? Vráťte ho do 30 dní bez udania dôvodu.',
    },
  ];

  return (
    <section className="py-12 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
