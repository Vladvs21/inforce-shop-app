const initialState = {
    items: []
}

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_COMMENTS":
            return {...state, items: action.items}

        default:
            return state;
    }
}