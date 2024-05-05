w'use client'

import { createContext, useEffect, useState } from "react"
import Modal from "../ui/Modal"
import { PostEditContextProps, PostEditProps } from "@/types/post"
import ApiClient from "@/app/api/axios/ApiClient"
import FormCreatePost from "../posts/FormCreatePost"
import RoundedImage from "../ui/RoundedImage"
import FormUpdatePost from "../posts/FormUpdatePost"
import PostUpdateSkeleton from "../skeleton/PostUpdateSkeleton"

export const postEditContext = createContext<PostEditContextProps | null>(null)

const PostEditContext = ({children}:{children : React.ReactNode}) => {
  const [postId,setPostId] = useState<string | number | null>(null)
  const [postEdit,setPostEdit] = useState<PostEditProps>()
  const [loading,setLoading] = useState<boolean>(true);
  useEffect(() => {
    if(postId != null) {
      ApiClient.get(`/api/post/${postId}/edit`)
      .then((res) => {
        setPostEdit(res.data.post)
        setLoading(false)
      })
    }
  },[postId])
  const closeModal = () => {
    setPostId(null)
    setPostEdit(undefined)
  }
  return (
    <postEditContext.Provider value={{ postId,setPostId }}>
        {children}
        {postId && (
        <Modal title='Edit post' onClose={() => setPostId(null)} show={postId ? true : false}>
          {loading && < PostUpdateSkeleton />}
          {postEdit && !loading && (

          )}
        </Modal>
        )}
    </postEditContext.Provider>
  )
}

export default PostEditContext
