'use client'

import ApiClient from "@/app/api/axios/ApiClient"
import { useState } from "react"
import { useUsers } from "../providers/UsersProvider"

const FollowUserBtn = (
{
  isFollow,
  username,
  className
} : 
{
  isFollow : boolean,
  username: string,
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
    className={`px-5 text-sm py-2 rounded-full font-semibold
    ${isFollow ? 'bg-semiLight dark:bg-d_netral text-gray-600 dark:text-d_light !text-xs !py-[8px]' : 'bg-blue-100 dark:bg-semiLight text-blue-600 dark:text-dark'} ${className}`}>
    {isFollow ? 'Unfollow' : ' Follow'} 
    </button>  
  )
}

export default FollowUserBtn
