import "./App.css";
import "./index.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";

import { ContextProvider } from "./contexts/dataContext";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { ShopPage } from "./pages/ShopPage";

function App() {
  return (
    <ContextProvider>
      <Switch>
        <Route path="/" exact>
          <Header />
          <HomePage />
          <Footer />
        </Route>

        <Route path="/shop/:categoryId?/:gender?/:categorySlug?/:offset?">
          <Header />
          <ShopPage />
          <Footer />
        </Route>
      </Switch>
    </ContextProvider>
  );
}

export default App;
