import { Switch, Route } from "react-router-dom";
import "./App.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";

import { BestSeller } from "./bodyChildComponents/bestSellerProducts";
import { EditorPicks } from "./bodyChildComponents/editorPicks";
import { SliderMan } from "./layout/SliderMan";

import Container from "./bodyChildComponents/container";

import SliderWoman from "./layout/SliderWoman";
import FeaturedPost from "./bodyChildComponents/featuredPost";

function App() {
  return (
    <>
      <Header />
      <SliderWoman />
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
