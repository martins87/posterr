import create from "zustand";

import { PostData } from "../App";

export interface PostsSlice {
  posts: PostData[],
  setPosts: (newPosts: PostData[]) => void,
  addPost: (post: PostData) => void,
}

const useStore = create<PostsSlice>((set) => ({
  posts: [],
  setPosts: (newPosts: PostData[]) => set({ posts: [...newPosts] }),
  addPost: (post: PostData) =>
  set((state: PostsSlice) => ({ posts: [ post, ...state.posts,] })),
}));

export default useStore;
