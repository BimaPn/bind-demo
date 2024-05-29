"use client"
import { createContext, useContext, useState } from "react"
import { comments as initialComments } from '@/constants/postComments'
import { PostCommentProps } from "@/types/post"

type CommentsContext = {
  comments: PostCommentProps[]
  findComments: (postId: string|number) => PostCommentProps[] 
  like: (commentId: string) => void
  unlike: (commentId: string) => void
  addComment: (comment: PostCommentProps) => void
  deleteComment: (commentId: string) => void
}
const commentsContext = createContext<CommentsContext | null>(null)

export const CommentsProvider = ({children}:{children: React.ReactNode}) => {
  const [comments, setComments] = useState<PostCommentProps[]>(initialComments)

  const findComments = (postId: string|number) => {
    return comments.filter((comment) => comment.postId === postId)
  }
  const like = (commentId: string) => {
    setComments((prev) => {
      return prev.map((comment) => {
        if(comment.id === commentId) {
          comment.isLiked = true
        }
        return comment
        })
      })
  }
  const unlike = (commentId: string) => {
    setComments((prev) => {
      return prev.map((comment) => {
        if(comment.id === commentId) {
          comment.isLiked = false
        }
        return comment
        })
      })
  }
  const addComment = (comment: PostCommentProps) => {
    const updatedComments = [...comments, comment]
    setComments(updatedComments)
  }
  const deleteComment = (commentId: string) => {
    setComments((prev) => {
      return [...prev.filter((comment) => comment.id !== commentId)]
    })
  }
  return (
    <commentsContext.Provider value={{ comments, findComments, like, unlike, addComment, deleteComment }}>
    {children}
    </commentsContext.Provider>
  )
}

export const useComments = () => {
  return useContext(commentsContext) as CommentsContext
}

export default CommentsProvider
