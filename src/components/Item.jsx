import React from 'react';
import './Item.css'
import {NavLink} from "react-router-dom";

const Item = ({id, address, title, previewImage, price}) => {
    return (
        <div className="item">
            <NavLink to={'/item/' + id}>
            <div className="itemPreview" style={{ backgroundImage: `url(${previewImage})` }} />
            </NavLink>
            <div>
                <NavLink to={'/item/' + id}>
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
    )
}

export default Item