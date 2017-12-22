import { createStore, applyMiddleware, compose, Store, Middleware, Reducer } from "redux";
//import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./../Reducers/RootReducer";
import { StoreState } from "./StoreState";

export function configureStore(initialState?: StoreState): Store<StoreState> {
    const middlewares: Middleware[] = [
        thunkMiddleware,
    ];

    const composeEnhancers = compose;

    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares),
    ));
    return store;
}