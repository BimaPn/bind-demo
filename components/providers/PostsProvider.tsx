"use client"

import { initialPosts } from "@/constants/posts"
import { PostProps } from "@/types/post"
import { createContext, useContext, useState } from "react"

type PostContext = {
  posts: PostProps[]
  addPost: (post: PostProps) => void
  like: (postId: string|number) => void
  unlike: (postId: string|number) => void
  saved: (postId: string|number) => void
  unsaved: (postId: string|number) => void
  savedPosts: () => PostProps[]
  userPosts: (username: string, fullMedia?:boolean) => PostProps[]
}
const postContext = createContext<PostContext | null>(null)

const PostsProvider = ({children}:{children: React.ReactNode}) => {
  const [posts, setPosts] = useState<PostProps[]>(initialPosts)
  
  const addPost = (post: PostProps) => {
    setPosts((prev) => [post, ...prev])
  }
  const savedPosts = () => {
    return posts.filter((post) => post.isSaved)
  }
  const userPosts = (username: string, fullMedia=false) => {
    if(fullMedia) {
      return posts.filter((post) => (post.user.username === username) && post.media?.length! > 0)
    }
    return posts.filter((post) => post.user.username === username)
  }
  const like = (postId: string|number) => {
    setPosts((posts) => {
      return posts.map((post) => {
        if(post.id === postId) {
          post.isLiked = true
        }
        return post
      })
    })
  }
  const unlike = (postId: string|number) => {
    setPosts((posts) => {
      return posts.map((post) => {
        if(post.id === postId) {
          post.isLiked = false 
        }
        return post
      })
    })
  }

  const saved = (postId: string|number) => {
    setPosts((posts) => {
      return posts.map((post) => {
        if(post.id === postId) {
          post.isSaved = true 
        }
        return post
      })
    })
  }

  const unsaved = (postId: string|number) => {
    setPosts((posts) => {
      return posts.map((post) => {
        if(post.id === postId) {
          post.isSaved = false 
        }
        return post
      })
    })
  }
  return (
    <postContext.Provider value={{ posts, like, unlike, saved, unsaved, addPost, savedPosts, userPosts }}>
    {children}
    </postContext.Provider>
  )
}

export const usePosts = () => {
  return useContext(postContext) as PostContext
}

export default PostsProvider
