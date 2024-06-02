"use client"
import PageHeader from "@/components/PageHeader"
import Post from "@/components/post/Post"
import PostComment from "@/components/post/PostComment"
import PostCommentBar from "@/components/post/PostCommentBar"
import { useComments } from "@/components/providers/CommentsProvider"
import { usePosts } from "@/components/providers/PostsProvider"
import { PostCommentProps } from "@/types/post"
import { useEffect, useState } from "react"

const page = ({params}:{params:{id: string}}) => {
  const { findPost  } = usePosts()
  const { comments, addComment } = useComments()
  const [post, setPost] = useState(findPost(params.id))

  useEffect(() => {
    scrollToBottom()
  },[comments])

  const add = (comment: PostCommentProps) => {
    addComment(comment)
  }
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
  return (
    <section className="fixed inset-0 flex flex-col ss:relative ss:z-[0] z-[900] overflow-auto bg-white dark:bg-d_semiDark">
      <PageHeader title={`${post.user.username}'s Post`} showWideScreen={false} />
      <div className="flex flex-col ss:h-fit ss:rounded-xl relative">
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
          <div className='h-full ss:min-h-[160px] flex flex-col gap-3 px-2 ss:px-4 mb-14 mt-3'>
            {comments.filter(comment => comment.postId === params.id).map((comment, index) => (
              <PostComment key={index} comment={comment} />
            ))}
          </div>
        
        <div className="fixed ss:static bottom-0 left-0 right-0 bg-white dark:bg-d_semiDark rounded-b-xl border-t dark:border-d_netral ss:border-0">
          <PostCommentBar
          postId={post.id as number | string}
          onFinished={addComment}
          />
        </div>
      </div>
    </section>
  )
}

export default page
