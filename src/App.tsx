import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import NewPost from "./components/NewPost";
import Posts from "./components/Posts";

export interface User {
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

  // const [users, setUsers] = useState<User[]>([]);
  
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
