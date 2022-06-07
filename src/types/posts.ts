import { SinglePostType } from "./singlePost";

export interface PostsState {
  posts: Array<any>;
}

export enum PostsActionType {
  CREATE_NEW_POST = "CREATE_NEW_POST",
  UPDATE_POSTS = "UPDATE_POSTS",
}

interface CreateNewPost {
  type: PostsActionType.CREATE_NEW_POST;
  payload: Array<any>;
}
interface RemovePost {
  type: PostsActionType.UPDATE_POSTS;
  payload: string;
}

export type PostAction = CreateNewPost | RemovePost;
