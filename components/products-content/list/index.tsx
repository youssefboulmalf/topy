
import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { useSelector } from 'react-redux';

const ProductsContent = () => {

  const { filteredProducts } = useSelector((state: any) => state.productPage);


  return (
    <>
      {!filteredProducts && 
        <ProductsLoading />
      }

      {filteredProducts &&
        <section className="products-list">
          {filteredProducts.map((item :any, index:number)  => (
            <ProductItem 
              id={item.id} 
              name={item.name}
              price={item.price}
              color={item.color}
              currentPrice={item.currentPrice}
              key={item.id}
              images={item.images} 
              index={index}
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default ProductsContent