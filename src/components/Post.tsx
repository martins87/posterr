import { FC, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import IconButton from '@mui/material/IconButton';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';

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

  const [picUrl, setPicUrl] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(response => {
        setPicUrl(response.results[0].picture.thumbnail);
        setUsername(response.results[0].login.username);
      })
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
        <Avatar sx={{ width: 48, height: 48, }} src={picUrl} />
      </Grid>
      <Grid
        sx={{ width: 700 }}
        item
      >
        <Stack spacing={1}>
          <Typography sx={{ color: "rgb(83, 100, 113)" }}>
            @{username}
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
