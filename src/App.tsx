import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import ContentsContextProvider from "./context";
import DegreeManual from "./manuals/DegreeManual";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/pages/Home/Home";


function App() {  
  return (
    <Router>
      <Header />
      <div className="app">
        <div className="app__body">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/degree">
              <DegreeManual />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
