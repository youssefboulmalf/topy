import React from "react";
import ProductForm from './product-form'
import useSWR from "swr";
import { Products } from "types";


const fetcher = (url: string) => fetch(url).then((res) => res.json());


const ProductTab = () => {

  const { data, error } = useSWR("/api/products", fetcher);
  
  console.log('data', data)
  const products: Products[] = data;

  if (!data) return <div>Loading...</div>;


  return (
    <>
    {products.map((item: Products, index: number) => (
    <ProductForm key={index} item={item}/>
    ))
    }
    </>
  );
};

export default ProductTab;
