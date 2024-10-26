import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk để thêm hoặc xóa tour yêu thích
export const themXoaYeuThichTour = createAsyncThunk(
  'favorites/toggle',
  async ({ userId, tourId }, { dispatch }) => {
    // Gọi API để thêm hoặc xóa tour yêu thích
    const response = await fetch(
      'https://trip-aura-server.vercel.app/favourite/api/favourite',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, tourId }),
      },
    );

    const data = await response.json();

    // Nếu thành công, gọi lại danh sách yêu thích
    if (data.status === 'success') {
      // Gọi lại danh sách yêu thích
      await dispatch(LayDanhSachYeuThich(userId));
      return { tourId, action: data.action }; // Gửi tourId và hành động (add/remove) về
    } else {
      throw new Error('Thao tác không thành công');
    }
  },
);
// Thunk để lấy danh sách yêu thích
export const LayDanhSachYeuThich = createAsyncThunk(
  'favorites/getFavorites',
  async (userId) => {
    const response = await fetch(
      `https://trip-aura-server.vercel.app/favourite/api/getFavouriteByUser?userId=${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    return data;
  },
);
const initialState = {
  favoritesData: [],
  favoritesStatus: 'idle',
  error: null,
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Xử lý thêm/xóa yêu thích
      .addCase(themXoaYeuThichTour.pending, (state) => {
        state.favoritesStatus = 'loading';
      })
      .addCase(themXoaYeuThichTour.fulfilled, (state, action) => {
        // Không cần làm gì ở đây vì danh sách đã được cập nhật trong `LayDanhSachYeuThich`
        state.favoritesStatus = 'success';
      })
      .addCase(themXoaYeuThichTour.rejected, (state, action) => {
        state.favoritesStatus = 'failed';
        state.error = action.error.message;
      })
      // Xử lý lấy danh sách yêu thích
      .addCase(LayDanhSachYeuThich.pending, (state) => {
        state.favoritesStatus = 'loading';
      })
      .addCase(LayDanhSachYeuThich.fulfilled, (state, action) => {
        if (action.payload.status === 'success') {
          state.favoritesStatus = 'success';
          state.favoritesData = action.payload.data; // Cập nhật danh sách yêu thích
        } else {
          state.favoritesStatus = 'failed';
        }
      })
      .addCase(LayDanhSachYeuThich.rejected, (state, action) => {
        state.favoritesStatus = 'failed';
        state.error = action.error.message;
      });
  },
});

export default favoriteSlice.reducer;

