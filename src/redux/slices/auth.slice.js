import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { register } from "../../services/auth/userAuth";


export const fetchUser = createAsyncThunk(
  'auth/fetchUser', async (userData, thunkApi) => {
    try {
      const response = await register(userData);
      return response;
    } catch (error) {
      throw error;
    }
  }
)

const initialState = {
  user: {},
  loading: false,
  err: null
}

const authenSlice = createSlice({
  name: 'authen',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false
    })
    builder.addCase(fetchUser.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false
      console.log('Đăng nhập thất bại:', action.error.message);
      state.err = action.error.message; 
    })
  }
})

export default authenSlice.reducer
