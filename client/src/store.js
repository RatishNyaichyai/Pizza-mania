import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import { getAllPizzaReducer } from './reducers/pizzaReducer'
import { registerUserReducer, loginUserReducer } from './reducers/userReducer';

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const rootReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer
})
const initialState = {
    loginUserReducer: {
        currentUser: currentUser
    }
}

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;