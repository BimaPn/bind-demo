"use client"
import GroupCard from "./GroupCard"
import Link from "next/link"
import { useGroups } from "../providers/GroupsProvider"
import { useEffect, useState } from "react"
import GroupCardSkeleton from "../skeletons/GroupCardSkeleton"

const GroupsDiscover = ({className}:{className ?: string}) => {
  const { groupsDiscover } = useGroups()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  },[])
  return (
    <div className={`dark:bg-d_semiDark bg-white flex flex-col gap-2 ss:gap-4 px-3 ss:px-4 pb-3 ss:pb-4 pt-3 ss:rounded-xl ss:shadow ${className}`}>
      <div className="ss:-mb-2 mb-0">
        <h2 className="font-medium ss:text-lg">Discover Groups</h2>
      </div>
        <div className="grid grid-cols-1 ss:grid-cols-2 gap-3">
          {!loaded && <GroupCardSkeleton count={4} />}
          {loaded && groupsDiscover().map((group) => (
            <Link href={`/group/${group.id}`} key={group.id}>              
              <GroupCard
              id={group.id}
              name={group.name}
              group_picture={group.group_picture}
              memberTotal={group.memberTotal}
              isJoin={group.isJoin} />
            </Link>
          ))}
        </div>
      <Link href={`/groups/discover`} className="text-blue-600 font-medium ss:-mt-1 text-sm">
        Show more 
      </Link>
    </div>
  )
}

export default GroupsDiscover
