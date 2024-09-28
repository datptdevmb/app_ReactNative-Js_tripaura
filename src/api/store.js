// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from './reducers';

const store = configureStore({
    reducer: {
        locations: locationsReducer,
    },
});

export default store;
