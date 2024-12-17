import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchDetailTicket = createAsyncThunk(
    'detail/fetchDetailTicket',
    async (detailid, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://trip-aura-server.vercel.app/detail/ticket/${detailid}`);
            if (!response.ok) {
                throw new Error('Failed to fetch booking by ID');
            }
            console.log('Fetching detail', response);
            
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
const detailTicketSlice = createSlice({
    name: 'detailTicket',
    initialState: {
        getTotalTicketData: {},
        getTotalTicketStatus: 'idle', 
        error: null, 
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetailTicket.pending, (state) => {
                state.getTotalTicketStatus = 'loading';
                state.error = null; 
            })
            .addCase(fetchDetailTicket.fulfilled, (state, action) => {
                state.getTotalTicketStatus = 'succeeded'; 
                state.getTotalTicketData = action.payload;
            })
            .addCase(fetchDetailTicket.rejected, (state, action) => {
                state.getTotalTicketStatus = 'failed'; 
                state.error = action.payload; 
            });
    },
});


export default detailTicketSlice.reducer;