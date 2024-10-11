import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from './reducers';
import loginReducer from './slices/LoginSlice';
import { createLogger } from 'redux-logger';
import changeUserReducer from './slices/ChangeUserSlice';
const logger = createLogger();
import registerReducer from './slices/registerreducers';

const store = configureStore({
    reducer: {
        locations: locationsReducer,
        changeUser: changeUserReducer,
        register: registerReducer,
        login: loginReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(logger),
});

export default store;