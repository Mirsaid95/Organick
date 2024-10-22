import { Routes, Route } from "react-router-dom";
import "./index.css";
import { Home } from "./home/home";
import { AboutPage } from "./components/AboutUs/AboutPage";
import { MainShop } from "./components/Shop/mainShop";
import { Mainlayout } from "./layout/main-layout";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import { OurProducts } from "./home/categories/ourProducts";
function App() {
  return (
    <>
      <Mainlayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<MainShop />} />
          <Route path="shop/product/detail/:id" element={<ProductDetail />} />
          <Route>
            <Route path="/" element={<OurProducts />} />
            <Route path="/product/detail/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </Mainlayout>
    </>
  );
}

export default App;
