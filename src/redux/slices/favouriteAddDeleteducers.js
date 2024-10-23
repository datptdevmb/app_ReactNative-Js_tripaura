import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// Thêm hoặc xóa tour yêu thích
export const themXoaYeuThichTour = createAsyncThunk(
  'favorites/toggle',
  async ({userId, tourId}) => {
    console.log(userId ,tourId)
    // Gọi API để thêm hoặc xóa tour yêu thích
    const response = await fetch(
      'https://trip-aura-server.vercel.app/favourite/api/favourite',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId, tourId}), // Gửi userId và tourId
      },
    );

    const data = await response.json();
    console.log('API response:', data);

    if (data.status === 'success') {
      return {tourId, action: 'add'};
    } else {
      return {tourId, action: 'remove'};
    }
  },
);

const initialState = {
  favoritesData: [],
  favoritesStatus: 'idle',
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(themXoaYeuThichTour.pending, state => {
        state.favoritesStatus = 'loading'; // Cập nhật trạng thái khi đang gọi API
      })
      .addCase(themXoaYeuThichTour.fulfilled, (state, action) => {
        if (action.payload.action === 'add') {
          // Thêm tourId vào danh sách nếu chưa có
          if (!state.favoritesData.includes(action.payload.tourId)) {
            state.favoritesData.push(action.payload.tourId);
          }
        } else if (action.payload.action === 'remove') {
          // Xóa tourId khỏi danh sách nếu đã có
          state.favoritesData = state.favoritesData.filter(
            id => id !== action.payload.tourId,
          );
        }
        state.favoritesStatus = 'success';
      })
      .addCase(themXoaYeuThichTour.rejected, (state, action) => {
        state.favoritesStatus = 'failed';
        state.error = action.error.message;
        console.log('API request failed with error:', action.error.message);
      });
  },
});

export default favoriteSlice.reducer;
