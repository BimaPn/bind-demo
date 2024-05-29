'use client'
import Image from "next/image"
import { IoSend } from "react-icons/io5"
import { useContext, useState, useEffect, useRef } from "react"
import { postContext } from "../providers/PostContext"
import { PostCommentProps, PostsContextProps } from "@/types/post"
import { useComments } from "../providers/CommentsProvider"
import { authUser } from "@/constants/user"
import TextAreaExpand from "../ui/TextAreaExpand"
import { usePosts } from "../providers/PostsProvider"

const PostCommentBar = ({postId, onFinished} : {postId : string | number, onFinished: (comment: PostCommentProps) =>void}) => {
    const [comment,setComment] = useState<string>('')
    const [disabled,setDisabled] = useState<boolean>(false)
    const { addComment } = useComments()
    const { changeCommentCount } = usePosts()
    const submitButton = useRef<HTMLButtonElement>(null)

    useEffect(() => {
      comment.length == 0 ? setDisabled(true) : setDisabled(false)
    },[comment])

    const formSubmit = (e:React.FormEvent) => {
      e.preventDefault()
      const newComment = {
        id: `${Date.now()}_${Math.random()}`,
        postId,
        comment,
        created_at: "Now",
        isLiked: false,
        user: {
          name: authUser.name,
          username: authUser.username,
          profile_picture: authUser.profile_picture,
          isVerified: false
        }
      }
      addComment(newComment) 
      changeCommentCount(postId as string, 1)
      onFinished(newComment)
      setComment("")
    }
  return (
    <form onSubmit={formSubmit} className='h-fit flexBetween px-4 py-[6px] ss:py-[10px] gap-4'>
    <div className='w-full flex items-center gap-2'>
      <div className='w-11 aspect-square rounded-full overflow-hidden'>
        <Image src={authUser.profile_picture}
        width={300} height={300}
        className='w-full'
        alt='profile picture'/>
      </div>
      <TextAreaExpand
      value={comment}
      rows={1}
      onChange={(e) => setComment(e.target.value)}
      handleSubmit={() => submitButton.current?.click()}
      className='w-full bg-semiLight dark:bg-d_netral px-3 py-[10px] border-0 rounded-xl focus:outline-none dark:placeholder:text-d_semiLight'
      placeholder='Write a comment...'
      />
    </div>
    <button ref={submitButton} disabled={disabled} className="disabled:opacity-40 disabled:cursor-not-allowed">
        <IoSend className='text-2xl text-primary dark:text-light' />
    </button>
  </form>
  )
}

export default PostCommentBar
