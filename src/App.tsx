import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";

function App() {  
  return (
    <div className="app">
      <Header />
      <div className="app__body">
      </div>   
    </div>
  );
}

export default App;
