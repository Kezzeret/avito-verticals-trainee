import React from "react";
import ItemPage from "./ItemPage";
import * as axios from "axios";
import {connect} from "react-redux";
import {setItemInfo} from "../redux/itemInfo-reducer";
import {withRouter} from "react-router-dom";

class ItemInfoContainer extends React.Component {

    componentDidMount() {
        let itemId = this.props.match.params.itemId;
        axios.get(`http://134.209.138.34/item/` + itemId).then(response => {
            this.props.setItemInfo(response.data[0]);
        })
    }

    render () {
        return (
            <ItemPage {...this.props} itemIfo={this.props.itemInfo}/>
        )
    }
}

let mapStateToProps = (state) => ({
    itemInfo: state.itemInfo.itemInfo
});

let WithURLDataContainer = withRouter(ItemInfoContainer);

export default connect (mapStateToProps, {setItemInfo}) (WithURLDataContainer)