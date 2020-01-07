import React from 'react';
import './Item.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({
  id, address, title, previewImage, price,
}) => (
  <div className="item">
    <NavLink to={`/item/${id}`}>
      <div className="itemPreview" style={{ backgroundImage: `url(${previewImage})` }} />
    </NavLink>
    <div>
      <NavLink to={`/item/${id}`}>
        <div className="itemTitle itemDescription">
          {title}
        </div>
      </NavLink>
      <div className="itemAddress itemDescription">
        {address}
      </div>
      <div className="itemPrice itemDescription">
        {price}
      </div>
    </div>
  </div>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Item;
