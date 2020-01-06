const SET_ITEMINFO = 'SET-ITEMINFO';

let initialState = {
    itemInfo: null
};

const itemInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMINFO: {
            return {...state, itemInfo: action.itemInfo};
        }
        default:
            return state;
    }
};

export const setItemInfo = (itemInfo) => ({type: SET_ITEMINFO, itemInfo})

export default itemInfoReducer;
