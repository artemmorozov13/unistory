import { PostAction, PostsActionType, PostsState } from "types/posts";

const initialState: PostsState = {
  posts: [{ id: 1, title: "title", content: "content" }],
};

const PostReducer = (state = initialState, action: PostAction): PostsState => {
  switch (action.type) {
    case PostsActionType.CREATE_NEW_POST:
      return {
        posts: [...state.posts, action.payload],
      };

    case PostsActionType.UPDATE_POSTS:
      return {
        posts: [...action.payload],
      };

    default:
      return state;
  }
};

export default PostReducer;
