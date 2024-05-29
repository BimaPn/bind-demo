"use client"

import { initialPosts } from "@/constants/posts"
import { PostProps, PostUpdateProps } from "@/types/post"
import { createContext, useContext, useState } from "react"

type PostContext = {
  posts: PostProps[]
  addPost: (post: PostProps) => void
  like: (postId: string|number) => void
  unlike: (postId: string|number) => void
  saved: (postId: string|number) => void
  unsaved: (postId: string|number) => void
  savedPosts: () => PostProps[]
  findPost: (postId: string) => PostProps
  updatePost: (postId: string, updatedData: PostUpdateProps) => void
  deletePost: (postId: string) => void 
  userPosts: (username: string, fullMedia?:boolean) => PostProps[]
  groupPosts: (groupId: string) => PostProps[] 
}
const postContext = createContext<PostContext | null>(null)

const PostsProvider = ({children}:{children: React.ReactNode}) => {
  const [posts, setPosts] = useState<PostProps[]>(initialPosts)
  
  const addPost = (post: PostProps) => {
    setPosts((prev) => [post, ...prev])
  }

  const findPost = (postId: string) => {
    const post = posts.find((post) => post.id === postId)
    if(!post) {
      throw Error("Post not found.")
    }
    return post
  }

  const updatePost = (postId: string, updatedData: PostUpdateProps) => {
    console.log(updatedData.media)
    setPosts((prev) => {
      return prev.map((post) => {
        if(post.id === postId) {
          post.caption = updatedData.caption ?? ""
          post.media = updatedData.media
        }
        return post 
      })
    })
  }

  const groupPosts = (groupId: string) => {
    return posts.filter((post) => post.groupId === groupId)
  }
  
  const deletePost = (postId: string) => {
    setPosts((prev) => {
      return prev.filter((post) => post.id !== postId)
    })
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
    const updatedPost = posts.map((post) => {
      if(post.id === postId) {
        post.isLiked = true
        post.likedTotal += 1
      }
      return post
    })
    setPosts(updatedPost)
  }
  const unlike = (postId: string|number) => {
    const updatedPost = posts.map((post) => {
      if(post.id === postId) {
        post.isLiked = false 
        if(post.likedTotal >= 0) {
          post.likedTotal -= 1
        }
      }
      return post
    })
    setPosts(updatedPost)
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
    <postContext.Provider value={{ 
      posts,
      like,
      unlike,
      saved,
      unsaved,
      addPost,
      savedPosts,
      userPosts,
      findPost,
      updatePost,
      deletePost,
      groupPosts
      }}>
    {children}
    </postContext.Provider>
  )
}

export const usePosts = () => {
  return useContext(postContext) as PostContext
}

export default PostsProvider
