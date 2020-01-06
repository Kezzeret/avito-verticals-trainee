import React from 'react';
import './Item.css'
import {NavLink} from "react-router-dom";

const Item = ({id, address, title, previewImage, price}) => {
    return (
        <div className="item">
            <NavLink to={'/item/' + id}>
            <div className="itemPreview" style={{ backgroundImage: `url(${previewImage})` }} />
            </NavLink>
            <div className="itemTitle">
                {title}
            </div>
            <div className="itemAdress">
                {address}
            </div>
            <div className="itemPrice">
                {price}
            </div>
        </div>
    )
}

export default Item