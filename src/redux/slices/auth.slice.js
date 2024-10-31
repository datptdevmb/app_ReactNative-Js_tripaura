import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { register, googleLogin, updateUser } from '../../sevices/auth/auth.service'; // Đảm bảo bạn có updateUser trong service
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      await AsyncStorage.setItem('userId', JSON.stringify(response));
      console.log('Thông tin người dùng đã được lưu vào AsyncStorage');
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const checkLoginStatus = createAsyncThunk('auth/checkLoginStatus', async () => {
  const userData = await AsyncStorage.getItem('userId');
  if (userData) {
    return { isLogin: true, user: JSON.parse(userData) }; 
  } else {
    return { isLogin: false, user: null };
  }
});

// Hành động để cập nhật thông tin người dùng
export const changeUser = createAsyncThunk(
  'auth/changeUser',
  async (userData, thunkApi) => {
    try {
      const response = await updateUser(userData); // Gọi hàm updateUser
      await AsyncStorage.setItem('userId', JSON.stringify(response)); // Cập nhật AsyncStorage
      return response;
    } catch (error) {
      throw error;
    }
  },
);

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

    // Xử lý trạng thái khi kiểm tra đăng nhập
    builder.addCase(checkLoginStatus.fulfilled, (state, action) => {
      state.isLogin = action.payload.isLogin;
      state.user = action.payload.user || {};  // Nếu không có user, đặt thành object rỗng
      state.loading = false;
    });
    builder.addCase(checkLoginStatus.pending, state => {
      state.loading = true;
    });
    builder.addCase(checkLoginStatus.rejected, (state, action) => {
      state.loading = false;
      console.log('Kiểm tra đăng nhập thất bại:', action.error.message);
      state.err = action.error.message;
    });

    // Xử lý trạng thái cập nhật thông tin người dùng
    builder.addCase(changeUser.fulfilled, (state, action) => {
      state.user = { ...state.user, ...action.payload }; // Cập nhật chỉ những trường cần thiết
      state.loading = false;
    });
    builder.addCase(changeUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(changeUser.rejected, (state, action) => {
      state.loading = false;
      console.log('Cập nhật thông tin người dùng thất bại:', action.error.message);
      state.err = action.error.message;
    });
  },
});

export default authenSlice.reducer;
