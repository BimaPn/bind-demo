'use client'
import { useState } from "react"
import { useUsers } from "../providers/UsersProvider"

const FollowUserBtn = (
{
  isFollow,
  username,
  big=false,
  className
} : 
{
  isFollow : boolean,
  username: string,
  big?:boolean,
  className ?:string
}
) => {
  const { follow, unfollow } = useUsers()
  const buttonClick = (e:React.MouseEvent) => {
      e.preventDefault()
      if(isFollow) {
        unfollow(username)
      }else {
        follow(username)
      }
  }
  return (
    <button 
    onClick={buttonClick}
    className={`${big ? "text-sm":"text-xs"} py-2 rounded-full font-semibold
    ${isFollow ? `bg-semiLight dark:bg-d_netral text-gray-600 dark:text-d_light ${big ? "px-4" : "!py-[7px]"}` : 'bg-blue-100 dark:bg-semiLight text-blue-600 dark:text-dark px-5'} ${className}`}>
    {isFollow ? 'Unfollow' : ' Follow'} 
    </button>  
  )
}

export default FollowUserBtn
