import React from "react";
import Image from "next/image";
import Pic from "../../../../../public/images/products/clothes-3.jpg";

const OrderProduct = ({ product }) => {
  return (
    <div className="w-full h-auto rounded-sm p-2 ">
      <div className="w-full flex gap-2 rounded-md cursor-pointer  transition-all ease-in delay-75 hover:shadow">
        <div className="w-1/2">
          <div className="rounded-sm w-full h-[13vh] object-cover ">
            <Image
              src={product.product_image}
              width={100}
              height={100}
              className="w-full h-full rounded-sm"
            />
          </div>
        </div>
        <div className="w-full p-2">
          <h4 className="text-sm">{product.product_name}</h4>
          <div className="flex gap-2 items-center flex-wrap">
            {product.sizes?.length !== 0 &&
              product.sizes.map((item, index) => (
                <div className="flex gap-3 items-center" key={index}>
                  <p className="text-xs text-gray-400">{item.size}</p>
                  <p className="text-xs text-gray-400">{item.color}</p>
                  <h5 className="text-sm text-gray-400">{item.number}</h5>
                </div>
              ))}
          </div>

          <div className="flex items-center justify-between">
            <h4 className="text-sm">{product.quantity} unit</h4>
            <div id="product_amount" className="flex items-baseline">
              <h1 className="text-2xl font-bold text-green-700">
                <span className="text-lg">Ghc</span>
                {product.amount}
                <span className="text-xs">.99</span>
              </h1>
              <p className="line-through text-[10px] text-gray-500 ml-1">
                Ghc125.99
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center bg-green-100 py-[2px] px-2 rounded-xl gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  product.status === "Delivered"
                    ? "bg-green-600"
                    : product.status === "UnPaid"
                    ? "bg-red-600"
                    : product.status === "Received"
                    ? "bg-yellow-600"
                    : product.status === "Shipped"
                    ? "bg-blue-600"
                    : product.status === "Processed"
                    ? "bg-gray-600"
                    : ""
                } `}
              ></div>
              <p
                className={`text-xs ${
                  product.status === "Delivered"
                    ? "text-green-600"
                    : product.status === "UnPaid"
                    ? "text-red-600"
                    : product.status === "Received"
                    ? "text-yellow-600"
                    : product.status === "Shipped"
                    ? "text-blue-600"
                    : product.status === "Processed"
                    ? "text-gray-600"
                    : ""
                } `}
              >
                {product.status}
              </p>
            </div>
            {/* <p className="text-xs text-gray-400">{product.created_at}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
