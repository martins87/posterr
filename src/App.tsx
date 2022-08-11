import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

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
      <Typography variant="h4" fontWeight="bold">
        Posterr
      </Typography>
      <TextField
        id="standard-basic"
        label="What's happening?"
        variant="standard"
        multiline
        sx={{
          width: 500,
        }} />
      <Button variant="contained">Post</Button>

      {posts.map((post: PostData) => (
        <Post key={post.id} content={post.body} />
      ))}
    </Container>
  );
}

export default App;
