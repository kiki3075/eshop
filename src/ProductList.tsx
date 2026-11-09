import { useState, useMemo } from 'react';
import { products } from './data/products';
import ProductCard from './ProductCard';

interface ProductListProps {
  selectedCategory: string;
}

export default function ProductList({ selectedCategory }: ProductListProps) {
  const [sortBy, setSortBy] = useState('name');
  const [brandFilter, setBrandFilter] = useState('');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by brand
    if (brandFilter) {
      result = result.filter(p => p.brand === brandFilter);
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [selectedCategory, sortBy, brandFilter]);

  const brands = [...new Set(products.map(p => p.brand))].sort();

  return (
    <section id="products" className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {selectedCategory ? 'Náhradné diely' : 'Všetky produkty'}
          </h2>
          <p className="text-gray-600 mt-2">
            {filteredProducts.length} produktov {selectedCategory ? 'v tejto kategórii' : 'v ponuke'}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 items-center justify-between bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex flex-wrap gap-3">
            <div>
              <label className="text-xs text-gray-500 block mb-1">Zoradiť podľa</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-500"
              >
                <option value="name">Názvu</option>
                <option value="price-asc">Ceny (najnižšia)</option>
                <option value="price-desc">Ceny (najvyššia)</option>
                <option value="rating">Hodnotenia</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Značka</label>
              <select
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-red-500"
              >
                <option value="">Všetky značky</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            Zobrazených <span className="font-semibold text-gray-800">{filteredProducts.length}</span> produktov
          </div>
        </div>

        {/* Products grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700">Žiadne produkty</h3>
            <p className="text-gray-500 mt-2">Skúste zmeniť filtre alebo kategóriu</p>
          </div>
        )}
      </div>
    </section>
  );
}
