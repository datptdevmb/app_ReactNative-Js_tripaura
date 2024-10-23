import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {register, googleLogin} from '../../sevices/auth/auth.service'; // Nhập googleLogin từ service

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (userData, thunkApi) => {
    try {
      const response = await register(userData);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const fetchGoogleUser = createAsyncThunk(
  'auth/fetchGoogleUser',
  async (googleUserData, thunkApi) => {
    try {
      const response = await googleLogin(googleUserData);
      return response;
    } catch (error) {
      throw error;
    }
  },
);
export const checkLoginStatus = createAsyncThunk('auth/checkLoginStatus', async () => {
  const userData = await AsyncStorage.getItem('userId');
  return userData != null;
});
const initialState = {
  user: {},
  isLogin: false,
  loading: false,
  err: null,
};

const authenSlice = createSlice({
  name: 'authen',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Xử lý trạng thái cho đăng ký
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      console.log('Đăng ký thất bại:', action.error.message);
      state.err = action.error.message;
    });

    // Xử lý trạng thái cho đăng nhập bằng Google
    builder.addCase(fetchGoogleUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(fetchGoogleUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchGoogleUser.rejected, (state, action) => {
      state.loading = false;
      console.log('Đăng nhập Google thất bại:', action.error.message);
      state.err = action.error.message;
    });
  },
});

export default authenSlice.reducer;
