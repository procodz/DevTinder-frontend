import { createSlice } from "@reduxjs/toolkit";

const request = createSlice({
    name: "request",
    initialState: null,
    reducers: {
        addRequest: (state, action) => {
            return action.payload;
        },
        removeRequest: (state, action) =>{
            return null;
        }
    },
});


export const {addRequest, removeRequest} = request.actions;
export default request.reducer;