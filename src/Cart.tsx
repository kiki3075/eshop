import { useCart } from './CartContext';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-900 text-white">
          <h2 className="text-lg font-bold flex items-center gap-2">
            🛒 Nákupný košík
            {items.length > 0 && (
              <span className="bg-red-600 text-xs px-2 py-0.5 rounded-full">
                {items.length} položiek
              </span>
            )}
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-300 hover:text-white text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-gray-700">Košík je prázdny</h3>
              <p className="text-gray-500 mt-2 text-sm">Pridajte si produkty z našej ponuky</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm transition-colors"
              >
                Pokračovať v nákupe
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-3 bg-gray-50 rounded-lg p-3">
                  <div className="bg-white rounded-lg p-2 flex items-center justify-center w-16 h-16 border">
                    <span className="text-2xl">{item.image}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.brand}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-200"
                        >
                          −
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-bold text-gray-900">
                        {(item.price * item.quantity).toFixed(2)} €
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-600 text-sm self-start"
                    title="Odstrániť"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-4 bg-gray-50">
            {/* Summary */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Medzisúčet:</span>
                <span>{totalPrice.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Doprava:</span>
                <span className={totalPrice >= 80 ? 'text-green-600 font-medium' : ''}>
                  {totalPrice >= 80 ? 'Zadarmo' : '4.99 €'}
                </span>
              </div>
              {totalPrice < 80 && (
                <div className="text-xs text-gray-500 bg-yellow-50 border border-yellow-200 rounded p-2">
                  🚚 Pridajte ešte za {(80 - totalPrice).toFixed(2)} € a dopravu máte zadarmo!
                </div>
              )}
              <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t">
                <span>Celkom:</span>
                <span>{(totalPrice + (totalPrice >= 80 ? 0 : 4.99)).toFixed(2)} €</span>
              </div>
            </div>

            {/* Actions */}
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors">
              Pokračovať k pokladni
            </button>
            <button
              onClick={clearCart}
              className="w-full mt-2 text-gray-500 hover:text-red-600 py-2 text-sm transition-colors"
            >
              Vymazať košík
            </button>
          </div>
        )}
      </div>
    </>
  );
}
