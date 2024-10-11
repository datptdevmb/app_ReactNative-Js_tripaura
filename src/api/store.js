import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from './reducers';
import loginReducer from './slices/LoginSlice';
import changeUserReducer from './slices/ChangeUserSlice';
import registerReducer from './slices/registerreducers'; // Ensure this path is correct
import tourReducer from './../redux/slices/tour.slice';
import categoryReducer from './../redux/slices/category.slice';

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
