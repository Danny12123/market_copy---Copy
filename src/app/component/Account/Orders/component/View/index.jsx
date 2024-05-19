import OrderProductHolder from "@/app/component/Cards/OrderProductHolder";
import OrderProduct from "@/app/component/ProductHolder/OrderProduct";
import { Input } from "@/components/ui/input";
import React from "react";
import ProductImage1 from "../../../../../../../public/images/products/clothes-4.jpg";
import ProductImage2 from "../../../../../../../public/images/products/3.jpg";
import ProductImage3 from "../../../../../../../public/images/products/jacket-1.jpg";
import ProductImage4 from "../../../../../../../public/images/products/jacket-4.jpg";
import ProductImage5 from "../../../../../../../public/images/products/watch-3.jpg";
import ProductImage6 from "../../../../../../../public/images/products/sports-4.jpg";

const orders = [
  {
    product_name: "Man's top",
    product_image: ProductImage1,
    sizes: [
      {
        size: "xl",
        number: 1,
        color: "Black",
      },
    ],
    amount: "20.89",
    status: "Received",
    quantity: 1,
    negotiate: true,
    order_Id: "oijiw89344jr",
    contact_name: " John Kofi",
    phone_number: "09876567894",
    country: "Ghana",
    state_city: "Accra",
    address: "Bortainor",
    zip_code: "00233",
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    product_name: "Ladies top",
    product_image: ProductImage2,
    sizes: [
      {
        size: "xl",
        number: 1,
        color: "Black",
      },
      {
        size: "xxl",
        number: 1,
        color: "Black",
      },
    ],
    amount: "130.89",
    status: "UnPaid",
    quantity: 2,
    negotiate: false,
    order_Id: "oijiw89344jr",
    contact_name: " John Kofi",
    phone_number: "09876567894",
    country: "Ghana",
    state_city: "Accra",
    address: "Bortainor",
    zip_code: "00233",
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    product_name: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    product_image: ProductImage3,
    sizes: [
      {
        size: "xl",
        number: 1,
        color: "Black",
      },
    ],
    amount: "130.89",
    status: "Received",
    quantity: 2,
    negotiate: false,
    order_Id: "oijiw89344jr",
    contact_name: " John Kofi",
    phone_number: "09876567894",
    country: "Ghana",
    state_city: "Accra",
    address: "Bortainor",
    zip_code: "00233",
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    product_name: "magnam repudiandae necessitatibus ut perspiciatis",
    product_image: ProductImage4,
    sizes: [
      {
        size: "xl",
        number: 1,
        color: "Black",
      },
      {
        size: "xxl",
        number: 1,
        color: "Black",
      },
    ],
    amount: "200.89",
    status: "Processed",
    quantity: 2,
    negotiate: true,
    order_Id: "oijiw89344jr",
    contact_name: " John Kofi",
    phone_number: "09876567894",
    country: "Ghana",
    state_city: "Accra",
    address: "Bortainor",
    zip_code: "00233",
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    product_name: "magnam repudiandae necessitatibus ut perspiciatis",
    product_image: ProductImage6,
    sizes: [
      {
        size: "40",
        number: 1,
        color: "Black",
      },
    ],
    amount: "200.89",
    status: "Shipped",
    quantity: 2,
    negotiate: true,
    order_Id: "oijiw89344jr",
    contact_name: " John Kofi",
    phone_number: "09876567894",
    country: "Ghana",
    state_city: "Accra",
    address: "Bortainor",
    zip_code: "00233",
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    product_name: "magnam repudiandae necessitatibus ut perspiciatis",
    product_image: ProductImage5,
    sizes: [],
    amount: "500.89",
    status: "Delivered",
    quantity: 1,
    negotiate: true,
    order_Id: "oijiw89344jr",
    contact_name: " John Kofi",
    phone_number: "09876567894",
    country: "Ghana",
    state_city: "Accra",
    address: "Bortainor",
    zip_code: "00233",
    created_at: Date.now(),
    updated_at: Date.now(),
  },
];

const ViewAllOrders = () => {
  return (
    <div>
      {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam saepe beatae ad, sed neque quasi minima molestiae rem sequi dicta, magnam repudiandae necessitatibus ut perspiciatis suscipit quas vitae. Dicta, non! */}
      <div className="w-full h-auto justify-center items-center">
        <Input
          placeHolder="Search for your order..."
          className="w-[70%] mx-auto"
        />
      </div>
      <div className="mt-3">
        <OrderProductHolder>
          {orders?.map((item, index) => (
            <OrderProduct key={index} product={item} />
          ))}
        </OrderProductHolder>
      </div>
    </div>
  );
};

export default ViewAllOrders;
