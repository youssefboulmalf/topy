import Layout from "../../layouts/Main";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckoutStatus from "../../components/checkout-status";
import CheckoutItems from "../../components/checkout/items";
import { GroupMemberObject, GroupMember, ProductStoreType } from "types";
import { RootState } from "store";
import { createOrder, createOrderFailed, createOrderSucces } from "store/reducers/checkoutPage";
import { removeAllProduct } from "store/reducers/cart";
import CheckoutForm from '../../components/checkoutForm'
const CheckoutPage = () => {
  const dispatch = useDispatch();
  let cartItems: ProductStoreType[];

  const orderState =  useSelector((state: RootState) => state.checkoutPage)


  const priceTotal = useSelector((state: RootState) => {
    cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }

    return Math.round(totalPrice * 100) / 100;
  });

  const [groupCounter, setGroupCounter] = useState(1);

  const onSubmit = (value: GroupMemberObject) => {
    console.log(value);
    const groupInfo: GroupMember[] = [];
    if (groupCounter > 0) {
      for (let i = 0; i < groupCounter; i++) {
        groupInfo.push(Object.values(value)[i]);
      }
    }
    console.log(groupCounter);
    const orderDetails = {
      items: cartItems,
      groupInfo: groupInfo,
    };

    const payload = {
      orderDetails,
      totalPrice: priceTotal,
      groupTotal: groupCounter,
    };
    try{
    dispatch(createOrder(payload))
    dispatch(createOrderSucces('succes'))
    dispatch(removeAllProduct());
  }
  catch(error){
    dispatch(createOrderFailed(error))
  }
  };



  return (
    <Layout>
      <section className="cart">
          {!orderState.orderPlaced && !orderState.orderFailed?(
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">confirmation and Payment</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="block">
                <h3 className="block__title">Group information</h3>
                <CheckoutForm onSubmit={onSubmit} groupCounter={groupCounter} setGroupCounter={setGroupCounter}/>
              </div>
            </div>

            <div className="checkout__col-4">
              <div className="block">
                <h3 className="block__title">Payment method</h3>
                <ul className="round-options round-options--three">
                  <li className="round-item">
                    <img src="/images/logos/paypal.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/visa.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/mastercard.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/maestro.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/discover.png" alt="Paypal" />
                  </li>
                  <li className="round-item">
                    <img src="/images/logos/ideal-logo.svg" alt="Paypal" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Your cart</h3>
                <CheckoutItems />

                <div className="checkout-total">
                  <p>Total cost</p>
                  <h3>${priceTotal}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-actions cart-actions--checkout">
            <a href="/cart" className="cart__btn-back">
              <i className="icon-left"></i> Back
            </a>
            <div className="cart-actions__items-wrapper">
              <button type="button" className="btn btn--rounded btn--border">
                Continue shopping
              </button>
            </div>
        </div>
          </div>): orderState.orderFailed?<p>oeps somthing whent wrong</p>:<p>Order has been placed</p>}
      </section>
    </Layout>
  );
};

export default CheckoutPage;
