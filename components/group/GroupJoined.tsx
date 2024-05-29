'use client'
import CreateGroup from "./CreateGroup"
import SearchGroup from "./SearchGroup"
import { FiPlus } from "react-icons/fi"
import GroupCardSkeleton from "../skeletons/GroupCardSkeleton"
import { useEffect, useState } from "react"
import { useGroups } from "../providers/GroupsProvider"
import GroupCard from "./GroupCard"
import Link from "next/link"
import { BsEmojiNeutralFill } from "react-icons/bs"

const GroupJoined = () => {
  const { groupsJoined, deleteGroup } = useGroups()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    deleteGroup()
    setLoaded(true)
  },[])

  return (
    <div className={`flex flex-col gap-2 ss:gap-4 dark:bg-d_semiDark bg-white ss:rounded-xl px-3 ss:px-4 pt-1 ss:pt-4 pb-3 ss:pb-5 ss:shadow`}>
      <div className="flexBetween pt-2 mb-0 ss:-mb-2 ss:pt-0">
        <h2 className="font-medium ss:text-lg">Your groups</h2>
        <div className="hidden ss:block">
          <CreateGroup className="p-2 aspect-square rounded-full hover:bg-gray-200 dark:hover:bg-d_netral">
              <FiPlus className="text-lg text-dark dark:text-light" />
          </CreateGroup>
        </div>

      </div>
        {loaded && groupsJoined().length <= 0 && (
          <div className="w-full flexCenter flex-col gap-2 text-netral dark:text-d_semiLight py-3">
            <BsEmojiNeutralFill className="text-[56px]" />
            <span className="font-medium">There is no group yet.</span>
          </div>
        )}
      <div className="grid grid-cols-1 ss:grid-cols-2 gap-3">
        {!loaded && <GroupCardSkeleton count={2} />}

        {loaded && groupsJoined().map((group) => (
            <GroupCard
            key={group.id}
            id={group.id}
            name={group.name}
            group_picture={group.group_picture}
            memberTotal={group.memberTotal}
            isJoin={group.isJoin} />
        ))}
      </div>
    </div>
  )
}

export default GroupJoined
