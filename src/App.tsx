import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import ContentsContextProvider from "./context";
import DegreeManual from "./manuals/DegreeManual";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/pages/Home/Home";
import { SuperSeq } from "./content/modules";
import SuperSeqDetail from "./views/modules/SuperSeq/SuperSeqDetail";
import logo from "./media/OK200.png";
import About from "./views/pages/About";
import Draw from "./views/pages/Draw";


function App() {  
  return (
    <Router>
      <div className="w-screen h-screen overflow-auto">
        <Header />
        <div className="min-h-screen">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/modules">
              <Home />
            </Route>
            <Route exact path="/manuals">
              <DegreeManual />
            </Route>
            <Route exact path={SuperSeq.path}>
              <SuperSeqDetail />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/LFO">
              <Draw />
            </Route>
            <Route path="*">
              <div>404 Not Found</div>
            </Route>
          </Switch>
        </div>
        <div className="footer w-screen bg-slate">
          <div className="container mx-auto py-8">
            <div className="flex flex-row items-center gap-4">
              <div>
                <input type="text" className="h-10 rounded px-2" placeholder="example@email.com" />
              </div>
              <div>
                <button className="bg-orange text-white rounded px-4 py-2 h-10">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
