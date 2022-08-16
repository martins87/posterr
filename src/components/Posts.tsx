import { PostData } from "../types/types"; 
import Post from "./Post";

import useStore from "../store/useStore";

const Posts = () => {
  const { posts } = useStore();

  return (
    <>
      {posts.map((post: PostData) => (
        <Post key={post.id} content={post.body} userId={post.userId} />
      ))}
    </>
  )
}

export default Posts;
