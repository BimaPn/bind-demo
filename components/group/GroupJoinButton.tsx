'use client'
import { ButtonProps } from "@/types/types"
import { useState } from 'react'
import { useGroups } from "../providers/GroupsProvider"

const GroupJoinButton = ({groupId,isJoin,className,...props}:ButtonProps &
  {groupId : string,isJoin : boolean}) => {
  const { join, leave } = useGroups()
  const buttonClick = (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if(isJoin) {
      leave(groupId)
    }else {
      join(groupId)
    }
  }
  return (
    <>
    <button
    className={`
    w-full py-2 rounded-full font-medium text-sm px-6
    ${isJoin ? 'bg-semiLight text-dark dark:text-d_light dark:bg-d_netral' : 'bg-dark text-light'} ${className}`}
    onClick={buttonClick}
    {...props}
    >
      <span>
        {isJoin ? 'Joined' : 'Join'}
      </span>
    </button>
    </>
  )
}

export default GroupJoinButton
