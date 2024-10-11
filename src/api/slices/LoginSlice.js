import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//tạo hàm DangKyTaiKhoan để thực hiện chức năng gọi API đăng ký tài khoản
export const DangNhap = createAsyncThunk('login', async data => {
    const response = await fetch(
        'https://trip-aura-server-git-main-minhnhut2306s-projects.vercel.app/auth/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        },
    );
    const user = await response.json();
    if (response.ok) {
        return user;
    }
    throw new Error('Failed');
});

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loginData: {},
        loginStatus: 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(DangNhap.pending, (state, action) => {
                state.loginStatus = 'loading';
            })
            .addCase(DangNhap.fulfilled, (state, action) => {
                state.loginStatus = 'successed';
                // state.changeUserData = action.payload;
                state.loginData = action.payload;
            })
            .addCase(DangNhap.rejected, (state, action) => {
                state.loginStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default loginSlice.reducer;
