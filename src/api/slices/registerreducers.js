import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

//tạo hàm DangKyTaiKhoan để thực hiện chức năng gọi API đăng ký tài khoản
export const DangKyTaiKhoan = createAsyncThunk('auth/register', async data => {
  const response = await fetch(
    'https://trip-aura-server.vercel.app/auth/register',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  if (!response.ok) {
    throw new Error('Failed');
  }
  return await response.json();
});

//tạo Slice quản lý trạng thái khi gọi hàm DangKyTaiKhoan
export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    registerData: {},
    registerStatus: 'idle',
},
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(DangKyTaiKhoan.pending, (state, action) => {
        state.registerStatus = 'loading';
      })
      .addCase(DangKyTaiKhoan.fulfilled, (state, action) => {
        state.registerStatus = 'succeeded';
        state.registerData = action.payload;
      })
      .addCase(DangKyTaiKhoan.rejected, (state, action) => {
        state.registerStatus = 'failed';
        console.log(action.error.message);
      });
  },
});

export default registerSlice.reducer;
