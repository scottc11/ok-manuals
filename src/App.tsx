import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import ContentsContextProvider from "./context";
import DegreeManual from "./manuals/DegreeManual";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/pages/Home/Home";
import { SuperSeq } from "./content/modules";
import SuperSeqDetail from "./views/modules/SuperSeq/SuperSeqDetail";


function App() {  
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
            <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/degree">
                  <DegreeManual />
                </Route>
                <Route exact path={SuperSeq.path}>
                  <SuperSeqDetail />
                </Route>
            </Switch>
        </div>
        <div className="app__footer">
            <div className="app__footer__links">
                <Link to="/degree">Degree</Link>
            </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
