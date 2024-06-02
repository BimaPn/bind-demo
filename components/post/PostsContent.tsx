"use client"
import { PostProps } from "@/types/post"
import Post from "./Post"
import { useRouter } from "next-nprogress-bar"
import { BsEmojiNeutralFill } from "react-icons/bs"

const PostsContent = ({posts} : {posts:PostProps[]}) => {
  const router = useRouter()

  const directTo = (postId: string) => {
    router.push(`/post/${postId}`)
  }
  return (
    <>
      {posts.length <= 0 && (
        <div className="flexCenter flex-col gap-2 text-netral dark:text-d_semiLight py-10">
          <BsEmojiNeutralFill className="text-[50px] ss:text-[56px]" />
          <span className="font-medium">There is no post yet.</span>
        </div>
      )}
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
