import { configureStore } from '@reduxjs/toolkit'
import {Store} from 'redux';
import categorySlice from '../features/categorySlice';
// ...

export const store: Store = configureStore({
  reducer: {
    category: categorySlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch