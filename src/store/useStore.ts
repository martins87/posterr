import create from "zustand";

import { PostData, UserData } from "../types/types";

export interface Slice {
  users: UserData[],
  posts: PostData[],
  postsFollowing: PostData[],
  usersUrl: string[],
  following: number[],
  filter: string;
  setUsers: (newUsers: UserData[]) => void,
  setPosts: (newPosts: PostData[]) => void,
  addPost: (post: PostData) => void,
  addPostsFollowing: (userId: number) => void,
  addFollowing: (userId: number) => void,
  removeFollowing: (userId: number) => void,
  removePostsFollowing: (userId: number) => void,
  setFilter: (value: string) => void,
}

const useStore = create<Slice>((set, get) => ({
  posts: [],
  postsFollowing: [],
  users: [{
    address: {},
    company: {},
    email: "myemail@gmail.com",
    id: 0,
    name: "Posterr Admin",
    phone: "212-200-3886",
    username: "posterradmin",
    website: "posterr.com",
  }],
  usersUrl: [
    "https://www.pngitem.com/pimgs/m/24-243598_mario-head-png-super-mario-head-transparent-png.png",
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
  following: [],
  filter: "0",
  setPosts: (newPosts: PostData[]) => set({ posts: [...newPosts] }),
  setUsers: (newUsers: UserData[]) =>
    set((state: Slice) => ({ users: [...state.users, ...newUsers] })),
  addPost: (post: PostData) =>
    set((state: Slice) => ({ posts: [post, ...state.posts,] })),
  addPostsFollowing: (userId: number) =>
    set((state: Slice) => {
      const userPosts: PostData[] = get().posts.filter((post: PostData) => post.userId === userId);
      return ({ postsFollowing: [...state.postsFollowing, ...userPosts] })
    }),
  addFollowing: (userId: number) =>
    set((state: Slice) => ({ following: [...state.following, userId] })),
  removeFollowing: (userId: number) =>
    set((state: Slice) => ({ following: [...state.following.filter(id => id !== userId)] })),
  removePostsFollowing: (userId: number) =>
    set((state: Slice) => ({ postsFollowing: [...state.postsFollowing.filter(post => post.userId !== userId)] })),
  setFilter: (value: string) => set({ filter: value }),
}));

export default useStore;
