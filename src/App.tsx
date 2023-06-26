import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import ContentsContextProvider from "./context";
import DegreeManual from "./manuals/DegreeManual";

function App() {  
  return (
    <ContentsContextProvider>
      <div className="app">
        <Header />
        <div className="app__body">
          <DegreeManual />
        </div>   
      </div>
    </ContentsContextProvider>
  );
}

export default App;
