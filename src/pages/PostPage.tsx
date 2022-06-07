import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import { Box } from "@mui/system";

import Container from "components/container/Container";
import PostEdit from "components/postEdit/PostEdit";

import s from "styles/post.module.scss";

const Post: React.FC = () => {
  return (
    <Container>
      <Box className={s.wrapper}>
        <Button variant="contained" color="warning">
          <Link className={s.link} to="/">
            Назад
          </Link>
        </Button>
        <PostEdit />
      </Box>
    </Container>
  );
};

export default Post;
