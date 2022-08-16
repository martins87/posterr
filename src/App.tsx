import { useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import NewPost from "./components/NewPost";
import Posts from "./components/Posts";
import useStore from "./store/useStore";

const App = () => {
  const { setUsers, setPosts } = useStore();
  const { filter, setFilter } = useStore();

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

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

      <FormControl sx={{ width: 150, }}>
        <Select
          value={filter}
          onChange={handleChange}
        >
          <MenuItem value="0">All</MenuItem>
          <MenuItem value="1">Following</MenuItem>
        </Select>
      </FormControl>

      <NewPost />
      <Posts />
    </Container>
  );
}

export default App;
