const initialState = {
    items: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {...state, items: action.items}

        default:
            return state;
    }
}