"use client"
import { useState } from "react"
import { useUsers } from "../providers/UsersProvider"
import FollowUserBtn from "./FollowUserBtn"
import { UserProfileProps } from "@/types/user"

const FollowUser = ({username}:{username: string}) => {
  const { findUser, follow } = useUsers()
  const [user, setUser] = useState<UserProfileProps>(findUser(username))

  return (
    <FollowUserBtn 
    username={user.username}
    isFollow={user.isFollow} 
    big
    className="!py-2 !w-full ss:!w-fit" 
    />
  )
}

export default FollowUser
