import create from "zustand";

import { PostData, UserData } from "../App";

export interface Slice {
  users: UserData[],
  posts: PostData[],
  usersUrl: string[],
  setUsers: (newUsers: UserData[]) => void,
  setPosts: (newPosts: PostData[]) => void,
  addPost: (post: PostData) => void,
}

const useStore = create<Slice>((set) => ({
  posts: [],
  users: [],
  usersUrl: [
    "",
    "https://randomuser.me/api/portraits/thumb/women/14.jpg",
    "https://randomuser.me/api/portraits/thumb/men/56.jpg",
    "https://randomuser.me/api/portraits/thumb/women/95.jpg",
    "https://randomuser.me/api/portraits/thumb/women/81.jpg",
    "https://randomuser.me/api/portraits/thumb/women/73.jpg",
    "https://randomuser.me/api/portraits/thumb/men/23.jpg",
    "https://randomuser.me/api/portraits/thumb/men/47.jpg",
    "https://randomuser.me/api/portraits/thumb/men/17.jpg",
    "https://randomuser.me/api/portraits/thumb/women/78.jpg",
    "https://randomuser.me/api/portraits/thumb/women/65.jpg",
  ],
  setPosts: (newPosts: PostData[]) => set({ posts: [...newPosts] }),
  setUsers: (newUsers: UserData[]) => set({ users: [...newUsers] }),
  addPost: (post: PostData) =>
    set((state: Slice) => ({ posts: [post, ...state.posts,] })),
}));

export default useStore;
