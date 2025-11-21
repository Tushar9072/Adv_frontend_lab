import React, { createContext, useState, useContext } from 'react';

// --- 1. Create Cart Context ---
const CartContext = createContext();

// --- 2. Create CartProvider Component ---
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart (or increase quantity if it already exists)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove item completely
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update quantity (remove if quantity becomes 0)
  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) => 
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(0, item.quantity + delta) };
        }
        return item;
      }).filter(item => item.quantity > 0)
    );
  };

  // Computed values
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// --- 3. Components ---

// Product List Component
const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Wireless Headphones', price: 99, color: 'bg-red-100 text-red-600' },
    { id: 2, name: 'Smart Watch', price: 199, color: 'bg-blue-100 text-blue-600' },
    { id: 3, name: 'Mechanical Keyboard', price: 149, color: 'bg-purple-100 text-purple-600' },
    { id: 4, name: 'Ergonomic Mouse', price: 59, color: 'bg-green-100 text-green-600' },
  ];

  return (
    <div className="w-full md:w-2/3 p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className={`h-32 rounded-lg ${product.color} flex items-center justify-center mb-4`}>
                {/* Placeholder Icon based on name */}
                <span className="font-bold text-4xl">{product.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-500 mt-1">${product.price}</p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Cart Sidebar Component
const CartSidebar = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useContext(CartContext);

  return (
    <div className="w-full md:w-1/3 bg-white p-6 shadow-xl border-l border-gray-100 min-h-[500px] flex flex-col">
      <div className="flex items-center justify-between mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
             <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          Your Cart
        </h2>
        <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full">
          {cartCount} Items
        </span>
      </div>

      <div className="flex-grow overflow-y-auto space-y-4 pr-2">
        {cartItems.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
             <p className="mb-2">Your cart is empty.</p>
             <p className="text-sm">Start adding products!</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg group">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                <p className="text-xs text-gray-500">${item.price} x {item.quantity}</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center bg-white rounded border border-gray-200">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-600 transition-colors p-1"
                  title="Remove item"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Total Amount</span>
          <span className="text-2xl font-bold text-gray-900">${cartTotal.toFixed(2)}</span>
        </div>
        <button 
          disabled={cartItems.length === 0}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all"
        >
          Checkout Now
        </button>
      </div>
    </div>
  );
};

// --- 4. Main App Layout ---
const Cart = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
        <header className="bg-white shadow-sm border-b px-6 py-4 sticky top-0 z-10">
          <h1 className="text-xl font-bold text-indigo-700 flex items-center gap-2">
             <span className="bg-indigo-100 p-1 rounded">🛍️</span> React Context Store
          </h1>
        </header>
        
        <main className="flex-grow container mx-auto max-w-6xl flex flex-col md:flex-row">
          <ProductList />
          <CartSidebar />
        </main>
      </div>
    </CartProvider>
  );
};

export default Cart;