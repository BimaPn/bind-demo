'use client'
import { useState } from "react"
import { usePosts } from "./providers/PostsProvider"
import useConfirm from "./ui/Confirm"
import { useComments } from "./providers/CommentsProvider"

const DeleteComment = ({postId, commentId, children,className}:{postId:string, commentId: string,children:React.ReactNode,className?:string}) => {
  const { changeCommentCount } = usePosts()
  const { deleteComment } = useComments()
  const [ConfirmDialog, confirm] = useConfirm({
    label: "Are you sure you want to delete this comment ?"
  })

  const buttonClick = async (e:React.MouseEvent) => {
    e.preventDefault() 
    const isTrue = await confirm()
    if(!isTrue) return
    deleteComment(commentId)
    changeCommentCount(postId, -1)
  }

  return (
  <> 
    <button onClick={buttonClick} className={className}>
      {children}
    </button>
    <ConfirmDialog />
  </>

  )
}

export default DeleteComment 
