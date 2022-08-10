import List from './list';
import { RootState } from "store";
import { useSelector } from 'react-redux';

const ProductsContent = () => {
  const productPage = useSelector((state: RootState) => state.productPage);
  const amount = productPage?.products?.length;
  
  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>Our tours <span>({amount})</span></h2>
      </div>
      <List/>
    </section>
  );
};
  
export default ProductsContent
  