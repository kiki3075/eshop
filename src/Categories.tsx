import { categories } from './data/products';

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export default function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  return (
    <section id="categories" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Kategórie náhradných dielov</h2>
          <p className="text-gray-600 mt-2">Vyberte si z našej širokej ponuky kategórií</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <button
            onClick={() => onSelectCategory('')}
            className={`p-4 rounded-xl border-2 transition-all text-center ${
              selectedCategory === ''
                ? 'border-red-500 bg-red-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-red-300 hover:shadow-sm'
            }`}
          >
            <div className="text-3xl mb-2">🏠</div>
            <div className="text-sm font-medium text-gray-800">Všetky diely</div>
            <div className="text-xs text-gray-500 mt-1">Zobraziť všetko</div>
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`p-4 rounded-xl border-2 transition-all text-center ${
                selectedCategory === cat.id
                  ? 'border-red-500 bg-red-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-red-300 hover:shadow-sm'
              }`}
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <div className="text-sm font-medium text-gray-800">{cat.name}</div>
              <div className="text-xs text-gray-500 mt-1">{cat.count} produktov</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
