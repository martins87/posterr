import { useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import NewPost from "./components/NewPost";
import Posts from "./components/Posts";
import useStore from "./store/useStore";

export interface UserData {
  address: {},
  company: {},
  email: string,
  id: number,
  name: string,
  phone: string,
  username: string,
  website: string,
}

export interface PostData {
  userId: number,
  id: number,
  title: string,
  body: string,
}

const App = () => {
  const { setUsers, setPosts } = useStore();

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(response => {
          if (!ignore) setPosts([...response]);
        })

      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(response => {
          if (!ignore) setUsers([...response]);
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
      <Posts />
    </Container>
  );
}

export default App;
