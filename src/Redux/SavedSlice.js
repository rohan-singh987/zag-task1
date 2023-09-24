"use client";

import { createSlice } from "@reduxjs/toolkit";

// Creating Saved Slice to manage Saved-Product related state at global level
const savedSlice = createSlice({
    name: "saved",
    initialState: [],
    reducers: {
        saveProduct: (state, action) => {
            state.push(action.payload)
        },
        removeSave: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        }
    }
})

export const {saveProduct, removeSave} = savedSlice.actions
export default savedSlice.reducer