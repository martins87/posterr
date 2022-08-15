import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

import NewPost from "./NewPost";
import { FC } from "react";

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

const UserProfile = () => {
  return (
    <Box sx={style}>
      <Stack spacing={1} mb={4}>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontWeight="bold"
          >
            {/* mocked */}
            Mr. Potato Head
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
          >Follow</Button>
        </Box>

        <Typography sx={{ color: "rgb(83, 100, 113)" }}>
          @America1Scotty
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

      <NewPost />
    </Box>
  )
}

export default UserProfile