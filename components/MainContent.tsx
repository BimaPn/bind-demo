"use client"
import { useEffect, useState } from "react"
import { usePosts } from "./providers/PostsProvider"
import PostSkeleton from "./skeletons/PostSkeleton"
import PostsContent from "./post/PostsContent"

const MainContent = () => {
  const { posts } = usePosts()
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    setLoaded(true)
  },[])
  return (
    <>
    <div className="flexCenter flex-col gap-1 sm:gap-3 mt-4">
       {!loaded && <PostSkeleton count={4} />}
       {loaded && (
        <PostsContent posts={posts} />
       )}
    </div>
    </>
  )
}

export default MainContent

