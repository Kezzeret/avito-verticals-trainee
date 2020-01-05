import React from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Route exact path="/" render={() => <MainPage />} />
        </BrowserRouter>
    </div>
  );
}

export default App;
