import { useState } from 'react';
import { CartProvider } from './CartContext';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Categories from './Categories';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

function AppContent() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Categories
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <ProductList selectedCategory={selectedCategory} />
      </main>
      <Footer />
      <Cart />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
