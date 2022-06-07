import { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, TextField } from "@mui/material";

import useInput from "hooks/useInput";
import ModalWindow from "components/modalWindow/ModalWindow";
import { PostsActionType } from "types/posts";

import s from "./createPost.module.scss";

const CreatePost: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState("");
  const title = useInput("");
  const content = useInput("");
  const dispatch = useDispatch();

  const addNewPost = () => {
    if (title.value.trim() && content.value.trim()) {
      dispatch({
        type: PostsActionType.CREATE_NEW_POST,
        payload: {
          id: new Date().getTime(),
          title: title.value,
          content: content.value,
        },
      });
      title.resetValue();
      content.resetValue();
      setOpen(false);
    } else {
      setError("Все поля должны быть заполнены!");
    }
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        + Добавить
      </Button>
      <ModalWindow isOpen={isOpen} onClose={() => setOpen(false)}>
        <TextField
          className={s.input}
          label="title"
          variant="outlined"
          onChange={title.onChange}
        />
        <TextField
          className={s.input}
          multiline
          label="content"
          variant="outlined"
          rows={4}
          onChange={content.onChange}
        />
        <div className={s.error}>{error}</div>
        <div className={s.actons}>
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpen(false)}
          >
            Отмена
          </Button>
          <Button variant="contained" onClick={addNewPost}>
            Сохранить
          </Button>
        </div>
      </ModalWindow>
    </>
  );
};

export default CreatePost;
