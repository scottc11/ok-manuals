import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DegreeManual from "./manuals/DegreeManual";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Counterpoint from "./manuals/Counterpoint";
import PageNotFound404 from "./views/PageNotFound404";
import Success from "./views/Success";
import { CartProvider } from "./context/CartContext";
import FontLoadingSpinner from "./components/FontLoadingSpinner";
import NewsletterUnsubscribe from "./views/NewsletterUnsubscribe";
import Modules from "./views/Modules";
import ProductRouter from "./components/ProductRouter/ProductRouter";
import News from "./views/News";
import BlogPostDetail from "./views/BlogPostDetail";
import About from "./views/About";
import ShoppingCart from "./views/ShoppingCart";
import ScrollToTop from "./components/ScrollToTop";

function App() {  
  return (
    <CartProvider>
      {/* basename is set to the GitHub Pages URL */}
      <BrowserRouter basename="/">
        <ScrollToTop />
        <div id="app-scroll-container" className="w-screen h-screen overflow-auto bg-black">
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
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/news">
                  <News />
                </Route>
                <Route exact path="/news/:id">
                  <BlogPostDetail />
                </Route>
                <Route exact path="/cart">
                  <ShoppingCart />
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
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
