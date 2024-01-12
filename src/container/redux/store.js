import { createStore } from "redux";
import {reducer} from './reducers/index.js'

const store =createStore(reducer, {}, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() )

export default store