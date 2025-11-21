import React, { createContext, useContext, useReducer } from 'react';

// --- MOCK REDUX IMPLEMENTATION (Internal) ---
// Recreating core Redux/RTK functionality for the preview environment.

const createSlice = ({ name, initialState, reducers }) => {
  const actions = {};
  Object.keys(reducers).forEach((key) => {
    actions[key] = (payload) => ({ type: `${name}/${key}`, payload });
  });

  const reducer = (state = initialState, action) => {
    const [sliceName, actionType] = action.type.split('/');
    if (sliceName === name && reducers[actionType]) {
      return reducers[actionType](state, action);
    }
    return state;
  };
  return { actions, reducer };
};

const configureStore = ({ reducer }) => {
  const rootReducer = (state, action) => {
    const newState = {};
    Object.keys(reducer).forEach((key) => {
      newState[key] = reducer[key](state ? state[key] : undefined, action);
    });
    return newState;
  };
  return { reducer: rootReducer, initialState: rootReducer(undefined, { type: '@@INIT' }) };
};

const ReduxContext = createContext();

const Provider = ({ store, children }) => {
  const [state, dispatch] = useReducer(store.reducer, store.initialState);
  return (
    <ReduxContext.Provider value={{ state, dispatch }}>
      {children}
    </ReduxContext.Provider>
  );
};

const useSelector = (selector) => selector(useContext(ReduxContext).state);
const useDispatch = () => useContext(ReduxContext).dispatch;

// --- 1. CART SLICE (State Logic) ---
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...product, quantity: 1 }],
        };
      }
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    },
    updateQuantity: (state, action) => {
      const { id, delta } = action.payload;
      return {
        ...state,
        items: state.items
          .map((item) => {
            if (item.id === id) {
              return { ...item, quantity: Math.max(0, item.quantity + delta) };
            }
            return item;
          })
          .filter((item) => item.quantity > 0), // Remove item if quantity becomes 0
      };
    },
    clearCart: (state) => {
      return { ...state, items: [] };
    }
  },
});

const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// --- 2. STORE CONFIGURATION ---
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// --- 3. COMPONENTS ---

// Product List Component
const ProductList = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Premium Headphones', price: 129, color: 'bg-orange-100 text-orange-600' },
    { id: 2, name: 'Ergonomic Mouse', price: 49, color: 'bg-teal-100 text-teal-600' },
    { id: 3, name: 'Mechanical Keyboard', price: 159, color: 'bg-purple-100 text-purple-600' },
    { id: 4, name: '4K Monitor', price: 299, color: 'bg-blue-100 text-blue-600' },
  ];

  return (
    <div className="w-full md:w-2/3 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
        <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-gray-500">Redux Store</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className={`h-40 rounded-lg ${product.color} flex items-center justify-center mb-4`}>
                <span className="font-black text-5xl opacity-25">{product.name.charAt(0)}</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-500">Electronics</p>
                </div>
                <span className="font-bold text-lg text-gray-900">${product.price}</span>
              </div>
            </div>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="mt-6 w-full bg-gray-900 hover:bg-black text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 transform active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
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
  const dispatch = useDispatch();
  // Select cart state directly from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate derived state (selectors)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="w-full md:w-1/3 bg-white shadow-2xl border-l border-gray-100 flex flex-col h-screen sticky top-0">
      <div className="p-6 bg-gray-50 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            Your Cart
          </h2>
          <span className="bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
            {totalItems}
          </span>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-6 space-y-4">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.2 20.2 3.8 3.8"/><circle cx="10" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l.9-5.4"/><path d="M16.7 6.5H22"/></svg>
             </div>
             <p>Your cart is empty</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex flex-col bg-white border border-gray-100 rounded-lg shadow-sm p-3">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                <span className="font-bold text-gray-900 text-sm">${item.price * item.quantity}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">${item.price} each</p>
                
                <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                  <button 
                    onClick={() => dispatch(updateQuantity({ id: item.id, delta: -1 }))}
                    className="px-2.5 py-1 text-gray-600 hover:bg-gray-200 hover:text-black transition-colors rounded-l-lg"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold w-6 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => dispatch(updateQuantity({ id: item.id, delta: 1 }))}
                    className="px-2.5 py-1 text-gray-600 hover:bg-gray-200 hover:text-black transition-colors rounded-r-lg"
                  >
                    +
                  </button>
                </div>

                <button 
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-gray-400 hover:text-red-500 transition-colors p-1"
                  title="Remove"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-6 bg-gray-50 border-t border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 font-medium">Subtotal</span>
          <span className="text-2xl font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="space-y-3">
          <button 
            disabled={cartItems.length === 0}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg font-bold shadow-lg transition-all"
          >
            Checkout
          </button>
          {cartItems.length > 0 && (
            <button 
              onClick={() => dispatch(clearCart())}
              className="w-full bg-transparent text-red-500 hover:text-red-700 hover:bg-red-50 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Clear Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// --- 4. APP ENTRY POINT ---
export default function ReduxCart() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 font-sans text-gray-900 flex flex-col md:flex-row">
        <ProductList />
        <CartSidebar />
      </div>
    </Provider>
  );
}