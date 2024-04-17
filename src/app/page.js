import AllProduct from "./component/AllProduct/AllProduct";
import Hero from "./component/Hero/Hero";
import NavigationBar from "./component/NavBar/NavigationBar";
import TopCategory from "./component/TopSections/TopCategory/TopCategory";

export default function Home() {
  return (
    <main>
      {/* <NavigationBar /> */}
      <Hero />
      <TopCategory />
      <AllProduct />
    </main>
  );
}
