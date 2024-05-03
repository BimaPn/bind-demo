"use client"
import { groups as initialGroups } from "@/constants/groups"
import { GroupProps } from "@/types/group"
import { createContext, useContext, useState } from "react"

type GroupsContext = {
  groups: GroupProps[]
  groupsJoined: () => GroupProps[]
  groupsDiscover: () => GroupProps[]
}
const groupsContext = createContext<GroupsContext | null>(null)

const GroupsProvider = ({children}:{children: React.ReactNode}) => {
  const [groups, setGroups] = useState<GroupProps[]>(initialGroups) 

  const groupsJoined = () => {
    return groups.filter((group) => group.isJoin)
  }
  const groupsDiscover = () => {
    return groups.filter((group) => !group.isJoin)
  }
  return (
    <groupsContext.Provider value={{ groups, groupsJoined, groupsDiscover }}>
    {children}
    </groupsContext.Provider>
  )
}

export const useGroups = () => {
  return useContext(groupsContext) as GroupsContext
}

export default GroupsProvider
