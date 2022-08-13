import Layout from "../../layouts/Main";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import CheckoutItems from "../../components/checkout/items";
import { GroupMemberObject, GroupMember, ProductStoreType } from "types";
import { RootState } from "store";
import {
  createOrder,
  createOrderFailed,
  createOrderSucces,
} from "store/reducers/checkoutPage";
import { removeAllProduct } from "store/reducers/cart";
import CheckoutForm from "../../components/checkoutForm";
import { MdOutlineArrowForward } from "react-icons/md";
import { BsWhatsapp, BsFillPencilFill } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { RiSecurePaymentFill, RiHazeLine } from "react-icons/ri";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  let cartItems: ProductStoreType[];

  const orderState = useSelector((state: RootState) => state.checkoutPage);

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
    const groupInfo: GroupMember[] = [];
    if (groupCounter > 0) {
      for (let i = 0; i < groupCounter; i++) {
        groupInfo.push(Object.values(value)[i]);
      }
    }
    const orderDetails = {
      items: cartItems,
      groupInfo: groupInfo,
    };

    const payload = {
      orderDetails,
      totalPrice: priceTotal,
      groupTotal: groupCounter,
    };
    try {
      dispatch(createOrder(payload));
      dispatch(createOrderSucces("succes"));
      dispatch(removeAllProduct());
    } catch (error) {
      dispatch(createOrderFailed(error));
    }
  };

  const errorPage = (
    <div className="checkout__order-message">
      <h2>Oeps somthing whent wrong....</h2>
      <p>Your booking was not made yet. Refresh te page and try again.</p>
    </div>
  );
  const succesPage = (
    <div className="checkout__order-message">
      <h1>Thank you for choosing Topy tours!</h1>
      <h2>Your booking has been made.</h2>
      <p>
        One of our staff members will contact you shortly trough whatsapp or
        email.
      </p>
    </div>
  );

  return (
    <Layout>
      <section className="cart">
        {!orderState.orderPlaced && !orderState.orderFailed ? (
          <div className="container">
            <div className="cart__intro">
              <h3 className="cart__title">confirmation and Payment</h3>
            </div>

            <div className="checkout-content">
              <div className="checkout__col-6">
                <div className="block">
                  <h1 className="block__title">Group information</h1>
                  <CheckoutForm
                    onSubmit={onSubmit}
                    groupCounter={groupCounter}
                    setGroupCounter={setGroupCounter}
                  />
                </div>
              </div>

              <div className="checkout__col-4">
                <div className="block">
                  <h3 className="block__title">How it works</h3>
                  <ul className="how-list">
                    <li className="list-item">
                      <div className="logo-wrapper">
                        <BsFillPencilFill className="logo-pencil" />
                      </div>
                      <p>{"Fill out the required information."}</p>
                    </li>
                    <li className="list-item">
                      <div className="logo-wrapper">
                        <BiMailSend className="logo-send" />
                      </div>
                      <p>{"Send the booking request."}</p>
                    </li>
                    <li className="list-item">
                      <div className="logo-wrapper">
                        <BsWhatsapp className="logo-whatsapp" />
                      </div>
                      <p>
                        {
                          "You will be contacted by one of our staff mebers to complete the booking request."
                        }
                      </p>
                    </li>
                    <li className="list-item">
                      <div className="logo-wrapper">
                        <RiSecurePaymentFill className="logo-payment" />
                      </div>
                      <p>
                        {
                          "Pay trough the payment link send to your email after contact with our staff."
                        }
                      </p>
                    </li>
                    <li className="list-item">
                      <div className="logo-wrapper">
                        <RiHazeLine className="logo-vacation" />
                      </div>
                      <p>{"Enjoy your trip!"}</p>
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
            <Link href={'/cart'}>
              <a href="/cart" className="cart__btn-back">
                <i className="icon-left"></i> Back
              </a>
              </Link>
              <div className="checkout__submit-buttons">
                <label
                  className="btn btn--rounded checkout__submit-button btn--border"
                  htmlFor="submit-form"
                  tabIndex={0}
                >
                  Make booking request
                  <MdOutlineArrowForward />
                </label>
              </div>
            </div>
          </div>
        ) : orderState.orderFailed ? (
          errorPage
        ) : (
          succesPage
        )}
      </section>
    </Layout>
  );
};

export default CheckoutPage;
