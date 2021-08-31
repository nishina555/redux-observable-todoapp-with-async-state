import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import rootEpic from "./epics";
import { createEpicMiddleware } from "redux-observable";

const epicMiddleware = createEpicMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

export default store;
