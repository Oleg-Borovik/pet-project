import {configureStore} from "@reduxjs/toolkit";
import converterSlice from "./converterSlice";

export const store = configureStore({
    reducer: {
        converter: converterSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch