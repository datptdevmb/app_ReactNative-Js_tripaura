// DropdownSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Nếu bạn có một asynchronous action
export const fetchDropdownData = createAsyncThunk(
    'dropdown/fetchData',
    async () => {
        // Fetch data từ API hoặc nguồn khác
    }
);

const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDropdownData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDropdownData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDropdownData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Xuất khẩu reducer và actions
export const { actions, reducer } = dropdownSlice;
export default reducer;
