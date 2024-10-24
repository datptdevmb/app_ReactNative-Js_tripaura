import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginreducers';
import changeUserReducer from './slices/ChangeUserSlice';
import registerReducer from './slices/registerreducers';
import tourReducer from './slices/tour.slice';
import categoryReducer from './slices/category.slice';
import provincesReducer from './slices/cityprovince'
import districtReducer from './slices/district';
import getvoucherReducer from './slices/vouchersSlice'

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
        getVoucher: getvoucherReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
