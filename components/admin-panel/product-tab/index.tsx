import React from "react";
import ProductForm from "./product-form";
import useSWR from "swr";
import { Products, descriptionType } from "types";
import { Button } from "@mantine/core";
import { openModal } from "@mantine/modals";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductTab = () => {
  const { data, error } = useSWR("/api/products", fetcher);

  const products: Products[] = data;

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Somthing went wrong...</div>;

  const newProduct = {
    id: (products.length+1).toString(),
    name: "",
    price: 0,
    discount: 0,
    category: "",
    currentPrice: 0,
    locations: [""],
    images: [""],
    smallDescription: "",
    description: [{ name: "", text: "" }] as descriptionType[],
    duration: 0,
  } as Products;

  return (
    <div className="products-tab">
      {products.map((item: Products, index: number) => (
        <div key={index}>
          <div
            className="product-button"
            onClick={() => {
              openModal({
                title: "Change product details",
                size: "90%",
                centered:true,
                children: (
                  <>
                    <ProductForm key={index} index={index} item={item} />
                  </>
                ),
              });
            }}
          >
            <img className="product-image" referrerPolicy="no-referrer" src={item.images[0]} />
            {item.name}
          </div>
        </div>
      ))}
      <Button
        onClick={() => {
          openModal({
            title: "Subscribe to newsletter",
            size: "90%",
            children: (
              <>
                <ProductForm key={9999} index={9999} item={newProduct} />
              </>
            ),
          });
        }}
      >
        Add product
      </Button>
    </div>
  );
};
export default ProductTab;
