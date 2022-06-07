import { SinglePostType } from "./singlePost";

export interface PostsState {
  posts: Array<any>;
}

export enum PostsActionType {
  CREATE_NEW_POST = "CREATE_NEW_POST",
  UPDATE_POSTS = "UPDATE_POSTS",
  SET_POSTS = "SET_POSTS",
}

interface CreateNewPost {
  type: PostsActionType.CREATE_NEW_POST;
  payload: Array<any>;
}
interface RemovePost {
  type: PostsActionType.UPDATE_POSTS;
  payload: string;
}
interface SetPosts {
  type: PostsActionType.SET_POSTS;
  payload: any;
}

export type PostAction = CreateNewPost | RemovePost | SetPosts;
