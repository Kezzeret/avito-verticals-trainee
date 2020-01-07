import React from 'react';
import './MainPage.css';
import ItemsContainer from "./ItemsContainer";

const MainPage = (props) => {
    return <div className="mainPage">
        <div className="mainPageItems">
        <ItemsContainer/>
        </div>
    </div>
};

export default MainPage;
