import React, { createContext, useContext, useState, useEffect } from 'react';

const B2BCartContext = createContext();

export function B2BCartProvider({ children }) {
  // Line items state: [{ productId, name, variant, cases, packingDetails, mrp, category }]
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('vbil_b2b_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('vbil_b2b_cart', JSON.stringify(cartItems));
    } catch (err) {
      console.warn('Could not persist B2B cart to localStorage:', err);
    }
  }, [cartItems]);

  const addToCart = (product, variantWeight, casesToAdd = 5) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(
        item => item.productId === product.id && item.variant === variantWeight
      );

      const variantObj = product.variants?.find(v => v.weight === variantWeight) || product.variants?.[0];
      const packingInfo = variantObj?.packing || `48 Packs / Case`;

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          cases: updated[existingIdx].cases + casesToAdd
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            productId: product.id,
            name: product.name,
            category: product.category,
            variant: variantWeight || (product.variants?.[0]?.weight || 'Standard Pack'),
            mrp: variantObj?.mrp || '',
            packingDetails: packingInfo,
            cases: Math.max(1, casesToAdd)
          }
        ];
      }
    });
  };

  const updateCases = (productId, variantWeight, cases) => {
    if (cases <= 0) {
      removeFromCart(productId, variantWeight);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.productId === productId && item.variant === variantWeight
          ? { ...item, cases }
          : item
      )
    );
  };

  const removeFromCart = (productId, variantWeight) => {
    setCartItems(prev =>
      prev.filter(item => !(item.productId === productId && item.variant === variantWeight))
    );
  };

  const clearCart = () => setCartItems([]);

  const totalCases = cartItems.reduce((acc, item) => acc + (Number(item.cases) || 0), 0);
  const totalSkus = cartItems.length;

  return (
    <B2BCartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCases,
        removeFromCart,
        clearCart,
        totalCases,
        totalSkus
      }}
    >
      {children}
    </B2BCartContext.Provider>
  );
}

export function useB2BCart() {
  const context = useContext(B2BCartContext);
  if (!context) {
    throw new Error('useB2BCart must be used within a B2BCartProvider');
  }
  return context;
}
