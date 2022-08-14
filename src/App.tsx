import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import NewPost from "./components/NewPost";
import Post from "./components/Post";

interface User {
  address: {},
  company: {},
  email: string,
  id: number,
  name: string,
  phone: string,
  username: string,
  website: string,
}

interface PostData {
  userId: number,
  id: number,
  title: string,
  body: string,
}

const App = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<PostData[]>([]);
  
  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(response => {
          if (!ignore) setPosts(response);
        })
    }

    startFetching();

    return () => {
      ignore = true;
    }
  }, []);

  return (
    <Container>
      <Typography variant="h4" fontWeight="bold" my={3}>
        Posterr
      </Typography>

      <NewPost />

      {posts.map((post: PostData) => (
        <Post key={post.id} content={post.body} />
      ))}
    </Container>
  );
}

export default App;
