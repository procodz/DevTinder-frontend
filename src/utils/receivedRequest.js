import { createSlice } from "@reduxjs/toolkit";

const request = createSlice({
    name: "request",
    initialState: null,
    reducers: {
        addRequest: (state, action) => {
            return action.payload;
        },
        removeRequest: (state, action) =>{
            const newArray = state.filter((request) => request._id !== action.payload);
            return newArray;
        }
    },
});


export const {addRequest, removeRequest} = request.actions;
export default request.reducer;