import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            // Handle different API response structures
            if (action.payload?.data) {
                // Login API response
                return action.payload.data;
            } else if (action.payload?.user?.user) {
                // Profile view API response
                return action.payload.user.user;
            } else if (action.payload?.user) {
                // Other API responses
                return action.payload.user;
            }
            // Direct user object
            return action.payload;
        },
        removeUser: (state, action) => {
            return null;
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
