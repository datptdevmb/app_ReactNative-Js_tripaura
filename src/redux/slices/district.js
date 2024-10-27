import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDistricts = createAsyncThunk(
    'districts/fetchDistricts',
    async () => {
        const response = await fetch('https://provinces.open-api.vn/api/d/');
        if (!response.ok) {
            throw new Error('Failed to fetch districts');
        }
        const data = await response.json();
        console.log("Fetched Data:", data); // Log toàn bộ dữ liệu đã lấy
        return data; // Trả về toàn bộ dữ liệu
    }
);



const districtSlice = createSlice({
    name: 'districts',
    initialState: {
        districts: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDistricts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDistricts.fulfilled, (state, action) => {
                console.log("Fetched Districts:", action.payload); // Log districts được fetch
                state.status = 'succeeded'; // Cập nhật trạng thái thành công
                state.districts = action.payload; // Cập nhật vào state
            })
            .addCase(fetchDistricts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default districtSlice.reducer;
