import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedslice";
import connectionsReducer from "./Connections";
import requestReducer from "./receivedRequest";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connections: connectionsReducer,
        request: requestReducer,
    },
});

export default appStore;