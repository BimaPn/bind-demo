'use client'
import { authUser } from '@/constants/user'
import { AuthContext, UserProfileProps } from '@/types/user'
import { useState,createContext, useContext } from 'react'

export const authContext = createContext<AuthContext | null>(null)

const AuthProvider = ({children}:{children : React.ReactNode}) => {
  const [user,setUser] = useState<UserProfileProps>(authUser)

  const updateUser = (data:any) => {
    const updatedUser = {
      ...user,
      ...data
    }
    setUser(updatedUser)
  }
  return (
    <authContext.Provider 
    value={{user,setUser, updateUser}}>
        {children}
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext) as AuthContext 
}

export default AuthProvider 
