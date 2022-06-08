import Posts from "components/posts/Posts";
import Container from "components/container/Container";

import s from "styles/home.module.scss";

const Home: React.FC = () => {
  return (
    <Container>
      <h1 className={s.logo}>Блог</h1>
      <Posts />
    </Container>
  );
};

export default Home;
