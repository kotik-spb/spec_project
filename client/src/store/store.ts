import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// TODO: REDUCER
// userReducer - isAuth, currentUser: IUser
// appReducer - alertVisible: boolean, alertMsg: string, alertColor: red | green | yellow
export const store = configureStore({
  reducer: {},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
