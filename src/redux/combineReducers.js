import { combineReducers } from "redux";
import {reducer,basketReducer} from './reducer'

const rootReducer = combineReducers({
    create: reducer,
    basket: basketReducer
})

export default rootReducer