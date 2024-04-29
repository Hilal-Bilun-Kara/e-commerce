import "./App.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import { ContextProvider } from "./contexts/dataContext";

function App() {
  return (
    <ContextProvider>
      <Header />
      <HomePage />
      <Footer />
    </ContextProvider>
  );
}

export default App;
