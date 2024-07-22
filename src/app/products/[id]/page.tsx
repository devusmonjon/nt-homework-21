import { IProduct } from "@/interfaces/products";
import React, { useState } from "react";

const Page = ({ params: { id } }: { params: { id: number } }) => {
    const [product, setProduct] = useState<IProduct>();
    
  return <div>Product id: {id}</div>;
};

export default Page;
