import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

type ToggleFilter = {
  filter: string;
};

type LoadProducts = {
  products: any;
};

interface productPageSliceTypes {
  products: any;
  filters: any;
  filteredProducts: any;
}

const initialState = {
  products: [],
  filters: [],
  filteredProducts: [],
} as productPageSliceTypes;

const productPageSlice = createSlice({
  name: "product page",
  initialState,
  reducers: {
    loadProducts(state, action: PayloadAction<LoadProducts>) {
      const products = action.payload;
      return {
        ...state,
        products: products,
        filteredProducts: products,
      };
    },
    addFilter(state, action: PayloadAction<ToggleFilter>) {
      const filter = state.filters;

      if (filter.length == 0 || !filter.includes(action.payload)) {
        const oldFilters = state.filters;
        const oldProducts = state.products;
        console.log(oldProducts);
        const filterdArray = oldProducts.filter((product: any) => {
          if (
            product.locations.includes(action.payload) ||
            product.category.includes(action.payload)
          ) {
            return true;
          } else {
            if (state.filters.length > 0) {
              for (let i = 0; i < state.filters.length; i++) {
                console.log("check")
                if (
                  product.locations.includes(state.filters[i]) ||
                  product.category.includes(state.filters[i])
                ) {
                  return true;
                }
              }
            }
          }
        });
        console.log(filterdArray);
        state.filters = [...oldFilters, action.payload];
        state.filteredProducts = filterdArray;
        return;
      }

      return;
    },
    removeFilter(state, action: PayloadAction<ToggleFilter>) {
      const filter = state.filters.includes(action.payload);

      if (filter) {
        const index = state.filters.indexOf(action.payload);
        delete state.filters[index];
        const filterdArray = state.products.filter((product: any) => {
          product.location.includes(action.payload) ||
            product.category.includes(action.payload);
        });
        for (const i in filterdArray) {
          if (state.filters.indexOf(action.payload) > -1) {
            delete state.filteredProducts[
              state.filters.indexOf(action.payload)
            ];
          }
        }
        return;
      }
      return;
    },
  },
});

export const { loadProducts, addFilter, removeFilter } =
  productPageSlice.actions;
export default productPageSlice.reducer;
