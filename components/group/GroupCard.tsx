'use client'
import Image from "next/image"
import GroupJoinButton from "./GroupJoinButton"
import { GroupCardProps } from "@/types/group"
import { useState } from "react"
import Link from "next/link"

const GroupCard = ({id,group_picture,name,memberTotal,isJoin,className}:GroupCardProps) => {
    const [group,setGroup] = useState<GroupCardProps>({
        id,
        name,
        group_picture,
        memberTotal,
        isJoin
    })
  return (
    <div className={`flex flex-col border dark:border-d_netral pb-2 gap-1 hover:cursor-pointer overflow-hidden rounded-xl ${className}`}>
        <Link href={`/group/${group.id}`} className="w-full h-fit aspect-video relative">
            <Image 
            src={group_picture}
            fill
            objectFit="cover"   
            alt="group picture"/>
        </Link>
        <div className="w-fit px-2">
          <Link href={`/group/${group.id}`} >              
              <span className="block w-full truncate mb-[2px]">{name}</span>
          </Link>
          <div 
          className="flex items-center gap-1 text-xs text-semiDark dark:text-d_semiLight leading-5"
          >
            <span>{group.memberTotal}</span>
            <span>Members</span>
          </div>
        </div>

        <div className="px-2 mt-2 mb-[2px]">
          <GroupJoinButton groupId={id} isJoin={isJoin} />
        </div>
    </div>
  )
}

export default GroupCard
