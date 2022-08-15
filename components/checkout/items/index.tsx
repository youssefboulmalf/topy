import { useSelector } from 'react-redux';
import { ProductStoreType } from 'types';
import { RootState } from "store";
import Image from 'next/image'

const CheckoutItems = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  return (
    <ul className="checkout-items">
      {cartItems.map((item: ProductStoreType, index:number) => (
        <li key={index} className="checkout-item">
          <div className="checkout-item__content">
            <div className="checkout-item__img">
              <Image layout={'fixed'} width={50} height={50} alt={"product thumbnail"} referrerPolicy="no-referrer" src={item.thumb} />
            </div>

            <div className="checkout-item__data">
              <h3>{item.name}</h3>
              <span>#{item.id}</span>
            </div>
          </div>
          <h3>${item.price}</h3>
        </li>
      ))}
    </ul>
  )
};

  
export default CheckoutItems