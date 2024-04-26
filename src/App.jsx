import { Switch, Route } from "react-router-dom";
import "./App.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Slider from "./layout/Slider";

function App() {
  return (
    <>
      <Header />
      <Slider />

      <Footer />
    </>
  );
}

export default App;
