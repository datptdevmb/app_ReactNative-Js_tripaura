import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../constants/api';


export const fetchImages = createAsyncThunk(
  'image/fetchImages',
  async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}adv/api/getAll`); 
      return response.data.data[0].image
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const initialState = {
  images: [],
  loading: false,
  error: null,
};

const imageSliderSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload; 
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default imageSliderSlice.reducer;
