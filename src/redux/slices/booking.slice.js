import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const fetchBooking = createAsyncThunk('booking/fetchBooking', async data => {
    const response = await fetch(
        'https://trip-aura-server.vercel.app/booking/api/addToCart',
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

const initialState = {
    bookings: [],
    loading: false,
    err: null
}

const categorySlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBooking.fulfilled, (state, action) => {
            state.bookings = action.payload
            state.loading = false
        })
        builder.addCase(fetchBooking.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchBooking.rejected, (state, action) => {
            state.loading = false
            state.err = action.error.message;
        })
    }
})

export default categorySlice.reducer
