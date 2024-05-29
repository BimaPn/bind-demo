'use client'
import { useContext, useEffect, useState } from "react"
import PostSkeleton from "../skeletons/PostSkeleton"
import PostsContent from "../post/PostsContent"
import { usePosts } from "../providers/PostsProvider"

const UserContent = ({username} : {username : string}) => {
  const [loaded, setLoaded] = useState(false)
  const { userPosts } = usePosts()
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoaded(true)
    },500)

    return () => clearTimeout(timerId)
  },[])
  return (
    <>
    <div className="flexCenter flex-col gap-1 sm:gap-3 mt-2 ss:mt-4">
    {!loaded && < PostSkeleton count={2} />}
    {loaded && (
      <PostsContent
      posts={userPosts(username)} />
    )}
    </div>
    </>
  )
}

export default UserContent
