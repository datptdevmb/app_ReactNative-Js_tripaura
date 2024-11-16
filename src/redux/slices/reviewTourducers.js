import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// Thunk để lấy danh sách đánh giá của người dùng
export const LayDanhSachDanhGia = createAsyncThunk(
  'reviews/getReviewsByTourId',
  async tourId => {
    const response = await fetch(
      `https://trip-aura-server.vercel.app/review/api/getByTourId`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({tourId}),
      },
    );
    const data = await response.json();
    console.log('data', data);
    return data;
  },
);

const initialState = {
  reviewsData: [],
  reviewsStatus: 'idle',
  error: null,
};

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(LayDanhSachDanhGia.pending, state => {
        state.reviewsStatus = 'loading';
      })
      .addCase(LayDanhSachDanhGia.fulfilled, (state, action) => {
        console.log('Data:', action.payload);
        state.reviewsStatus = 'success';
        state.reviewsData = action.payload.data;
      })
      .addCase(LayDanhSachDanhGia.rejected, (state, action) => {
        state.reviewsStatus = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reviewSlice.reducer;