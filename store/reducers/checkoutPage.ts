import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order, CheckoutOrder } from "../../types/index";

const initialState = {
  order: {} as Order,
  orderPlaced: false,
  error: false,
};

const checkoutPageSlice = createSlice({
  name: "checkoutPage",
  initialState,
  reducers: {
    createOrder(state, action: PayloadAction<CheckoutOrder>) {
      let succes = false;
      fetch("/api/createOrder", {
        method: "POST",
        body: JSON.stringify(action.payload),
      })
        .then((_res) => {
          succes = true;
          return;
        })
        .catch((_e) => {
          return;
        });
      if (succes) {
        state.orderPlaced = true;
        state.error = false;
      } else {
        state.orderPlaced = false;
        state.error = true;
      }
      return;
    },
  },
});

export const { createOrder } = checkoutPageSlice.actions;
export default checkoutPageSlice.reducer;
