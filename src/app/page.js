import AllProduct from "./component/AllProduct/AllProduct";
import Hero from "./component/Hero/Hero";
import NavigationBar from "./component/NavBar/NavigationBar";
import TopCategory from "./component/TopSections/TopCategory/TopCategory";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-bg_secondary dark:bg-bg_dark_secondary">
      <NavigationBar />
      <Hero />
      <TopCategory />
      <AllProduct />
    </main>
  );
}
