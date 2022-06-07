import { useTypedSelector } from "hooks/useTypeSelector";

import Post from "components/post/Post";
import CreatePost from "components/createPost/CreatePost";
import { SinglePostType } from "types/singlePost";

import s from "./posts.module.scss";

const Posts: React.FC = () => {
  const posts = useTypedSelector((state) => state.posts.posts);

  return (
    <main className={s.postsWrapper}>
      <div className={s.posts}>
        {posts.map(({ id, title, content }: SinglePostType) => (
          <Post key={id} id={id} title={title} content={content} />
        ))}
      </div>
      <CreatePost />
    </main>
  );
};

export default Posts;
