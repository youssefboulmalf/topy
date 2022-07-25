import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { remove } from "lodash";

type ToggleFilter = {
  filter: string;
};

type TogglePriceFilter = {
  filter: number[];
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
  filters: {
    locations: [],
    priceFilter: [0, 3500],
  },
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
      const filter = state.filters.locations;
      if (filter.length == 0 || !filter.includes(action.payload)) {
        const oldFilters = state.filters.locations;
        const oldProducts = state.products;
        const filterdArray = oldProducts.filter((product: any) => {
          if (
            (product.locations.includes(action.payload) ||
              product.category.includes(action.payload)) &&
            product.price > state.filters.priceFilter[0] &&
            product.price < state.filters.priceFilter[1]
          ) {
            return true;
          } else {
            if (state.filters.locations.length > 0) {
              for (let i = 0; i < state.filters.locations.length; i++) {
                if (
                  (product.locations.includes(state.filters.locations[i]) ||
                  product.category.includes(state.filters.locations[i])) &&
                    product.price > state.filters.priceFilter[0] &&
                    product.price < state.filters.priceFilter[1]
                ) {
                  return true;
                }
              }
            }
          }
        });
        console.log(filterdArray);
        state.filters.locations = [...oldFilters, action.payload];
        state.filteredProducts = filterdArray;
        return;
      }

      return;
    },
    addPriceFilter(state, action: PayloadAction<TogglePriceFilter>) {
      state.filters.priceFilter = action.payload;
      const oldProducts = state.products;
      const locationFilters = state.filters.locations;
      const filterdArray = oldProducts.filter((product: any) => {
        if (locationFilters.length > 0) {
          for (let i = 0; i < locationFilters.length; i++) {
            if (
              (product.locations.includes(locationFilters[i]) ||
              product.category.includes(locationFilters[i]))&&
                product.price > state.filters.priceFilter[0] &&
                product.price < state.filters.priceFilter[1]
            ) {
              return true;
            }
          }
        } else {
          return (
            product.price > state.filters.priceFilter[0] &&
            product.price < state.filters.priceFilter[1]
          );
        }
      });
      state.filteredProducts = filterdArray;
      return;
    },
    removeFilter(state, action: PayloadAction<ToggleFilter>) {
      const filter = action.payload;
      const oldFilters = state.filters.locations;
      const newFilters = remove(oldFilters, (stateFilter) => {
        console.log(stateFilter);
        return stateFilter != filter;
      });
      console.log(filter, newFilters);

      const oldProducts = state.products;
      const filterdArray = oldProducts.filter((product: any) => {
        if (newFilters.length > 0) {
          for (let i = 0; i < newFilters.length; i++) {
            if (
              (product.locations.includes(newFilters[i]) ||
                product.category.includes(newFilters[i])) &&
              product.price > state.filters.priceFilter[0] &&
              product.price < state.filters.priceFilter[1]
            ) {
              return true;
            }
          }
        } else {
          return (
            product.price > state.filters.priceFilter[0] &&
            product.price < state.filters.priceFilter[1]
          );
        }
      });
      state.filters.locations = newFilters;
      state.filteredProducts = filterdArray;
    },
  },
});

export const { loadProducts, addFilter, removeFilter, addPriceFilter } =
  productPageSlice.actions;
export default productPageSlice.reducer;
