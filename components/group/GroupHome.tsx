'use client'
import { useEffect, useState } from "react"
import { GroupContextProps } from "@/types/group"
import { usePosts } from "../providers/PostsProvider"
import { useGroups } from "../providers/GroupsProvider"
import PostSkeleton from "../skeletons/PostSkeleton"
import PostsContent from "../post/PostsContent"
import CreatePostGroup from "./CreatePostGroup"

const GroupHome = ({groupId}:{groupId:string}) => {
  const { groupPosts } = usePosts()
  const { findGroup } = useGroups()
  const [loading,setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(false)
  },[])
  return (
    <div>
      <div className="flexCenter flex-col gap-0 sm:gap-3 mt-2 ss:mt-4">
        {!loading && (
        <>
        {findGroup(groupId).isJoin && (
          <div className='w-full hidden ss:block'>
            <CreatePostGroup groupId={groupId} />
          </div>
        )}
        <PostsContent posts={groupPosts(groupId)}/>
        </>
        )}
        {loading && (
          <PostSkeleton count={2}/>
        )}
      </div>
    </div>
  )
}

export default GroupHome
