import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import processusListReducer from 'src/routes/processus/processusListSlice';

export const store = configureStore({
  reducer: {
    processusList: processusListReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
