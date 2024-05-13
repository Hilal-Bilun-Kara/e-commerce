import "./App.css";
import "./index.css";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";

import { ContextProvider } from "./contexts/dataContext";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { ProductDetail } from "./pages/ProductDetail";
import { ShopPage } from "./pages/ShopPage";
import { ContactPage } from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPage";
import SignUp from "./pages/SignUp";

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

        <Route path="/product/:gender?/:category?/:id?/:name?" exact>
          <Header />
          <ProductDetail />
          <Footer />
        </Route>

        <Route path="/contact" exact>
          <Header />
          <ContactPage />
          <Footer />
        </Route>

        <Route path="/team" exact>
          <Header />
          <TeamPage />
          <Footer />
        </Route>

        <Route path="/about" exact>
          <Header />
          <AboutPage />
          <Footer />
        </Route>
        <Route path="/signup" exact>
          <Header />
          <SignUp />
          <Footer />
        </Route>
      </Switch>
    </ContextProvider>
  );
}

export default App;
