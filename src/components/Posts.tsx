import { useEffect } from "react";
import useStore from "../store/useStore";

import { PostData } from "../App";
import Post from "./Post";

const Posts = () => {
  const { posts, setPosts } = useStore();

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(response => {
          if (!ignore) setPosts([...response.splice(response.length / 4)]);
        })
    }

    startFetching();

    return () => {
      ignore = true;
    }
  }, []);

  return (
    <>
      {posts.map((post: PostData) => (
        <Post key={post.id} content={post.body} />
      ))}
    </>
  )
}

export default Posts;
