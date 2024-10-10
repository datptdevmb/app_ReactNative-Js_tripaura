
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authenReducer from "./slices/auth.slice";
import tourReducer from "./slices/tour.slice";
import categoryReducer from './slices/category.slice'



const rootReducer = combineReducers({
    tour: tourReducer,
    auth:authenReducer,
    category:categoryReducer
});


const store = configureStore({
    reducer: {
        reducer: rootReducer
    }
})

export default store;