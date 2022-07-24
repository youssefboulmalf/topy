
import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { ProductTypeList } from 'types';
import { useDispatch, useSelector } from 'react-redux';

const ProductsContent = () => {

  const { filteredProducts } = useSelector((state: any) => state.productPage);


  return (
    <>
      {!filteredProducts && 
        <ProductsLoading />
      }

      {filteredProducts &&
        <section className="products-list">
          {filteredProducts.map((item: ProductTypeList)  => (
            <ProductItem 
              id={item.id} 
              name={item.name}
              price={item.price}
              color={item.color}
              currentPrice={item.currentPrice}
              key={item.id}
              images={item.images} 
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default ProductsContent