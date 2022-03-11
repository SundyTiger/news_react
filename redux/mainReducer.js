import NewsReducer from "./reducer";
import { createStore } from "redux";

let store = createStore(NewsReducer);

return store;
