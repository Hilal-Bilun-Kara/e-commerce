import { Switch, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";

function App() {
  

  return (
    <>
    <Header/>
    <PageContent/>
    <Footer/>
      
    </>
  )
}

export default App
