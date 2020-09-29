import { createStore } from "redux";
import AddTrans from "./reducers/transactionreducer";

var store = createStore(
  AddTrans,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
