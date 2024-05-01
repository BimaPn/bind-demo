"use client"
import { initialUsers } from "@/constants/user"
import { UserProfileProps } from "@/types/user"
import { createContext, useContext, useState } from "react"

type UsersContext = {
  users: UserProfileProps[]
  follow: (username:string) => void
  unfollow: (username:string) => void
  findUser: (username:string) => UserProfileProps
}
const usersContext = createContext<UsersContext | null>(null)

const UsersProvider = ({children}:{children: React.ReactNode}) => {
  const [users, setUsers] = useState<UserProfileProps[]>(initialUsers)

  const follow = (username: string) => {
    setUsers((users) => {
      return users.map((user) => {
        if(user.username === username) {
            user.isFollow = true 
        }
        return user
      })
    })
  }

  const unfollow = (username: string) => {
    setUsers((users) => {
      return users.map((user) => {
        if(user.username === username) {
            user.isFollow = false 
        }
        return user
      })
    })
  }

  const findUser = (username: string) => {
    const user = users.find(user => user.username === username)
    if(!user) {
      throw Error("User not found.")
    }
    return user
  }

  return (
    <usersContext.Provider value={{ users, follow, unfollow, findUser }}>
    {children}
    </usersContext.Provider>
  )
}

export const useUsers = () => {
  return useContext(usersContext) as UsersContext
}

export default UsersProvider
