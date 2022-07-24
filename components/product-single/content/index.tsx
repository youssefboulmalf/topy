import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { some } from 'lodash';
import { addProduct } from 'store/reducers/cart';
import { toggleFavProduct } from 'store/reducers/user';
import { ProductType, ProductStoreType } from 'types';
import { RootState } from 'store';

type ProductContent = {
  product: ProductType;
}


const Content = ({ product }: ProductContent) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);
  const [date, setDate] = useState<string>('none');
  
  const onDateSet = (e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value);
  
  const { favProducts } = useSelector((state: RootState) => state.user);
  const isFavourite = some(favProducts, productId => productId === product.id);
  const router = useRouter()
  
  const toggleFav = () => {
    dispatch(toggleFavProduct(
      { 
        id: product.id,
      }
    ))
  }

  const addToCart = () => {
    const productToSave: ProductStoreType = { 
      id: product.id,
      name: product.name,
      thumb: product.images ? product.images[0] : '',
      price: product.currentPrice,
      count: count,
      date: date
    }

    const productStore = {
      count,
      product: productToSave
    }

    dispatch(addProduct(productStore));
    router.push('/cart')
  }

  return (
    <section className="product-content">
      <div className="product-content__intro">
        <h5 className="product__id">Product ID:<br></br>{product.id}</h5>
        <span className="product-on-sale">Sale</span>
        <h2 className="product__name">{product.name}</h2>

        <div className="product__prices">
          <h4>${ product.currentPrice }</h4>
          {product.discount &&
            <span>${ product.price }</span>
          }
        </div>
      </div>

      <div className="product-content__filters">
        <div className="product-filter-item">
          <input className='product-filter-item-date' onChange={(event) => onDateSet(event)} type={"date"} />
        </div>
        <div className="product-filter-item">
          <h5>Group size:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button type="button" onClick={() => setCount(count - 1)} className="quantity-button__btn">
                -
              </button>
              <span>{count}</span>
              <button type="button" onClick={() => setCount(count + 1)} className="quantity-button__btn">
                +
              </button>
            </div>
            
            <button type="submit" onClick={() => addToCart()} className="btn btn--rounded btn--yellow">Add to cart</button>
            <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default Content;
    