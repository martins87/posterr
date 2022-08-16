import { FC, useState } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import IconButton from '@mui/material/IconButton';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import useStore from "../store/useStore";
import UserProfile from "./UserProfile";
import PostActions from "./PostActions";

export type PostProps = {
  content: string,
  userId: number,
}

const Post: FC<PostProps> = ({ content, userId }) => {
  const { users, usersUrl } = useStore();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid
      sx={{
        borderBottom: "1px solid gray",
        mt: 1,
        width: "fit-content",
      }}
      container
      spacing={2}
    >
      <Grid
        sx={{ background: "inherit" }}
        item
      >
        <Button
          onClick={handleOpen}
        >
          <Avatar sx={{ width: 48, height: 48, }} src={usersUrl[userId]} />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <UserProfile userId={userId} />
        </Modal>
      </Grid>
      <Grid
        sx={{ width: 700 }}
        item
      >
        <Stack spacing={1}>
          <Typography sx={{ color: "rgb(83, 100, 113)" }}>
            <Button
              sx={{
                textTransform: "lowercase",
                padding: 0,
                color: "rgb(83, 100, 113)",
              }}
              variant="text"
              onClick={handleOpen}
            >
              @{users[userId]?.username}
            </Button>
          </Typography>
          <Typography>
            {content}
          </Typography>
          <Box>
            <PostActions />
          </Box>
        </Stack>
      </Grid>
      <Grid
        sx={{ background: "inherit" }}
        item
      >
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Post;
