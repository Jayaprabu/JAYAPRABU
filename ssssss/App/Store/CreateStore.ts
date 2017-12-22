import { createStore, applyMiddleware, compose, Store, Middleware, Reducer} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from "./../Reducers/RootReducer";
import { StoreState } from '../State/StoreState';

export function configureStore(initialState?: StoreState): Store<StoreState>{

     const middlewares: Middleware[] = [
        thunkMiddleware,
    ];
    
    const composeEnhancers = compose;

      const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares),
    ));
    return store;
}