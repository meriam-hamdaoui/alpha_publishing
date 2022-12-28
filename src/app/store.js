import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import subscriberSlice from "./subscriberReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(
  {
    reducer: {
      subscriber: subscriberSlice,
    },
  },
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
