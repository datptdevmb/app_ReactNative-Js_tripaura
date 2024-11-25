import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ToastAndroid } from 'react-native';

export const DangKyTaiKhoan = createAsyncThunk('auth/register', async (data) => {
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
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed');
    }

    return await response.json(); 
});

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        registerStatus: 'idle', 
        registerData: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(DangKyTaiKhoan.pending, (state) => {
                state.registerStatus = 'loading';
            })
            .addCase(DangKyTaiKhoan.fulfilled, (state, action) => {
                state.registerStatus = 'succeeded';
                state.registerData = action.payload;
                ToastAndroid.show(action.payload.message, ToastAndroid.SHORT);
            })
            .addCase(DangKyTaiKhoan.rejected, (state, action) => {
                state.registerStatus = 'failed';
                const errorMessage = action.payload?.message || 'Đăng ký không thành công';
                ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
<<<<<<< HEAD
=======

>>>>>>> 8fd71a664d1c1ba1f0c54154897dbaf96aea97d1
            });
    },
});

export default registerSlice.reducer;
