import { combineReducers } from "redux";
import PostReducer from "./PostsReducer";

export const RootReducer = combineReducers({
  posts: PostReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
