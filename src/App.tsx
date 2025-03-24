import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import DegreeManual from "./manuals/DegreeManual";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/pages/Home/Home";
import Counterpoint from "./manuals/Counterpoint";
import logo from "./media/logo-white.svg";

function App() {  
  return (
    <Router>
      <div className="w-screen h-screen overflow-auto bg-black">
        <Header />
        <div className="min-h-screen text-white">
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
              <div className="container h-auto">
                <h1 className="text-2xl font-bold">404 Not Found</h1>
              </div>
            </Route>
          </Switch>
        </div>
        <div className="flex justify-center items-center py-4">
          <img className="max-h-12" src={logo} alt="ok200-logo" />
        </div>
      </div>
    </Router>
  );
}

export default App;
