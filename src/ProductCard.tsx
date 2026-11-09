import { Product } from './data/products';
import { useCart } from './CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
      {/* Image area */}
      <div className="relative bg-gray-100 p-6 flex items-center justify-center h-44">
        <span className="text-6xl group-hover:scale-110 transition-transform">{product.image}</span>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {discount > 0 && (
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              -{discount}%
            </span>
          )}
          {!product.inStock && (
            <span className="bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">
              Vypredané
            </span>
          )}
        </div>

        {/* Quick add button */}
        {product.inStock && (
          <button
            onClick={() => addToCart(product)}
            className="absolute bottom-3 right-3 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            title="Pridať do košíka"
          >
            🛒
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Brand */}
        <div className="text-xs text-red-600 font-semibold uppercase tracking-wide mb-1">
          {product.brand}
        </div>

        {/* Name */}
        <h3 className="font-medium text-gray-900 text-sm leading-tight mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-yellow-400 text-sm">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Compatible vehicles */}
        <div className="text-xs text-gray-500 mb-3 line-clamp-1">
          ✓ {product.compatible.slice(0, 2).join(', ')}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">
              {product.price.toFixed(2)} €
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">
                {product.originalPrice.toFixed(2)} €
              </span>
            )}
          </div>
        </div>

        {/* Add to cart button */}
        {product.inStock ? (
          <button
            onClick={() => addToCart(product)}
            className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Pridať do košíka
          </button>
        ) : (
          <button
            disabled
            className="w-full mt-3 bg-gray-300 text-gray-500 py-2 rounded-lg text-sm font-medium cursor-not-allowed"
          >
            Nedostupné
          </button>
        )}
      </div>
    </div>
  );
}
