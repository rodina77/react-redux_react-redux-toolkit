import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { bankreducer } from "./reducers/bankreducer";
import { productReducer } from "./reducers/produvtsreducer";
const appReducer = combineReducers({
  bank:bankreducer,
  product:productReducer,
}
)
export const store = createStore(appReducer,applyMiddleware(thunk));