import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setItemInfo } from '../../redux/itemInfo-reducer';
import ItemInfo from './ItemInfo';

class ItemInfoContainer extends React.Component {
  componentDidMount() {
    const { itemId } = this.props.match.params;
    axios.get(`http://134.209.138.34/item/${itemId}`).then((response) => {
      this.props.setItemInfo(response.data[0]);
    });
  }

  render() {
    return (
      <ItemInfo {...this.props} itemInfo={this.props.itemInfo} />
    );
  }
}

const mapStateToProps = (state) => ({
  itemInfo: state.itemInfo.itemInfo,
});

const WithURLDataContainer = withRouter(ItemInfoContainer);

export default connect(mapStateToProps, { setItemInfo })(WithURLDataContainer);
