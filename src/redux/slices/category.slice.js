import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Category from "../../sevices/category.sevice"



export const fetchCategory = createAsyncThunk(
    'category/fetchCategories', async () => {
        try {
            const reponse = await Category.getCategories();
            return reponse.data.data
        } catch (error) {
            throw error;
        }
    }
)

const initialState = {
    categories: [],
    loading: false,
    err: null
}

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.categories = action.payload
            state.loading = false
        })
        builder.addCase(fetchCategory.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchCategory.rejected, (state, action) => {
            state.loading = false
            console.log('Đăng nhập thất bại:', action.error.message);
            state.err = action.error.message;
        })
    }
})

export default categorySlice.reducer
