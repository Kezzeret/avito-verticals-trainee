import React from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from './redux/redux-store';
import ItemPage from "./components/ItemPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Provider store={store}>
      <Route exact path="/" render={() => <MainPage />} />
      <Route path='/item/:itemId' render={() => <ItemPage />} />
            </Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
