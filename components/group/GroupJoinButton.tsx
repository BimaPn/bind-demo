'use client'
import { ButtonProps } from "@/types/types"
import { useState } from 'react'
import { useGroups } from "../providers/GroupsProvider"
import useConfirm from "../ui/Confirm"

const GroupJoinButton = ({groupId,isJoin,className,...props}:ButtonProps &
  {groupId : string,isJoin : boolean}) => {
  const { join, leave } = useGroups()
  const [ConfirmDialog, confirm] = useConfirm({
    label: "Are you sure you want to quit this group ?"
  })

  const buttonClick = async (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if(isJoin) {
      const isTrue = await confirm()
      if(isTrue) {
        leave(groupId)
      }
    }else {
      join(groupId)
    }
  }
  return (
    <>
    <button
    className={`w-full font-medium text-sm rounded-full py-[6px] 
    ${!isJoin ? "dark:bg-d_netral bg-semiLight " : "border border-gray-300 dark:border-d_netral"} ${className}`}
    onClick={buttonClick}
    {...props}
    >
      <span>
        {isJoin ? 'Joined' : 'Join'}
      </span>
    </button>
    <ConfirmDialog />
    </>
  )
}

export default GroupJoinButton
