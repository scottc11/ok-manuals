import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import DegreeManual from "./manuals/DegreeManual";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Counterpoint from "./manuals/Counterpoint";
import NotFound from "./views/NotFound";
import logo from "./media/logo-white.svg";
import FontLoadingSpinner from "./components/FontLoadingSpinner";

function App() {  
  return (
    // basename is set to the GitHub Pages URL
    <HashRouter basename={process.env.NODE_ENV === 'production' ? '/ok-manuals' : '/'}>
      <div className="w-screen h-screen overflow-auto bg-black">
        <Header />
        <div className="min-h-screen text-white">
          <FontLoadingSpinner>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/manuals/degree">
                <DegreeManual />
              </Route>
              <Route exact path="/manuals/counterpoint">
                <Counterpoint />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </FontLoadingSpinner>
        </div>
        <div className="flex justify-center items-center py-8">
          <img className="max-h-12" src={logo} alt="ok200-logo" />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
