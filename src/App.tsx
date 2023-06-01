import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import DegreeManual from "./manuals/DegreeManual";

function App() {  
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <DegreeManual />
      </div>   
    </div>
  );
}

export default App;
