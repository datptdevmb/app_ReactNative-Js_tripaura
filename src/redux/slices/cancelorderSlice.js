

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addCancelOrder = createAsyncThunk(
    'cancelOrder/addCancelOrder',
    async (cancelData, thunkAPI) => {
        try {
            const response = await fetch('https://trip-aura-server.vercel.app/cancelorder/add-cancel-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cancelData),
            });

            const data = await response.json();

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


const cancelOrderSlice = createSlice({
    name: 'cancelOrder',
    initialState: {
        order: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addCancelOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addCancelOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.order = action.payload;
            })
            .addCase(addCancelOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default cancelOrderSlice.reducer;
