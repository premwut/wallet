import { configureStore } from "@reduxjs/toolkit";

const store: any = configureStore({
    reducer: {
        test: () => "test store",
        balance: () => 50000,
    },
})

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch