import React from 'react';
import * as axios from 'axios';
import Item from './Item';
import './Items.css';

class Items extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.items.length === 0) {
      axios.get('http://134.209.138.34/items').then((response) => {
        this.props.setItems(response.data);
      });
    }
  }

  render() {
    const itemsElements = this.props.items.map((i) => (
      <div className="items" key={i.id}>
        <Item
          id={i.id}
          previewImage={i.previewImage}
          title={i.title}
          address={i.address}
          price={i.price}
        />
      </div>
    ));

    return (
      <div className="items">
        {itemsElements}
      </div>
    );
  }
}

export default Items;