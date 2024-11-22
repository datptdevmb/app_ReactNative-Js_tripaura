import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authenReducer from './slices/auth.slice';
import tourReducer from './slices/tour.slice';
import categoryReducer from './slices/category.slice';
import networkReducer from './slices/network.slice';
import imageSliderReducer from './slices/image.slice';
import favoriteReducer from './slices/favouriteducers';
import filterTourReducer from './slices/filterTourSlice';
import searchTourReducer from './slices/searchTourSlice';
import changeUserReducer from './slices/ChangeUserSlice';
import provincesReducer from './slices/cityprovince';
import districtReducer from './slices/district';
import getuserReducer from './slices/getUserbyID';
import paymentReducer from './slices/paymentSlice';
import bookingReducer from './slices/booking.slice';
import voucherReducer from './slices/vouchersSlice';
import reviewReducer from './slices/reviewTourducers';

const rootReducer = combineReducers({
  tour: tourReducer,
  auth: authenReducer,
  category: categoryReducer,
  network: networkReducer,
  images: imageSliderReducer,
  favorites: favoriteReducer,
  changeUser: changeUserReducer,
  provinces: provincesReducer,
  district: districtReducer,
  getUser: getuserReducer,
  filterTour: filterTourReducer,
  searchTour: searchTourReducer,
  changeUser: changeUserReducer,
  payment: paymentReducer,
  booking: bookingReducer,
  // favoriteAdDelete: favoriteAdDeleteReducer,
  // favouriteDelete: favouriteDeleteReducer,
  vouchers: voucherReducer,
  reviews: reviewReducer,

});

// Configure the store

const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
