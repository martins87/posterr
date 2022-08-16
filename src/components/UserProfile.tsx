import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

import useStore from "../store/useStore";
import Post from "./Post";
import { FC } from "react";
import { Avatar } from "@mui/material";
import { PostData } from "../types/types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

type FollowInfoProps = {
  num: number,
  text: string,
}

const FollowInfo: FC<FollowInfoProps> = ({ num, text }) => {
  return (
    <Box display="flex">
      <Typography variant="subtitle2">{num}</Typography>
      <Typography
        sx={{
          color: "rgb(83, 100, 113)",
          ml: 1,
        }}
        variant="subtitle2"
      >
        {text}
      </Typography>
    </Box>
  );
};

type UserProfileProps = {
  userId: number,
}

const UserProfile: FC<UserProfileProps> = ({ userId }) => {
  const { addFollowing, following, posts, users, usersUrl } = useStore();

  const isFollowing = () => {
    return following.includes(userId);
  };

  const handleFollow = () => {
    addFollowing(userId);
  };

  return (
    <Box sx={style}>
      <Stack spacing={1} mb={4}>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar
            sx={{
              width: 48,
              height: 48,
              mr: 1,
            }}
            src={usersUrl[userId]}
          />
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontWeight="bold"
          >
            {users[userId]?.name}
          </Typography>
          <Typography variant="subtitle2" flexGrow={1}>125 posts</Typography>
          <Button
            sx={{
              background: "#000",
              color: "#FFF",
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: 8,
              px: 2,
              "&:hover": {
                background: "#505050",
              }
            }}
            onClick={handleFollow}
          >
            {isFollowing() ? "Following" : "Follow"}
          </Button>
        </Box>

        <Typography sx={{ color: "rgb(83, 100, 113)" }}>
          @{users[userId].username}
        </Typography>
        <Box display="flex">
          <CalendarMonthRoundedIcon sx={{ color: "rgb(83, 100, 113)" }} />
          <Typography
            sx={{
              color: "rgb(83, 100, 113)",
              ml: 0.5,
            }}
          >
            Joined August 2019
          </Typography>
        </Box>
        <Box display="flex" gap={3}>
          <FollowInfo num={50} text="Following" />
          <FollowInfo num={79} text="Followers" />
        </Box>
      </Stack>

      {posts
        .filter(post => post.userId === userId)
        .slice(0, 3)
        .map((post: PostData) => (
        <Post key={post.id} content={post.body} userId={post.userId} />
      ))}
    </Box>
  )
}

export default UserProfile