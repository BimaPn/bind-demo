"use client"
import { PostProps } from "@/types/post"
import Post from "./Post"
import { useRouter } from "next-nprogress-bar"

const PostsContent = ({posts} : {posts:PostProps[]}) => {
  const router = useRouter()

  const directTo = (postId: string) => {
    router.push(`/post/${postId}`)
  }
  return (
    <>
      {posts.map((post) => (
        <div 
        key={post.id}
        onClick={() => directTo(post.id as string)}
        className="w-full ss:rounded-xl ss:shadow cursor-pointer"
        >
          <Post 
          id={post.id}
          caption={post.caption}
          user={post.user}
          commentTotal={post.commentTotal}
          likedTotal={post.likedTotal}
          media={post.media}
          created_at={post.created_at}
          isLiked={post.isLiked}
          isSaved={post.isSaved}
          playInView={true}
          />
        </div>
      ))}
    </>
  )
}

export default PostsContent
