import PokemonReducer from './Reducers/PokemonReducer'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    PokemonReducer: PokemonReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;