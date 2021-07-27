import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/User';


export default configureStore({
  reducer: {
    user: userReducer,

  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
