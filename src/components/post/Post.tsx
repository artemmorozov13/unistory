import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import { SinglePostType } from "types/singlePost";

import s from "./post.module.scss";

const Post: React.FC<SinglePostType> = (props) => {
  const { id, title, content } = props;

  const titleMaxLength = 15;
  const contentMaxLength = 30;

  return (
    <div className={s.post}>
      <div className={s.title}>
        {title.length > titleMaxLength
          ? `${title.substring(0, titleMaxLength)}...`
          : title}
      </div>
      <div className={s.content}>
        {content.length > contentMaxLength
          ? `${content.substring(0, contentMaxLength)}...`
          : content}
      </div>
      <Button className={s.button} variant="contained">
        <Link className={s.link} to={`/post/${id}`}>
          Перейти
        </Link>
      </Button>
    </div>
  );
};

export default Post;
