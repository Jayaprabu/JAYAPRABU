import { combineReducers, Reducer } from "redux";
import countReducer from "./CountReducer";
import { StoreState } from "../State/StoreState";

const rootReducer: Reducer<StoreState> = combineReducers<StoreState>({
    count: countReducer,
});

export default rootReducer;