import { create } from "zustand";

const useStore = create((set) => ({
    products: {
        xx59: { quantity: 0, price: 899 },
        xx99mark1: { quantity: 0, price: 1750 },
        xx99mark2: { quantity: 0, price: 2999 },
        yx1: { quantity: 0, price: 599 },
        zx7: { quantity: 0, price: 3500 },
        zx9: { quantity: 0, price: 4500 },
      },
    increment: (prod) => 
        set((state) => ({
            products: {
                ...state.products,
                [prod]: {
                  ...state.products[prod],
                  quantity: state.products[prod].quantity + 1,
                },
              },
            })),
    decrement: (prod) => 
        set((state) => ({
            products: {
                ...state.products,
                [prod]: {
                  ...state.products[prod],
                  quantity: state.products[prod].quantity - 1,
                },
              },
            })),
    removeItem: (prod) => 
        set((state) => ({
            products: {
                ...state.products,
                [prod]: {
                  ...state.products[prod],
                  quantity: state.products[prod].quantity = 0,
                },
              },
            })),
    // clearQuantities: () => 
    // set((state) => ({
    //     products: Object.keys(state.products).reduce((newProducts, prod) => {
    //     newProducts[prod] = { ...state.products[prod], quantity: 0 };
    //     return newProducts;
    //     }, {}),
    // })),
        
}))

export default useStore