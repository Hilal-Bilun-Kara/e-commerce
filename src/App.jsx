import { Switch, Route } from "react-router-dom";
import "./App.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";

import { BestSeller } from "./bodyChildComponents/bestSellerProducts";
import { EditorPicks } from "./bodyChildComponents/editorPicks";

import Container from "./bodyChildComponents/container";

import Slider from "./layout/Slider";
import FeaturedPost from "./bodyChildComponents/featuredPost";
import SliderMan from "./layout/SliderMan";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <EditorPicks />

      <BestSeller />
      <SliderMan />
      <Container />
      <FeaturedPost />
      <Footer />
    </>
  );
}

export default App;
