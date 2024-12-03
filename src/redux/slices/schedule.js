import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Async thunk to add a schedule
export const addLichTrinh = createAsyncThunk(
  'lt/addlichtr',
  async (scheduleData, thunkApi) => {
    const { departure, destination, endDay, name, person, startDay } = scheduleData;

    try {
      const response = await fetch(`https://trip-aura-server.vercel.app/lichTrinh/api/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ departure, destination, endDay, name, person, startDay }),
      });

      if (!response.ok) {
        // Handle HTTP errors
        const error = await response.text();
        throw new Error(`Error ${response.status}: ${error}`);
      }

      const data = await response.json(); // Parse the response body
      return data; // Return the parsed data
    } catch (error) {
      // Pass error to rejected action
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: {}, // Schedule data
  loading: false, // Loading state
  error: null, // Error state
};

const lTSlice = createSlice({
  name: 'lichTrinh',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addLichTrinh.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors
      })
      .addCase(addLichTrinh.fulfilled, (state, action) => {
        state.data = action.payload; // Save response data
        state.loading = false;
      })
      .addCase(addLichTrinh.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to add schedule'; // Capture error message
      });
  },
});

export default lTSlice.reducer;
