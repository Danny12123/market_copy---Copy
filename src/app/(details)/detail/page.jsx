import DetailNavBar from "@/app/component/NavBar/DetailNavBar";
import NavigationBar from "@/app/component/NavBar/NavigationBar";
import ProductDetails from "@/app/component/ProductHolder/ProductDetails";
import React from "react";

const ProductDetailsPage = () => {
  return (
    <div className="w-full min-h-screen bg-bg_secondary dark:bg-bg_dark_secondary">
      <NavigationBar />
      {/* <DetailNavBar /> */}
      <ProductDetails />
    </div>
  );
};

export default ProductDetailsPage;