import { combineReducers } from "redux";
import { counterReducer } from "./CounterReducer";
import { loginReducer } from "./LoginReducer";
import { multiplierReducer } from "./MultiplierReducer";

export const allReducers =combineReducers({counter:counterReducer,login:loginReducer,multiply:multiplierReducer})