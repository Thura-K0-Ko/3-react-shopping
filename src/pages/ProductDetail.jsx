import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/Product";

const ProductDetail = () => {
  console.log(useParams());

  const { productId } = useParams();
  console.log(productId);
  return (
    <div>
      {products.map((el) => (
        <div key={el.id}>
            
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
