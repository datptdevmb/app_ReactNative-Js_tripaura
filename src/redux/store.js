
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authenReducer from "./slices/auth.slice";
import tourReducer from "./slices/tour.slice";
import categoryReducer from './slices/category.slice'
import networkReducer from './slices/network.slice'
import imageSliderReducer from './slices/image.slice'
import favoriteReducer from './slices/favouriteducers'
import filterTourReducer from './slices/filterTourSlice'
import searchTourReducer from './slices/searchTourSlice'
import favoriteAdDeleteReducer from './slices/favouriteAddDeleteducers'
import favouriteDeleteReducer from './slices/favouriteDeleteDucers'

import changeUserReducer from './slices/ChangeUserSlice';
import provincesReducer from './slices/cityprovince';
import districtReducer from './slices/district';
import getuserReducer from './slices/getUserbyID';
import loginReducer from './slices/loginreducers';
import registerReducer from './slices/registerreducers';

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
  login: loginReducer,
  register: registerReducer,
  // favoriteAdDelete: favoriteAdDeleteReducer,
  // favouriteDelete: favouriteDeleteReducer,
})
const store = configureStore({
  reducer: {
    reducer: rootReducer,

  },

});

export default store;
