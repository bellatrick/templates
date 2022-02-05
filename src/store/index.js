
import { configureStore} from '@reduxjs/toolkit'
import paginationSlice from "./pagination.ts";
import filterSlice from "./filter.ts";
const store = configureStore({
    reducer: {
       filter:filterSlice.reducer,
       pagination:paginationSlice.reducer
    }
});

export default store
export const filterAction= filterSlice.actions
export const paginationAction=paginationSlice.actions