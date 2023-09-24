import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";
import SavedSlice from "./SavedSlice";

// Creating Store at global level using Redux
const store = configureStore({
    reducer:{
        product: ProductSlice,
        save: SavedSlice,
        cart: CartSlice,
    }
})

export default store