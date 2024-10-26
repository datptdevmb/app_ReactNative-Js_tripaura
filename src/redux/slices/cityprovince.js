import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProvinces = createAsyncThunk(
  'provinces/fetchProvinces',
  async () => {
    const response = await fetch('https://provinces.open-api.vn/api/');
    if (!response.ok) {
      throw new Error('Failed to fetch provinces');
    }
    const data = await response.json();
    console.log("Fetched Provinces: ", data); 
    return data;
  }
);


const provincesSlice = createSlice({
  name: 'provinces',
  initialState: {
    provinces: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProvinces.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProvinces.fulfilled, (state, action) => {
        state.loading = false;
        state.provinces = action.payload;
        console.log("Provinces in State after fetch: ", state.provinces);
      })
      .addCase(fetchProvinces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default provincesSlice.reducer;
