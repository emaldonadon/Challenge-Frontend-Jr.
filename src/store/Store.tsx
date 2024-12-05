import { configureStore } from "@reduxjs/toolkit"
import carritoReducer from "./carritoSlice"

const Store = configureStore({
    reducer: {
        carrito: carritoReducer,
    }
});
export default Store;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
