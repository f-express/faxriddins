import { createStore } from 'redux'
import {basketReducer, reducer} from './reducer'
import rootReducer from './combineReducers'

const store = createStore(rootReducer)
export { store }