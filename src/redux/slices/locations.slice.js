import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Tạo async thunk để fetch danh sách tỉnh từ API
export const fetchLocations = createAsyncThunk(
    'locations/fetchLocations', 
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://esgoo.net/api-tinhthanh/4/0.htm'); // Thay đổi URL cho API của bạn
            if (!response.ok) {
                throw new Error('Failed to fetch provinces');
            }
            const data = await response.json();
            return data; // Đảm bảo data là một mảng các tỉnh
        } catch (error) {
            return rejectWithValue(error.message); // Trả về lỗi nếu fetch thất bại
        }
    }
);

const initialState = {
    provinces: [], // Khởi tạo là mảng rỗng
    districts: [], // Khởi tạo là mảng rỗng
    loading: false, // Trạng thái loading ban đầu
    error: null, // Trạng thái lỗi ban đầu là null
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
            .addCase(fetchLocations.pending, (state) => {
                state.loading = true; 
                state.error = null;
            })
            .addCase(fetchLocations.fulfilled, (state, action) => {
                state.provinces = action.payload; 
                state.loading = false; 
            })
            .addCase(fetchLocations.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch provinces';
            });
    },
});

// Export các action và selectors
export const { setDistricts } = locationsSlice.actions;

export const selectProvinces = (state) => state.locations.provinces;
export const selectDistricts = (state) => state.locations.districts;
export const selectLoading = (state) => state.locations.loading;
export const selectError = (state) => state.locations.error; // Selector để lấy lỗi

export default locationsSlice.reducer;
