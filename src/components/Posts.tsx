import { PostData } from "../types/types";
import Post from "./Post";
import useStore from "../store/useStore";

const Posts = () => {
  const { posts, postsFollowing, filter } = useStore();
  const postsToShow = filter === "0" ? posts : postsFollowing;

  return (
    <>
      {postsToShow.map((post: PostData) => (
        <Post key={post.id} content={post.body} userId={post.userId} />
      ))}
    </>
  )
}

export default Posts;
