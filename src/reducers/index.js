import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import {combineReducers} from "redux";

const allReducer = combineReducers({
    //we can give any name here and would access by using this name
    counter: counterReducer,
    isLogged: loggedReducer
})

export default allReducer