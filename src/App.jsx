import { Switch, Route } from "react-router-dom";
import "./App.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Slider from "./layout/Slider";
import { EditorPicks } from "./bodyChildComponents/editorPicks";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <EditorPicks />

      <Footer />
    </>
  );
}

export default App;
