import { create } from "zustand"
import { persist, createJSONStorage } from 'zustand/middleware'

const useStore = create(
  // persist(
  (set) => ({
    products: {
        yx1: { quantity: 3, id: 0},
        xx59: { quantity: 2, id: 1},
        xx99mark1: { quantity: 0, id: 2},
        xx99mark2: { quantity: 1, id: 3},
        zx7: { quantity: 0, id: 4},
        zx9: { quantity: 0, id: 5},
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
    removeAll: () => 
    set((state) => ({
        products: Object.keys(state.products).reduce((newProducts, prod) => {
        newProducts[prod] = { ...state.products[prod], quantity: 0 };
        return newProducts;
        }, {}),
    })),
}),
// {
//   name: 'products-store',
//   storage: createJSONStorage(() => localStorage),
// }
// )
)

export default useStore