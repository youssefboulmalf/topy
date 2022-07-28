import React from "react";
import { Form, Field } from "react-final-form";

const CheckoutForm = ({onSubmit, groupCounter, setGroupCounter}: any) => {
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
                    {meta.error && meta.touched && <span>{meta.error}</span>}
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
                    {meta.error && meta.touched && <span>{meta.error}</span>}
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
                    {meta.error && meta.touched && <span>{meta.error}</span>}
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
                    {meta.error && meta.touched && <span>{meta.error}</span>}
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
                    {meta.error && meta.touched && <span>{meta.error}</span>}
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
          <button className="btn btn--rounded btn--border" type="submit">
            Make enquiry
          </button>
        </form>
      )}
    />
  );
};

export default CheckoutForm;
