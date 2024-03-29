const SET_ITEMS = 'SET-ITEMS';

let initialState = {
    items: []
};

const itemsDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS: {
            return {...state, items: [...state.items, ...action.items]};
        }
        default:
            return state;
    }
};

export const setItemsAC = (items) => ({type: SET_ITEMS, items})

export default itemsDataReducer;
