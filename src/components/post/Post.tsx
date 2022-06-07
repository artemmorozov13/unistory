import { Link } from "react-router-dom";

import { Button } from "@mui/material";

import s from "./post.module.scss";

interface PostProps {
  id: number;
  title: string;
  content: string;
}

const Post: React.FC<PostProps> = (props) => {
  const { id, title, content } = props;

  return (
    <div className={s.post}>
      <div className={s.title}>
        {title.length > 15 ? `${title.substring(0, 15)}...` : title}
      </div>
      <div className={s.content}>
        {content.length > 30 ? `${content.substring(0, 30)}...` : content}
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
