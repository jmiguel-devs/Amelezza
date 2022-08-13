import { createStore } from "redux";
import cartReducer from '../Reducers/Reducers.js'

const store = createStore(cartReducer);

export default store;