import Layout from "../layouts/Main";
import Footer from "../components/footer";
import { useDispatch } from 'react-redux';
import Breadcrumb from "../components/breadcrumb";
import ProductsFilter from "../components/products-filter";
import ProductsContent from "../components/products-content";
import {loadProducts} from 'store/reducers/productPage'
import config from 'assets/config'

export async function getServerSideProps() {
  const res = await fetch(config.baseUrl+'/api/products');
  const data = await res.text();;
  return {
    props: {data},
  }
}
const Products = (data:any) => {

  const dispatch = useDispatch();
  const dataObject = JSON.parse(data.data)
  

    dispatch(loadProducts(dataObject));
  return (
    <Layout>
      <Breadcrumb />
      <section className="products-page">
        <div className="container">
          <ProductsFilter />
          <ProductsContent/>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Products;
