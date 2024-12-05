import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Producto {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    cantidad: number;
}

interface CarritoStore {
    productos: Producto[];
}

const initialState: CarritoStore = {
    productos: [],
}

const carritoSlice = createSlice({
    name: "carrito",
    initialState,
    reducers: {
        agregarProducto: (state, action: PayloadAction<Producto>) => {
            const productoExistente = state.productos.find(
                (p) => p.id === action.payload.id
            );
            if (productoExistente) {
                productoExistente.cantidad += action.payload.cantidad;
            } else {
                state.productos.push(action.payload)
            }
        },
    },
});

export const { agregarProducto } = carritoSlice.actions;
export default carritoSlice.reducer;