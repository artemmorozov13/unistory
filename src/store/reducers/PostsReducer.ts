import { PostAction, PostsActionType, PostsState } from "types/posts";

const initialState: PostsState = {
  posts: [
    { id: 1, title: "title", content: "content" },
    { id: 2, title: "title", content: "content" },
    { id: 3, title: "title", content: "content" },
    { id: 4, title: "title", content: "content" },
    { id: 5, title: "title", content: "content" },
    { id: 6, title: "title", content: "content" },
  ],
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

    case PostsActionType.SET_POSTS:
      return {
        posts: [...action.payload], //Доработать
      };

    default:
      return state;
  }
};

export default PostReducer;
