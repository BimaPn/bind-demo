'use client'

import ApiClient from "@/app/api/axios/ApiClient"
import { useState } from "react"

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
    const buttonClick = (e:React.MouseEvent) => {
        e.stopPropagation()
    }
  return (
    <button 
    onClick={buttonClick}
    className={`text-[15px] px-5 py-2 rounded-full font-semibold
    ${isFollow ? 'bg-semiLight dark:bg-d_netral text-dark dark:text-d_light' : 'bg-blue-100 dark:bg-semiLight text-blue-600 text-sm dark:text-dark'} ${className}`}>
    {isFollow ? 'Unfollow' : ' Follow'} 
    </button>  
  )
}

export default FollowUserBtn
