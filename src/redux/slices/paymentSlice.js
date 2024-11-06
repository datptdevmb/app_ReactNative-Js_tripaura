import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createPayment = createAsyncThunk('payment/createPaymentLink', async (paymentData) => {
    console.log('paymentdata',paymentData);
    
    const response = await fetch('https://trip-aura-server.vercel.app/payment/create-payment-link', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
    });
    const responseData = await response.json();
    console.log('Response from server:', responseData);

    if (!response.ok) {
        throw new Error(responseData.message || 'Failed to create payment');
    }

    return responseData;
});

const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        paymentInfo: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPayment.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createPayment.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.paymentInfo = action.payload; 
            })
            .addCase(createPayment.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message; 
                console.log('state.error', state.error);
                
            });
    },
});

export default paymentSlice.reducer;
