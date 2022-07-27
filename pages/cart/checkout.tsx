import Layout from "../../layouts/Main";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckoutStatus from "../../components/checkout-status";
import CheckoutItems from "../../components/checkout/items";
import { Form, Field } from "react-final-form";
import { GroupMemberObject, GroupMember, ProductStoreType } from "types";
import { RootState } from "store";
import { createOrder } from "store/reducers/checkoutPage";
import { removeAllProduct } from "store/reducers/cart";
const CheckoutPage = () => {
  const dispatch = useDispatch();
  let cartItems: ProductStoreType[];

  const orderState =  useSelector((state: RootState) => state.checkoutPage.orderPlaced)


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
    dispatch(createOrder(payload));
    dispatch(removeAllProduct());
  };

  const required = (value: any) => (value ? undefined : "Required");
  const mustBeNumber = (value: any) =>
    isNaN(value) ? "Must be a number" : undefined;
  const composeValidators =
    (...validators) =>
    (value) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );

  return (
    <Layout>
      <section className="cart">
          {!orderState?(
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">confirmation and Payment</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="block">
                <h3 className="block__title">Group information</h3>
                <Form
                  onSubmit={onSubmit}
                  render={({ handleSubmit }) => (
                    <form className="form" onSubmit={handleSubmit}>
                      <h2>Group meber 1</h2>
                      <div className="form__input-row form__input-row--two">
                        <div className="form__col">
                          <Field
                            component="input"
                            type="text"
                            name="GroupMember1.email"
                            validate={required}
                          >
                            {({ input, meta }) => (
                              <div>
                                <input
                                  {...input}
                                  placeholder="Email"
                                  className="form__input form__input--sm"
                                />
                                {meta.error && meta.touched && (
                                  <span>{meta.error}</span>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>

                        <div className="form__col">
                          <Field
                            component="input"
                            className="form__input form__input--sm"
                            type="text"
                            placeholder="Phone number"
                            name="GroupMember1.phone"
                            validate={composeValidators(required, mustBeNumber)}
                          >
                            {({ input, meta }) => (
                              <div>
                                <input
                                  {...input}
                                  placeholder="Phone number"
                                  className="form__input form__input--sm"
                                />
                                {meta.error && meta.touched && (
                                  <span>{meta.error}</span>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>
                      </div>

                      <div className="form__input-row form__input-row--two">
                        <div className="form__col">
                          <Field
                            component="input"
                            className="form__input form__input--sm"
                            type="text"
                            placeholder="First name"
                            name="GroupMember1.firstName"
                            validate={required}
                          >
                            {({ input, meta }) => (
                              <div>
                                <input
                                  {...input}
                                  placeholder="First name"
                                  className="form__input form__input--sm"
                                />
                                {meta.error && meta.touched && (
                                  <span>{meta.error}</span>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>

                        <div className="form__col">
                          <Field
                            component="input"
                            className="form__input form__input--sm"
                            type="text"
                            placeholder="Last name"
                            name="GroupMember1.lastName"
                            validate={required}
                          >
                            {({ input, meta }) => (
                              <div>
                                <input
                                  {...input}
                                  placeholder="Last name"
                                  className="form__input form__input--sm"
                                />
                                {meta.error && meta.touched && (
                                  <span>{meta.error}</span>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>
                      </div>

                      <div className="form__input-row form__input-row--two">
                        <div className="form__col">
                          <Field
                            component="input"
                            className="form__input form__input--sm"
                            type="text"
                            placeholder="Age"
                            name="GroupMember1.age"
                            validate={composeValidators(required, mustBeNumber)}
                          >
                            {({ input, meta }) => (
                              <div>
                                <input
                                  {...input}
                                  placeholder="Age"
                                  className="form__input form__input--sm"
                                />
                                {meta.error && meta.touched && (
                                  <span>{meta.error}</span>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>

                        <div className="form__col">
                          <div className="select-wrapper select-form">
                            <select>
                              <option>Nationality</option>
                              <option value="Argentina">Argentina</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {Array.from(Array(groupCounter - 1)).map((_c, index) => {
                        return (
                          <div key={index}>
                            <h2>Group meber {index + 2}</h2>
                            <div className="form__input-row form__input-row--two">
                              <div className="form__col">
                                <Field
                                  component="input"
                                  className="form__input form__input--sm"
                                  type="text"
                                  placeholder="First name"
                                  name={`GroupMember${index + 2}.firstName`}
                                  validate={required}
                                >
                                  {({ input, meta }) => (
                                    <div>
                                      <input
                                        {...input}
                                        placeholder="First name"
                                        className="form__input form__input--sm"
                                      />
                                      {meta.error && meta.touched && (
                                        <span>{meta.error}</span>
                                      )}
                                    </div>
                                  )}
                                </Field>
                              </div>

                              <div className="form__col">
                                <Field
                                  component="input"
                                  className="form__input form__input--sm"
                                  type="text"
                                  placeholder="Last name"
                                  name={`GroupMember${index + 2}.lastName`}
                                  validate={required}
                                >
                                  {({ input, meta }) => (
                                    <div>
                                      <input
                                        {...input}
                                        placeholder="Last name"
                                        className="form__input form__input--sm"
                                      />
                                      {meta.error && meta.touched && (
                                        <span>{meta.error}</span>
                                      )}
                                    </div>
                                  )}
                                </Field>
                              </div>
                            </div>

                            <div className="form__input-row form__input-row--two">
                              <div className="form__col">
                                <Field
                                  component="input"
                                  className="form__input form__input--sm"
                                  type="text"
                                  placeholder="Age"
                                  name={`GroupMember${index + 2}.age`}
                                >
                                  {({ input, meta }) => (
                                    <div>
                                      <input
                                        {...input}
                                        placeholder="Age"
                                        className="form__input form__input--sm"
                                      />
                                      {meta.error && meta.touched && (
                                        <span>{meta.error}</span>
                                      )}
                                    </div>
                                  )}
                                </Field>
                              </div>

                              <div className="form__col">
                                <div className="select-wrapper select-form">
                                  <select>
                                    <option>Nationality</option>
                                    <option value="Argentina">Argentina</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div className="checkout__count-buttons">
                        <button
                          type="button"
                          className="btn btn--rounded btn--border"
                          onClick={() => {
                            if (groupCounter < 22) {
                              setGroupCounter(groupCounter + 1);
                            } else {
                              null;
                            }
                          }}
                        >
                          Add group member
                        </button>
                        <button
                          type="button"
                          className="btn btn--rounded btn--border"
                          onClick={() => {
                            if (groupCounter > 0) {
                              setGroupCounter(groupCounter - 1);
                            } else {
                              null;
                            }
                          }}
                        >
                          Remove group member
                        </button>
                      </div>
                      <button
                        className="btn btn--rounded btn--border"
                        type="submit"
                      >
                        Make enquiry
                      </button>
                    </form>
                  )}
                />
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
          </div>):<p>Order has been placed</p>}
      </section>
    </Layout>
  );
};

export default CheckoutPage;
