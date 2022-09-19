import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const preLoadedState = {};
export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  preLoadedState
});
