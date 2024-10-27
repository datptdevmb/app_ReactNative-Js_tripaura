import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchUserInfo = createAsyncThunk('user/fetchInfo', async (userId) => {
    const response = await fetch(
        `https://trip-aura-server-git-main-minhnhut2306s-projects.vercel.app/auth/user/${userId}`, 
        {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );

    const user = await response.json();

    if (response.ok) {
        return user;
    }
    throw new Error(user.message || 'Failed to fetch user information');
});

export const changeUserSlice = createSlice({
    name: 'user',
    initialState: {
        changeUserStatus: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserInfo.pending, (state) => {
                state.changeUserStatus = 'loading';
                state.error = null;
            })
            .addCase(fetchUserInfo.fulfilled, (state, action) => {
                state.changeUserStatus = 'succeeded';
                state.user = action.payload;
            })
            .addCase(fetchUserInfo.rejected, (state, action) => {
                state.changeUserStatus = 'failed';
                state.error = action.error.message;
            });
    },
});

export default changeUserSlice.reducer;
