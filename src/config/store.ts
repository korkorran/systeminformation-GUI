import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import processusListReducer from 'src/routes/processus/processusListSlice';
import systemReducer from 'src/routes/system/systemSlice';
import osReducer from 'src/routes/os/osSlice';

export const store = configureStore({
  reducer: {
    processusList: processusListReducer,
    system: systemReducer,
    os: osReducer
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
