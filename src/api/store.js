import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from './reducers';
import registerReducer from './slice/registerreducers';
import loginReducer from './slice/loginreducers';
import { createLogger } from 'redux-logger';

const logger = createLogger(); 

const store = configureStore({
    reducer: {
        locations: locationsReducer,
        register: registerReducer, 
        login: loginReducer,  
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, 
        }).concat(logger),
});

export default store;
