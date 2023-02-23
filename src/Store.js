import { createStore } from "redux";
import Reducer from './Reducer';
const intitalState={}
const store = createStore(Reducer,intitalState);
export default store;