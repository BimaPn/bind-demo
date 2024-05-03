'use client'
import CreateGroup from "./CreateGroup"
import SearchGroup from "./SearchGroup"
import { FiPlus } from "react-icons/fi"
import GroupCardSkeleton from "../skeletons/GroupCardSkeleton"
import { useEffect, useState } from "react"
import { useGroups } from "../providers/GroupsProvider"
import GroupCard from "./GroupCard"
import Link from "next/link"

const GroupJoined = () => {
  const { groupsJoined } = useGroups()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  },[])

  return (
    <div className={`flex flex-col gap-2 ss:gap-4 dark:bg-d_semiDark bg-white ss:rounded-xl px-3 ss:px-4 pt-1 ss:pt-4 pb-3 ss:pb-5 ss:shadow`}>
      <div>
        <div className="flex flex-col items-center text-center mb-5">
          <span className="font-medium ss:text-lg">Search Something Dirty Yeah</span>
          <span className="text-xs ss:text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className="flex justify-center items-center gap-2">
            <SearchGroup className="w-[90%] ss:w-[70%]"/>
            <CreateGroup className="px-2 py-2 aspect-square bg-semiLight dark:bg-d_netral rounded-full hover:bg-gray-200">
                <FiPlus className="text-lg text-dark dark:text-light" />
            </CreateGroup>
        </div>
      </div>
      <div className="flexBetween pt-2 mb-0 ss:-mb-2 ss:pt-0">
        <h2 className="font-medium ss:text-lg">Your groups</h2>
      </div>
      <div className="grid grid-cols-1 ss:grid-cols-2 gap-3">
        {!loaded && <GroupCardSkeleton count={2} />}
        {loaded && groupsJoined().map((group) => (
          <Link href={`/groups/${group.id}`} key={group.id}>              
            <GroupCard
            id={group.id}
            name={group.name}
            group_picture={group.group_picture}
            memberTotal={group.memberTotal}
            isJoin={group.isJoin} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default GroupJoined
