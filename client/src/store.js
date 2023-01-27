import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import { getAllPizzaReducer, addPizzaReducer, getPizzaByIDReducer, updatePizzaByIDReducer } from './reducers/pizzaReducer'
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer, loginUserReducer } from './reducers/userReducer';


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const rootReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    cartReducer: cartReducer,
    addPizzaReducer: addPizzaReducer,
    getPizzaByIDReducer: getPizzaByIDReducer,
    updatePizzaByIDReducer: updatePizzaByIDReducer
})
const initialState = {
    loginUserReducer: {
        currentUser: currentUser
    },
    cartReducer: {
        cartItems: cartItems

    }
}

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;