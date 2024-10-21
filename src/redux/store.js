import {combineReducers, configureStore} from '@reduxjs/toolkit';
import tourReducer from './slices/tour.slice';
import categoryReducer from './slices/category.slice';
import favoriteReducer from './slices/favouriteducers';
import favoriteAdDeleteReducer from './slices/favouriteAddDeleteducers';
import favouriteDeleteReducer from './slices/favouriteDeleteDucers';
import loginReducer from './slices/loginreducers';
import changeUserReducer from './slices/ChangeUserSlice';
import registerReducer from './slices/registerreducers';
import provincesReducer from './slices/cityprovince';
import districtReducer from './slices/district';


const rootReducer = combineReducers({
  tour: tourReducer,
  category: categoryReducer,
  favorites: favoriteReducer,
  favoriteAdDelete: favoriteAdDeleteReducer,
  favouriteDelete: favouriteDeleteReducer,
  login: loginReducer,
  changeUser: changeUserReducer,
  register: registerReducer,
  provinces: provincesReducer,
  district: districtReducer,
    tour: tourReducer,
    category:categoryReducer
});

// Configure the store

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export default store;