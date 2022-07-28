import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postData } from "utils/services";
import { CheckoutOrder } from "../../types/index";

const initialState = {
  orderPlaced: false,
  orderFailed: false,
  error: {} as any,
};

const checkoutPageSlice = createSlice({
  name: "checkoutPage",
  initialState,
  reducers: {
    createOrder(_state, action: PayloadAction<CheckoutOrder>) {
      const orderDetails = action.payload.orderDetails;
      const payloadWithoutDispatch = {
        orderDetails,
        totalPrice: action.payload.totalPrice,
        groupTotal: action.payload.groupTotal,
      };

      postData("/api/createOrder", payloadWithoutDispatch)
        .then((_res) => {
          return
        })
        .catch((e) => {
          throw e;
        });
      return;
    },
    createOrderSucces(state, _action: PayloadAction<any>) {
      state.orderPlaced = true;
      state.error = {};
      state.orderFailed = false;
      return;
    },
    createOrderFailed(state, action: PayloadAction<any>) {
      state.orderPlaced = false;
      state.orderFailed = true;
      state.error = action.payload;
      return;
    },
  },
});

export const { createOrder, createOrderFailed, createOrderSucces } =
  checkoutPageSlice.actions;
export default checkoutPageSlice.reducer;
