import PromoBanner from "../components/PromoBanner";

import DealsSection from "./DealSection";
import ExploreShops from "./ExploreShops";
import Footer from "./Footer";
import FreshFinds from "./FreshFinds";
import InspiredProducts from "./InspiredProducts";
import LevelUpGame from "./LevelUpGame";
import ProductDetail from "./ProductDetail";

import TopSellers from "./Topsellers";

function Home() {
  return (
    <>
      <PromoBanner />
      <DealsSection />

      <ExploreShops />
      <TopSellers />
      <FreshFinds />
      <InspiredProducts />
      <LevelUpGame />

      <Footer />
      <ProductDetail />
    </>
  );
}

export default Home;
