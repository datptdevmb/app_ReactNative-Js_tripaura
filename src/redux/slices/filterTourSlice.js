import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//tạo hàm DangKyTaiKhoan để thực hiện chức năng gọi API đăng ký tài khoản
export const FilterTour = createAsyncThunk('filterTour', async data => {
    // console.log("==============data==============",data);

    const response = await fetch(
        `https://trip-aura-server-git-main-minhnhut2306s-projects.vercel.app/tour/api/searchTour`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        },
    );
    const tours = await response.json();
    if (response.ok) {
        // console.log("=======================", tours);
        return tours;
    }
    throw new Error('Failed');
});

//tạo Slice quản lý trạng thái khi gọi hàm DangKyTaiKhoan
export const filterTourSlice = createSlice({
    name: 'filterTour',
    initialState: {
        filterTourData: {},
        filterTourStatus: 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(FilterTour.pending, (state, action) => {
                state.filterTourStatus = 'loading';
            })
            .addCase(FilterTour.fulfilled, (state, action) => {
                state.filterTourStatus = 'succeeded';
                // state.changeUserData = action.payload;
                state.filterTourData = action.payload;
            })
            .addCase(FilterTour.rejected, (state, action) => {
                state.filterTourStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default filterTourSlice.reducer;
