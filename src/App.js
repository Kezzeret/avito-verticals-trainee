import React from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from './redux/redux-store';
import ItemInfoContainer from "./components/ItemInfoContainer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Provider store={store}>
      <Route exact path="/" render={() => <MainPage />} />
      <Route path='/item/:itemId' render={() => <ItemInfoContainer />} />
            </Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
