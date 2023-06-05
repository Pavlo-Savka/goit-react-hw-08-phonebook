import { createSlice } from "@reduxjs/toolkit";

const filterinitialState = "";

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterinitialState,
    reducers: {
        filterChange(state, action) {
         return state = action.payload;
        },
    },
});

export const { filterChange } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;