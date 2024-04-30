'use client'
import { authUser } from '@/constants/user'
import { AuthContext, UserProfileProps } from '@/types/user'
import { useState,createContext, useContext } from 'react'

export const authContext = createContext<AuthContext | null>(null)

const AuthProvider = ({children}:{children : React.ReactNode}) => {
  const [user,setUser] = useState<UserProfileProps>(authUser)
  return (
    <authContext.Provider 
    value={{user,setUser}}>
        {children}
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext) as AuthContext 
}

export default authContext
