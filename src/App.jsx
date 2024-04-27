import { Switch, Route } from "react-router-dom";
import "./App.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Slider from "./layout/Slider";
import { BestSeller } from "./bodyChildComponents/bestSellerProducts";
import { EditorPicks } from "./bodyChildComponents/editorPicks";
import { Container } from "./bodyChildComponents/container";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <EditorPicks />
      <BestSeller />
      <Container />
      <Footer />
    </>
  );
}

export default App;
