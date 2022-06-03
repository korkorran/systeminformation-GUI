import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import processusListReducer from 'src/routes/processus/processusListSlice';
import systemReducer from 'src/routes/system/systemSlice';
import osReducer from 'src/routes/os/osSlice';
import graphicsSlice from 'src/routes/graphics/graphicsSlice';
import cpuSlice from 'src/routes/cpu/cpuSlice';
import audioSlice from 'src/routes/audio/audioSlice';
import batterySlice from 'src/routes/battery/batterySlice';
import memorySlice from 'src/routes/memory/memorySlice';
import usbSlice from 'src/routes/usb/usbSlice';
import printerSlice from 'src/routes/printer/printerSlice';
import networkSlice from 'src/routes/network/networkSlice';

export const store = configureStore({
  reducer: {
    processusList: processusListReducer,
    system: systemReducer,
    os: osReducer,
    graphics: graphicsSlice,
    cpu: cpuSlice,
    audio: audioSlice,
    battery: batterySlice,
    memory: memorySlice,
    usb: usbSlice,
    printer: printerSlice,
    network: networkSlice
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
