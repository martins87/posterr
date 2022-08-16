import { ChangeEvent, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

import useStore from "../store/useStore";

const NewPost = () => {
  const [postContent, setPostContent] = useState<string>("");
  const [typing, setTyping] = useState<boolean>(false);
  const { addPost, posts } = useStore();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPostContent(event.target.value);
    setTyping(postContent.length > 0);
  };

  const handleNewPost = () => {
    const newPost = {
      userId: 0,
      id: posts.length + 1,
      title: "random title",
      body: postContent,
    };
    addPost(newPost);
    setPostContent("");
  };

  return (
    <Box>
      <TextField
        id="standard-basic"
        label="What's happening?"
        variant="standard"
        multiline
        sx={{
          width: 500,
          mt: 2,
        }}
        value={postContent}
        onChange={handleChange}
        inputProps={{ maxLength: 777, }}
      />
      <Box display="flex" alignItems="center">
        <Button
          sx={{
            display: "block",
            mt: 1,
            mb: 2,
            mr: 2,
          }}
          variant="contained"
          onClick={handleNewPost}
          disabled={postContent.trim() === ""}
        >
          Post
        </Button>
        {typing && postContent.trim() !== "" && (
          <Typography sx={{ color: "rgb(83, 100, 113)" }}>
            {777 - postContent.length} characters left
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default NewPost;
