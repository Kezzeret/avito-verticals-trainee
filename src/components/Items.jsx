import React from "react";
import Item from "./Item";
import './Items.css'
import * as axios from "axios";

class Items extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.items.length == 0) {
            axios.get("http://134.209.138.34/items").then(response => {
                this.props.setItems(response.data)
            })
        }
    }

    render () {
        let itemsElements = this.props.items.map(i => (
            <div className="items" key={i.id}>
                <Item
                    id={i.id}
                    previewImage={i.previewImage}
                    title = {i.title}
                    address={i.address}
                    price={i.price}
                />
            </div>
        ));

        return <div className="items">
            {itemsElements}
        </div>
    }
}

export default Items
/*
const Items = (props) => {

    if (props.items.length == 0) {
        axios.get("http://134.209.138.34/items").then(response => {
            debugger;
            props.setItems(response.data)
        })
    }

    const itemsElements = props.items.map(i => (
        <div className="items" key={i.id}>
        <Item
              previewImage={i.previewImage}
              title = {i.title}
              address={i.address}
              price={i.price}
        />
        </div>
    ));

    return (
            <div className="items">
                {itemsElements}
            </div>
    )
}

export default Items;
*/