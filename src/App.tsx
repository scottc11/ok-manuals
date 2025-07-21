import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DegreeManual from "./manuals/DegreeManual";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Counterpoint from "./manuals/Counterpoint";
import PageNotFound404 from "./views/PageNotFound404";
import Success from "./views/Success";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import FontLoadingSpinner from "./components/FontLoadingSpinner";
import Contact from "./views/Contact";
import NewsletterUnsubscribe from "./views/NewsletterUnsubscribe";
import Modules from "./views/Modules";
import ProductRouter from "./components/ProductRouter/ProductRouter";

function App() {  
  return (
    <CartProvider>
      {/* basename is set to the GitHub Pages URL */}
      <HashRouter basename={process.env.NODE_ENV === 'production' ? '/ok-manuals' : '/'}>
        <div className="w-screen h-screen overflow-auto bg-black">
          <Header />
          <div className="min-h-screen text-white">
            <FontLoadingSpinner>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/modules">
                  <Modules />
                </Route>
                <Route exact path="/modules/:slug">
                  <ProductRouter />
                </Route>
                <Route exact path="/cart">
                  <Cart />
                </Route>
                <Route exact path="/success">
                  <Success />
                </Route>
                <Route exact path="/manuals/degree">
                  <DegreeManual />
                </Route>
                <Route exact path="/manuals/counterpoint">
                  <Counterpoint />
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
                <Route exact path="/unsubscribe">
                  <NewsletterUnsubscribe />
                </Route>
                <Route path="*">
                  <PageNotFound404 />
                </Route>
              </Switch>
            </FontLoadingSpinner>
          </div>
          <Footer />
        </div>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
