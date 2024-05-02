"use client"
import { useEffect, useState } from "react"
import PostSkeleton from "../skeletons/PostSkeleton"
import { usePosts } from "../providers/PostsProvider"
import PostsContent from "./PostsContent"

const PostsSaved = () => {
  const [loaded, setLoaded] = useState(false)
  const { savedPosts } = usePosts()
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoaded(true)
    },500)

    return () => clearTimeout(timerId)
  },[])
  return (
    <>
    <div className="flexCenter flex-col gap-1 sm:gap-3 mt-1 ss:m-0">
      {!loaded && <PostSkeleton count={3} />}
      {loaded && <PostsContent posts={savedPosts()} />}
    </div>
    </>
  )
}

export default PostsSaved
