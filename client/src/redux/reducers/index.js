import { combineReducers } from 'redux'
import { productReducer } from './productsReducer'
import { commentReducer } from './commentsReducer'

const reducers = combineReducers({
    products: productReducer,
    comments: commentReducer
})

export default reducers