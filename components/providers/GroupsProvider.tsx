"use client"
import { groups as initialGroups } from "@/constants/groups"
import { GroupProps } from "@/types/group"
import { createContext, useContext, useState } from "react"

type GroupsContext = {
  groups: GroupProps[]
  groupsJoined: () => GroupProps[]
  groupsDiscover: () => GroupProps[]
  findGroup: (id: string) => GroupProps
  join: (groupId: string) => void
  leave: (groupId: string) => void
}
const groupsContext = createContext<GroupsContext | null>(null)

const GroupsProvider = ({children}:{children: React.ReactNode}) => {
  const [groups, setGroups] = useState<GroupProps[]>(initialGroups) 
  
  const findGroup = (id: string) => {
    const group = groups.find((group) => group.id === id)
    if(!group) {
      throw Error("Group not found")
    }
    return group
  }
  const groupsJoined = () => {
    return groups.filter((group) => group.isJoin)
  }
  const groupsDiscover = () => {
    return groups.filter((group) => !group.isJoin)
  }
  const join = (groupId: string) => {
    setGroups((groups) => {
      return groups.map((group) => {
        if(group.id === groupId) {
          group.isJoin = true
        }
        return group
      })
    })
  }
  const leave = (groupId: string) => {
    setGroups((groups) => {
      return groups.map((group) => {
        if(group.id === groupId) {
          group.isJoin = false 
        }
        return group
      })
    })
  }
  return (
    <groupsContext.Provider value={{ 
      groups, 
      groupsJoined,
      groupsDiscover,
      findGroup,
      join,
      leave
    }}
    >
    {children}
    </groupsContext.Provider>
  )
}

export const useGroups = () => {
  return useContext(groupsContext) as GroupsContext
}

export default GroupsProvider
