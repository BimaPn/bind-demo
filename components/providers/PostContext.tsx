'use client'
import { PostCommentProps, PostProps } from '@/types/post'
import { createContext, useState } from 'react'
import { PostsContextProps } from '@/types/post'

export const postContext = createContext<PostsContextProps | null>(null)

const PostContext = ({children}:{children : React.ReactNode}) => {
    const [posts,setPosts] = useState<PostProps []>([])
    const addPost = (post:PostProps) => {
        setPosts((prevPosts) => {
          return [post,...prevPosts]
        })
    }
    const deletePost = (postId:string | number) => {
      setPosts((prevPosts) =>{
        return prevPosts.filter(post => post.id != postId)
      })
    }
    const updatePost = (post:PostProps) => {
      setPosts((prevPosts) => {
        return prevPosts.map((prevPost) => {
          if(prevPost.id == post.id) {
            return post
          }
          return prevPost; 
        })
      })
    }
    const updatePostLikes = (postId : string | number,isLiked : boolean) => {
      setPosts((prevPosts) => {
        return prevPosts.map((post) => {
          if(post.id == postId) {
            return {
              ...post,
              isLiked : !isLiked,
              likedTotal : post.likedTotal += isLiked ? -1 : 1
            }
          }
          return post; 
        })
      })
    }
    const updatePostSave = (postId : string | number,isSaved : boolean) => {
      setPosts((prevPosts) => {
        return prevPosts.map((post) => {
          if(post.id == postId) {
            return {
              ...post,
              isSaved : !isSaved,
            }
          }
          return post; 
        })
      })
    }
    const setPostComments = (postId : string | number,comments : PostCommentProps[],commentTotal : number) => {
      setPosts((prevPosts) => {
        const updatedPosts = prevPosts.map((post) => {
          if(post.id == postId) {
            post.comments = comments
            post.commentTotal = commentTotal
            return post
          }
          return post; 
        })
        return updatedPosts
      })
    }

  return (
    <postContext.Provider value={{ posts,addPost,deletePost,updatePost,setPosts,updatePostLikes,updatePostSave,setPostComments  }}>
        {children}
    </postContext.Provider>
  )
}

export default PostContext
