import { Link } from "react-router-dom";
import { useTypedSelector } from "hooks/useTypeSelector";
import { Navigate, useParams } from "react-router";
import { useDispatch } from "react-redux";

import { Button, TextField } from "@mui/material";

import useInput from "hooks/useInput";
import { PostsActionType } from "types/posts";
import { SinglePostType } from "types/singlePost";

import s from "./postEdit.module.scss";

const PostEdit: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const inputHook = useInput;
  const postsWithOutCurrent: Array<SinglePostType> = [];
  let currentPost: SinglePostType | null = null;

  const posts = useTypedSelector((state) => state.posts.posts);

  posts.filter((post: SinglePostType) => {
    if (post.id === Number(id)) {
      currentPost = post;
    } else {
      postsWithOutCurrent.push(post);
    }
  });

  if (!currentPost) return <Navigate to="/404" />;

  const { title, content } = currentPost;

  const newTitle = inputHook(title);
  const newContent = inputHook(content);

  const removePost = () => {
    dispatch({
      type: PostsActionType.UPDATE_POSTS,
      payload: postsWithOutCurrent,
    });
  };

  const applyChanges = () => {
    const updatedPosts = posts.map((post: SinglePostType) => {
      if (post.id === Number(id)) {
        post.title = newTitle.value;
        post.content = newContent.value;
      }
      return post;
    });
    console.log(updatedPosts);
    dispatch({
      type: PostsActionType.UPDATE_POSTS,
      payload: updatedPosts,
    });
  };

  return (
    <>
      <h1>Запись {title}</h1>
      <div className={s.form}>
        <TextField
          variant="outlined"
          className={s.input}
          value={newTitle.value}
          onChange={newTitle.onChange}
        />
        <TextField
          multiline
          variant="outlined"
          rows={10}
          className={s.input}
          value={newContent.value}
          onChange={newContent.onChange}
        />
      </div>
      <div className={s.actions}>
        <Button variant="contained" color="error">
          <Link onClick={removePost} className={s.link} to="/">
            Удалить
          </Link>
        </Button>
        <Button variant="contained" onClick={applyChanges}>
          Сохранить
        </Button>
      </div>
    </>
  );
};

export default PostEdit;
