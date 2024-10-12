import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginreducers';
import changeUserReducer from './slices/ChangeUserSlice';
import registerReducer from './slices/registerreducers';
import tourReducer from './slices/tour.slice';
import categoryReducer from './slices/category.slice';
import provincesReducer from './slices/cityprovince'
import districtReducer from './slices/district';

// Combine reducers in the store configuration
const store = configureStore({
    reducer: {
        changeUser: changeUserReducer,
        register: registerReducer,
        login: loginReducer,
        tour: tourReducer,
        category: categoryReducer,
        provinces: provincesReducer,
        district: districtReducer,
            
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
