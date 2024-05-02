"use client"

import { initialPosts } from "@/constants/posts"
import { PostProps } from "@/types/post"
import { createContext, useContext, useState } from "react"

type PostContext = {
  posts: PostProps[]
}
const postContext = createContext<PostContext | null>(null)

const PostsProvider = ({children}:{children: React.ReactNode}) => {
  const [posts, setPosts] = useState<PostProps[]>(initialPosts)
  return (
    <postContext.Provider value={{ posts }}>
    {children}
    </postContext.Provider>
  )
}

export const usePosts = () => {
  return useContext(postContext) as PostContext
}

export default PostsProvider
