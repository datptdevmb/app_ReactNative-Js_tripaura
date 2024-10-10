import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Tour from '../../sevices/tour/tour.sevice';

export const fetchTours = createAsyncThunk('tour/fetchToursBycate', async (cateId) => {
    
  try {
    const tours = await Tour.getTourByCateId(cateId);
    return tours.data
  } catch (error) {
    throw error;
  }
});

const initialState = {
  tours: [],
  loading: false,
  err: null,
};

const tourSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTours.fulfilled, (state, action) => {
      state.tours = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTours.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTours.rejected, (state, action) => {
      state.loading = false;
      console.log('Đăng nhập thất bại:', action.error.message);
      state.err = action.error.message;
    });
  },
});

export default tourSlice.reducer;
