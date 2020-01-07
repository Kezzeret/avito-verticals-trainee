import React from 'react';
import './MainPage.css';
import ItemsContainer from './MainPageComponents/ItemsContainer';

const MainPage = () => (
  <div className="mainPage">
    <div className="mainPageItems">
      <ItemsContainer />
    </div>
  </div>
);

export default MainPage;
