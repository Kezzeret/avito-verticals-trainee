import React from 'react';
import './ItemPage.css';
import ItemInfoContainer from "./ItemInfoContainer";

const ItemPage = (props) => {
    return <div className="itemPage">
        <div className="itemPageInfo">
            <ItemInfoContainer/>
        </div>
    </div>
};

export default ItemPage;
