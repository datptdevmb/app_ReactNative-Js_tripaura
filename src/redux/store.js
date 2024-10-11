import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from './slices/locations.slice';
import loginReducer from './slices/loginreducers';
import changeUserReducer from './slices/ChangeUserSlice';
import registerReducer from './slices/registerreducers';
import tourReducer from './slices/tour.slice';
import categoryReducer from './slices/category.slice';

// Combine reducers in the store configuration
const store = configureStore({
    reducer: {
        locations: locationsReducer,
        changeUser: changeUserReducer,
        register: registerReducer,
        login: loginReducer,
        tour: tourReducer,
        category: categoryReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
