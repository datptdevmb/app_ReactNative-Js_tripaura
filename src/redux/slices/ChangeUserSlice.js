import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thay đổi thông tin người dùng
export const ThayDoiThongTin = createAsyncThunk('changeUser', async (data) => {
    const response = await fetch(
        'https://trip-aura-server-git-main-minhnhut2306s-projects.vercel.app/auth/api/updateUser',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        },
    );
    const user = await response.json();

    if (response.ok) {
        console.log("============== changeUser =========", user);
        return user;
    }

    console.error('Update user failed:', user);
    throw new Error(user.message || 'Failed');
});


export const changeUserSlice = createSlice({
    name: 'changeUser',
    initialState: {
        user: null, // Thêm trường này
        changeUserData: null,
        changeUserStatus: 'idle',
        error: null,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ThayDoiThongTin.pending, (state) => {
                state.changeUserStatus = 'loading';
                state.error = null;
            })
        
            .addCase(ThayDoiThongTin.fulfilled, (state, action) => {
                state.changeUserStatus ='succeeded';
                state.user = action.payload;
                console.log('Redux user sau khi cập nhật:', state.user); // Log để kiểm tra giá trị
            })


            .addCase(ThayDoiThongTin.rejected, (state, action) => {
                state.changeUserStatus = 'failed';
                state.error = action.error.message;
                console.log(action.error.message);
            });
    },
});

export default changeUserSlice.reducer;
