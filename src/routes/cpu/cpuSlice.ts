import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CpuData } from './cpuHandler';

export interface OsState {
  status: 'idle' | 'loading' | 'failed';
  cpuData?: CpuData;
}

const initialState: OsState = {
  status: 'idle'
};

export const getCpuData = createAsyncThunk('cpu/getCpuData', async () => {
  return await window.electron.cpu();
});

export const cpuSlice = createSlice({
  name: 'cpu',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getCpuData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCpuData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cpuData = action.payload;
      })
      .addCase(getCpuData.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export default cpuSlice.reducer;