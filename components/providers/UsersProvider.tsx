"use client"
import { initialUsers } from "@/constants/user"
import { UserProfileProps } from "@/types/user"
import { createContext, useContext, useState } from "react"

type UsersContext = {
  users: UserProfileProps[]
}
const usersContext = createContext<UsersContext | null>(null)

const UsersProvider = ({children}:{children: React.ReactNode}) => {
  const [users, setUsers] = useState<UserProfileProps[]>(initialUsers)
  return (
    <usersContext.Provider value={{ users }}>
    {children}
    </usersContext.Provider>
  )
}

export const useUsers = () => {
  return useContext(usersContext) as UsersContext
}

export default UsersProvider
