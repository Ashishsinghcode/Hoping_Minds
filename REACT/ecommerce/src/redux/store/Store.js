import { createStore } from "redux";
import { addToCart } from "../reducer/addToCartReducer";

export const bikeStore = createStore(addToCart)