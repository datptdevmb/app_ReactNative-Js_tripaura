// redux/store.js
import {configureStore} from '@reduxjs/toolkit';
import locationsReducer from './reducers';
import registerReducer from './slice/registerreducers';
import loginReducer from './slice/loginreducers';
// import favoriteReducer from '../redux/slices/favouriteducers';

const store = configureStore({
  reducer: {
    locations: locationsReducer,
    register: registerReducer,
    login: loginReducer,
    // favorites: favoriteReducer,
  },
});

export default store;
