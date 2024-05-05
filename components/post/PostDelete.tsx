'use client'
import { useState } from "react"
import { usePosts } from "../providers/PostsProvider"

const PostDelete = ({postId,children,className}:{postId:string,children:React.ReactNode,className?:string}) => {
  const { deletePost } = usePosts()
  const buttonClick = (e:React.MouseEvent) => {
    e.preventDefault() 
    const isDelete = confirm("Are you sure ?")
    if(!isDelete) return

    deletePost(postId)
  }
  return (
    <button onClick={buttonClick} className={className}>
        {children}
    </button>
  )
}

export default PostDelete
