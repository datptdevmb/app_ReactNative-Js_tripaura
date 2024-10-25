
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authenReducer from "./slices/auth.slice";
import tourReducer from "./slices/tour.slice";
import categoryReducer from './slices/category.slice'
import networkReducer from './slices/network.slice'
import imageSliderReducer from './slices/image.slice'
import favoriteReducer from './slices/favouriteducers'
import favoriteAdDeleteReducer from './slices/favouriteAddDeleteducers'
import favouriteDeleteReducer from './slices/favouriteDeleteDucers'
import changeUserReducer from './slices/ChangeUserSlice';
import provincesReducer from './slices/cityprovince';
import districtReducer from './slices/district';

const rootReducer = combineReducers({
    tour: tourReducer,
    auth:authenReducer,
    category:categoryReducer,
    network: networkReducer,
    images:imageSliderReducer,
    favorites: favoriteReducer,
    changeUser: changeUserReducer,
    provinces: provincesReducer,
    district: districtReducer,
    // favoriteAdDelete: favoriteAdDeleteReducer,
    // favouriteDelete: favouriteDeleteReducer,

});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
