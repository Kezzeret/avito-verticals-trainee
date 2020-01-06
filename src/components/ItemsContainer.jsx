import React from "react";
import Items from "./Items";
import {connect} from "react-redux";
import {setItemsAC} from "../redux/itemsData-reducer";

let mapStateToProps = (state) => {
    return {
        items: state.itemsData.items
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setItems: (items) => {
            dispatch(setItemsAC(items))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Items) ;