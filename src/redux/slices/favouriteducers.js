import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const LayDanhSachYeuThich = createAsyncThunk(
  'favorites/getFavorites',
  async favoriteId => {
    const response = await fetch(
      'https://trip-aura-server.vercel.app/favourite/api/getFavouriteByUser',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userId: favoriteId}),
      },
    );
    const data = await response.json();
    // console.log('API response:', data);
    return data;
  },
);

const initialState = {
  favoritesData: [],
  favoritesStatus: 'idle',
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState, // Sử dụng giá trị mặc định ở đây
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(LayDanhSachYeuThich.pending, state => {
        state.favoritesStatus = 'loading';
      })
      .addCase(LayDanhSachYeuThich.fulfilled, (state, action) => {
        if (action.payload.status === 'success') {
          state.favoritesStatus = 'success';
          state.favoritesData = action.payload.data;
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
