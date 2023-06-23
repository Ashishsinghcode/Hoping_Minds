import { createStore } from "redux"
import { counterReducer } from "../Reducer/CounterReducer"
import { multiplierReducer } from "../Reducer/MultiplierReducer"
import { loginReducer } from "../Reducer/LoginReducer"
import { allReducers } from "../Reducer"

export const myStore = createStore(allReducers)
// export const myStore2 = createStore(multiplierReducer)
// export const login = createStore(loginReducer)
