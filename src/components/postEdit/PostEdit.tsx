import { Link } from "react-router-dom";
import { useState } from "react";
import { useTypedSelector } from "hooks/useTypeSelector";
import { Navigate, useParams } from "react-router";
import { useDispatch } from "react-redux";

import { Button, TextField } from "@mui/material";

import useInput from "hooks/useInput";
import { PostsActionType } from "types/posts";
import { SinglePostType } from "types/singlePost";
import ModalWindow from "components/modalWindow/ModalWindow";
import { dataBase } from "localBase/LocalBase";

import s from "./postEdit.module.scss";

const PostEdit: React.FC = () => {
  const { id } = useParams();
  const [isDelete, setDelete] = useState(false);

  const dispatch = useDispatch();
  const inputHook = useInput;

  const postsWithOutCurrent: Array<SinglePostType> = [];
  let currentPost: SinglePostType | null = null;

  const posts = useTypedSelector((state) => state.posts.posts);

  console.log(posts);

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
    setDelete(true);
  };

  const canelDelete = () => setDelete(false);

  const confirmDelete = () => {
    dispatch({
      type: PostsActionType.UPDATE_POSTS,
      payload: postsWithOutCurrent,
    });
    dataBase
      .collection("posts")
      .doc({ id: Number(id) })
      .delete();
  };

  const applyChanges = () => {
    const updatedPosts = posts.map((post: SinglePostType) => {
      if (post.id === Number(id)) {
        post.title = newTitle.value;
        post.content = newContent.value;
      }
      return post;
    });
    dispatch({
      type: PostsActionType.UPDATE_POSTS,
      payload: updatedPosts,
    });
    dataBase
      .collection("posts")
      .doc({ id: Number(id) })
      .update({
        title: newTitle.value,
        content: newContent.value,
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
        <Button onClick={removePost} variant="contained" color="error">
          Удалить
        </Button>
        <Button variant="contained" onClick={applyChanges}>
          Сохранить
        </Button>
      </div>
      <ModalWindow isOpen={isDelete} onClose={() => setDelete(false)}>
        <div className={s.confirmMessage}>
          Вы действительно хотите удалить запись?
        </div>
        <div className={s.modalActions}>
          <Button onClick={canelDelete} variant="contained" color="warning">
            Отмена
          </Button>
          <Button onClick={confirmDelete} variant="contained" color="error">
            <Link className={s.link} to="/">
              Удалить
            </Link>
          </Button>
        </div>
      </ModalWindow>
    </>
  );
};

export default PostEdit;
