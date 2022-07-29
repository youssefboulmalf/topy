import { GetServerSideProps } from "next";

import { useState } from "react";
import Footer from "../../components/footer";
import Layout from "../../layouts/Main";
import Breadcrumb from "../../components/breadcrumb";
import ProductsFeatured from "../../components/products-featured";
import Gallery from "../../components/product-single/gallery";
import Content from "../../components/product-single/content";
import Description from "../../components/product-single/description";
import { Button, Collapse } from "@mantine/core";
import { server } from "../../utils/server";

// types
import { ProductType } from "types";

type ProductPageType = {
  product: ProductType;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`${server}/api/product/${pid}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

const Product = ({ product }: ProductPageType) => {
  const [opened, setOpened] = useState(false);

  return (
    <Layout>
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={product.images} />
            <Content product={product} />
          </div>
          <div className="product-single__info">
              <button className="toggle-button btn btn--rounded" onClick={() => setOpened((o) => !o)}>
                {!opened? 'see' : 'close'} full description
              </button>

              <Collapse
                in={opened}
                transitionDuration={1000}
                transitionTimingFunction="linear"
              >
                <Description description={product.description} />
              </Collapse>
          </div>
        </div>
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
      <Footer />
    </Layout>
  );
};

export default Product;
