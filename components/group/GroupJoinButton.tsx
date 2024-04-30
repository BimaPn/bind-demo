'use client'
import { ButtonProps } from "@/types/types"
import { useState } from 'react'

const GroupJoinButton = ({groupId,isJoin,changeIsJoin,className,...props}:ButtonProps &
  {groupId : string | number,isJoin : boolean,changeIsJoin : (result:boolean) => void}) => {

  const [isBtnDisable,setIsBtnDisable] = useState<boolean>(false)
  const buttonClick = (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setIsBtnDisable(true)
    if(isJoin) {
    }
  }
  return (
    <>
    <button
    className={`
    w-full py-2 rounded-full font-medium px-8
    ${isJoin ? 'bg-semiLight text-dark dark:text-d_light dark:bg-d_netral' : 'bg-dark text-light'} ${className}`}
    onClick={buttonClick}
    disabled={isBtnDisable}
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
