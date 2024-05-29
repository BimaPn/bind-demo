'use client'
import { useState } from "react"
import { usePosts } from "../providers/PostsProvider"
import useConfirm from "../ui/Confirm"

const PostDelete = ({postId,children,className}:{postId:string,children:React.ReactNode,className?:string}) => {
  const { deletePost } = usePosts()
  const [ConfirmDialog, confirm] = useConfirm({
    label: "Are you sure you want to delete this comment ?"
  })

  const buttonClick = async (e:React.MouseEvent) => {
    e.stopPropagation() 
    const isDelete = await confirm()
    if(isDelete){
      deletePost(postId)
    }
  }
  return (
    <button onClick={buttonClick} className={className}>
        {children}
    </button>
  )
}

export default PostDelete
