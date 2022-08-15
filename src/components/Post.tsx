import { FC, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import IconButton from '@mui/material/IconButton';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';

import UserProfile from "./UserProfile";

const RandomNumber = () => {
  return (
    <Typography sx={{ color: "rgb(83, 100, 113)" }}>
      {Math.floor(Math.random() * (30 - 1) + 1)}
    </Typography>
  );
}

const PostActions = () => {
  const centerAlignment = {
    display: "flex",
    alignItems: "center",
  }

  return (
    <Grid container>
      <Grid item xs={3} sx={centerAlignment}>
        <IconButton>
          <ChatBubbleOutlineRoundedIcon />
        </IconButton>
        <RandomNumber />
      </Grid>
      <Grid item xs={3} sx={centerAlignment}>
        <IconButton>
          <FavoriteBorderRoundedIcon />
        </IconButton>
        <RandomNumber />
      </Grid>
      <Grid item xs={3} sx={centerAlignment}>
        <IconButton>
          <CachedRoundedIcon />
        </IconButton>
        <RandomNumber />
      </Grid>
      <Grid item xs={3}>
        <IconButton>
          <IosShareRoundedIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export type PostProps = {
  content: string,
}

const Post: FC<PostProps> = ({ content }) => {
  const [picUrl, setPicUrl] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(response => {
          setPicUrl(response.results[0].picture.thumbnail);
          setUsername(response.results[0].login.username);
        })
    }, 2000);
  }, []);

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
          <Avatar sx={{ width: 48, height: 48, }} src={picUrl} />
          {/* <Avatar sx={{ width: 48, height: 48, }} /> */}
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <UserProfile />
        </Modal>
      </Grid>
      <Grid
        sx={{ width: 700 }}
        item
      >
        <Stack spacing={1}>
          <Typography sx={{ color: "rgb(83, 100, 113)" }}>
            @{username}
            {/* @random */}
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
  )
}

export default Post;
