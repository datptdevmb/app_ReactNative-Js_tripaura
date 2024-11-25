
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authenReducer from "./slices/auth.slice";
import tourReducer from "./slices/tour.slice";
import categoryReducer from './slices/category.slice'
import networkReducer from './slices/network.slice'
import imageSliderReducer from './slices/image.slice'
import favoriteReducer from './slices/favouriteducers'
import filterTourReducer from './slices/filterTourSlice'
import searchTourReducer from './slices/searchTourSlice'
import changeUserReducer from './slices/ChangeUserSlice';
import provincesReducer from './slices/cityprovince';
import districtReducer from './slices/district';
import getuserReducer from './slices/getUserbyID';
import voucherReducer from './slices/vouchersSlice';
import reviews from './slices/reviewTourducers'


import paymentReducer from './slices/paymentSlice'; 
import bookingReducer from './slices/booking.slice'; 


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
<<<<<<< HEAD

  vouchers : voucherReducer,

  payment: paymentReducer,
  booking: bookingReducer,
  // favoriteAdDelete: favoriteAdDeleteReducer,
  // favouriteDelete: favouriteDeleteReducer,

=======
  vouchers : voucherReducer,
  reviews:voucherReducer
>>>>>>> aee1b1af7168e56a7fc252ee383cc92f7ccf3b19


});

// Configure the store

const store = configureStore({

  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  reducer: {
    reducer: rootReducer,

  }
});


export default store;