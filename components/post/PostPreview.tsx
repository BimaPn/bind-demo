"use client"
import { PostProps } from "@/types/post"
import { useState } from "react"
import PostModal from "./PostModal"
import Post from "./Post"
import PostMedia from "./PostMedia"

const PostPreview = ({post}:{post: PostProps}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    {isOpen && (
      <PostModal
      show={true}
      onClose={() => setIsOpen(false)}
      post={post}
      />
    )}  

    <div  
    onClick={() => setIsOpen(true)}
    className="w-full rounded-xl shadow"
    >
      <Post
      id={post.id}
      caption={post.caption}
      user={post.user}
      commentTotal={post.commentTotal}
      likedTotal={post.likedTotal}
      media={post.media && (
        <PostMedia 
        playInView
        media={post.media as string[]}
        isOpenModal={isOpen} 
        />
      )}
      created_at={post.created_at}
      isLiked={post.isLiked}
      isSaved={post.isSaved}
      playInView
      />
    </div>

    </>
  )
}

export default PostPreview
