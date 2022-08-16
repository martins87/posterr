import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
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

export default PostActions;
