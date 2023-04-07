import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
