import React from "react";
import ProductForm from "./product-form";
import useSWR from "swr";
import { Products, descriptionType } from "types";
import { Modal, Text, Button, Group } from "@mantine/core";
import { openModal } from "@mantine/modals";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProductTab = () => {
  const { data, error } = useSWR("/api/products", fetcher);

  console.log("data", data);
  const products: Products[] = data;

  if (!data) return <div>Loading...</div>;

  const newProduct = {
    id: "",
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
                title: "Subscribe to newsletter",
                size: "60%",
                children: (
                  <>
                    <ProductForm key={index} index={index} item={item} />
                  </>
                ),
              });
            }}
          >
            <img className="product-image" src={item.images[0]} />
            {item.name}
          </div>
        </div>
      ))}
      <Button
        onClick={() => {
          openModal({
            title: "Subscribe to newsletter",
            size: "60%",
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
      ;
    </div>
  );
};
export default ProductTab;
