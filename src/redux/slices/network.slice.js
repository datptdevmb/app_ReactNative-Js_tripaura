import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isConnected: true,
};

const networkSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    setIsConnected(state, action) {
      state.isConnected = action.payload;
    },
  },
});

export const {setIsConnected} = networkSlice.actions;

export default networkSlice.reducer;
