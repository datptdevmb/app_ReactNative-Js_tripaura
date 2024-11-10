import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//tạo hàm DangKyTaiKhoan để thực hiện chức năng gọi API đăng ký tài khoản
export const SearchTour = createAsyncThunk('searchTour', async data => {
    // console.log("==============data==============",data);

    const response = await fetch(
        `https://trip-aura-server-git-main-minhnhut2306s-projects.vercel.app/tour/api/findByName?name=${data}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
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
export const searchTourSlice = createSlice({
    name: 'searchTour',
    initialState: {
        searchTourData: {},
        searchTourStatus: 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(SearchTour.pending, (state, action) => {
                state.searchTourStatus = 'loading';
            })
            .addCase(SearchTour.fulfilled, (state, action) => {
                state.searchTourStatus = 'successed';
                // state.changeUserData = action.payload;
                state.searchTourData = action.payload;
            })
            .addCase(SearchTour.rejected, (state, action) => {
                state.searchTourStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default searchTourSlice.reducer;
