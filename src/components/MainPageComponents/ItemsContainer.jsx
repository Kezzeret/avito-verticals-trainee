import { connect } from 'react-redux';
import Items from './Items';
import { setItemsAC } from '../../redux/itemsData-reducer';

const mapStateToProps = (state) => ({
  items: state.itemsData.items,
});

const mapDispatchToProps = (dispatch) => ({
  setItems: (items) => {
    dispatch(setItemsAC(items));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
