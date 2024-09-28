// src/api/reducers.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLocations = createAsyncThunk('locations/fetchLocations', async () => {
    const response = await fetch('https://esgoo.net/api-tinhthanh/4/0.htm'); // Thay đổi URL cho API của bạn
    const data = await response.json();
    return data; // Đảm bảo data là một mảng các tỉnh
});

const initialState = {
    provinces: [], // Khởi tạo là mảng rỗng
    districts: [],
    loading: false,
};

const locationsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        setDistricts: (state, action) => {
            state.districts = action.payload; // Cập nhật danh sách quận
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLocations.fulfilled, (state, action) => {
                state.provinces = action.payload; // Cập nhật provinces
                state.loading = false; // Đặt loading thành false
            })
            .addCase(fetchLocations.pending, (state) => {
                state.loading = true; // Đặt loading thành true khi fetch đang tiến hành
            });
    },
});

export const { setDistricts } = locationsSlice.actions;

export const selectProvinces = (state) => state.locations.provinces;
export const selectDistricts = (state) => state.locations.districts;
export const selectLoading = (state) => state.locations.loading;

export default locationsSlice.reducer;
