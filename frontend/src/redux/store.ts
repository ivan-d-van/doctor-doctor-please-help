// import { applyMiddleware, combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import allReducers from './reducers';

const middleware = [...getDefaultMiddleware(), thunk];

export const store = configureStore({
    reducer: allReducers,
    middleware
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
