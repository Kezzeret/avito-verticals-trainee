import React from 'react';
import './ItemPage.css';
import ItemInfoContainer from './ItemPageComponents/ItemInfoContainer';

const ItemPage = () => (
  <div className="itemPage">
    <div className="itemPageInfo">
      <ItemInfoContainer />
    </div>
  </div>
);

export default ItemPage;
