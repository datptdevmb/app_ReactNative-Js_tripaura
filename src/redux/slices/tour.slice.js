import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Tour from '../../sevices/tour/tour.sevice';

export const fetchTours = createAsyncThunk(
  'tour/fetchToursBycate',
  async cateId => {
    try {
      const tours = await Tour.getTourByCateId(cateId);
      return tours.data;
    } catch (error) {
      throw error;
    }
  },
);

export const fetchTourById = createAsyncThunk(
  'tour/fetchTourById',
  async (tourId) => {
    try {
      const tours = await Tour.getTourById(tourId);
      console.log(tours)
      return tours;
    } catch (error) {
    
    }
  },
);


export const fetchPopularTour = createAsyncThunk(
  'tour/fetchPopularTour',
  async () => {
    try {
      const tours = await Tour.getPopularTours();
      return tours;
    } catch (error) {
    console.log(error)
    }
  },
);

const initialState = {
  tours: [],
  popularTours:[],
  tourById: {},
  loading: false,
  err: null,
};

const tourSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTours.fulfilled, (state, action) => {
      state.tours = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTours.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTours.rejected, (state, action) => {
      state.loading = false;
      console.log('Đăng nhập thất bại:', action.error.message);
      state.err = action.error.message;
    });

    // Fetch tour by ID
    builder.addCase(fetchTourById.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchTourById.fulfilled, (state, action) => {
      state.tourById = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTourById.rejected, (state, action) => {
      state.loading = false;
      console.error('Fetch tour by ID failed:', action.payload);
    });


    builder.addCase(fetchPopularTour.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPopularTour.fulfilled, (state, action) => {
      state.popularTours = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPopularTour.rejected, (state, action) => {
      state.loading = false;
      console.error('Fetch tour by ID failed:', action.payload);
    });
  },
});

export default tourSlice.reducer;
