import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addProduct } from "store/reducers/cart";
import { ProductType, ProductStoreType } from "types";
import { DatePicker } from "@mantine/dates";
import SmallDescription from '../small-description'
import "dayjs/locale/en";
import dayjs from "dayjs";

type ProductContent = {
  product: ProductType;
};
type setDate = Date | null

const Content = ({ product }: ProductContent) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);
  const [date, setDate] = useState<setDate>(
    null);
  const [dateError, setdateError] = useState<boolean>(false);
  const router = useRouter();


  const addToCart = () => {
    if ( date == null) {
      setdateError(true);
      return;
    }

    const productToSave: ProductStoreType = {
      id: product.id,
      name: product.name,
      thumb: product.images ? product.images[0] : "",
      price: product.currentPrice,
      count: count,
      date: date,
    };

    const productStore = {
      count,
      product: productToSave,
    };

    setdateError(false);
    dispatch(addProduct(productStore));
    router.push("/cart");
  };

  return (
    <section className="product-content">
      <div className="product-content__intro">
        {Number(product.discount) > 1 && <span className="product-on-sale">Sale</span>}
        <h2 className="product__name">{product.name}</h2>

        <div className="product__prices">
          <h4>${product.currentPrice}</h4>
          {Number(product.discount) > 1 && <span>${product.price}</span>}
        </div>
      </div>

      <div className="product-content__filters">
        <SmallDescription smallDescription={product.smallDescription}/>

        <div className="product-filter-item">
          <DatePicker
            className="date-picker"
            value={date}
            onChange={(e)=>{setDate(e); setdateError(false);}}
            label="Start date:"
            required
            minDate={dayjs(new Date()).add(3, 'days').toDate()}
            placeholder="Pick a starting date..."
          />
          {dateError ? (
            <p className="errorMessage">You have to select a date</p>
          ) : null}
        </div>
        <div className="product-filter-item">
          <h5>Group size:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button
                type="button"
                onClick={() => setCount(count - 1)}
                className="quantity-button__btn"
              >
                -
              </button>
              <span>{count}</span>
              <button
                type="button"
                onClick={() => setCount(count + 1)}
                className="quantity-button__btn"
              >
                +
              </button>
            </div>

            <button
              type="submit"
              onClick={() => addToCart()}
              className="btn btn--rounded btn--yellow"
            >
              Book now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
