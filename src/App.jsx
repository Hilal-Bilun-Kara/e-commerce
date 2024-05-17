import "./App.css";
import "./index.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";

import { ContextProvider } from "./contexts/dataContext";
import { ProductDetail } from "./pages/ProductDetail";
import { ShopPage } from "./pages/ShopPage";
import { ContactPage } from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPage";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shop/:categoryId?/:gender?/:categorySlug?/:offset?"
          element={<ShopPage />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/product/:gender?/:category?/:id?/:name?"
          element={<ProductDetail />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </ContextProvider>
  );
}

export default App;
