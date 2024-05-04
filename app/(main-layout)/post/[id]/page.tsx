"use client"
import Post from "@/components/post/Post"
import PostComment from "@/components/post/PostComment"
import PostCommentBar from "@/components/post/PostCommentBar"
import { useComments } from "@/components/providers/CommentsProvider"
import { usePosts } from "@/components/providers/PostsProvider"
import { PostCommentProps } from "@/types/post"
import { useEffect, useState } from "react"

const page = ({params}:{params:{id: string}}) => {
  const { findPost  } = usePosts()
  const { findComments } = useComments()
  const [post, setPost] = useState(findPost(params.id))
  const [postComments, setPostComments] = useState(findComments(params.id))

  useEffect(() => {
    scrollToBottom()
  },[postComments])

  const addComment = (comment: PostCommentProps) => {
    setPostComments((prev) => [...prev, comment])
  }
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
  return (
    <section className="bg-white dark:bg-d_semiDark rounded-xl relative">
      <Post
        id={post.id}
        caption={post.caption} 
        user={post.user} 
        commentTotal={post.commentTotal} 
        likedTotal={post.likedTotal} 
        created_at={post.created_at} 
        media={post.media}
        hover={false}
        isLiked={post.isLiked}
        isSaved={post.isSaved}
      /> 
      <div className='min-h-[160px] flex flex-col gap-3 px-2 ss:px-4 pb-2 mt-3'>
        {postComments.map((comment, index) => (
          <PostComment key={index} comment={comment} />
        ))}
      </div>
      
      <div className="sticky bottom-0 left-0 right-0 bg-white dark:bg-d_semiDark rounded-b-xl">
        <PostCommentBar
        postId={post.id as number | string}
        onFinished={addComment}
        />
      </div>
    </section>
  )
}

export default page
