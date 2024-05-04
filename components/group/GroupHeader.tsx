'use client'
import { BsThreeDots } from "react-icons/bs"
import Image from "next/image"
import GroupJoinButton from "./GroupJoinButton"
import { useContext, useEffect, useState} from "react"
import { useGroups } from "../providers/GroupsProvider"
import PageHeader from "../PageHeader"
import CreatePostModal from "../post/CreatePostModal"
import { IoIosAddCircleOutline } from "react-icons/io"
import EditGroup from "./EditGroup"
import Dropdown from "../ui/Dropdown"
import { CiEdit } from "react-icons/ci"
import { AiOutlineDelete } from "react-icons/ai"
import { GroupProps } from "@/types/group"
import { useRouter } from "next-nprogress-bar"

const GroupHeader = ({groupId}:{groupId: string}) => {
  const { findGroup } = useGroups()
  const [group, setGroup] = useState(findGroup(groupId))

  return (
    <>
    <PageHeader title={group.name} showWideScreen={false} className="ss:hidden block">
      <CreatePostModal
      groupId={group.id}
      className='block ss:hidden'>
        {group.isJoin && (
          <IoIosAddCircleOutline className='text-3xl text-dark dark:text-light' />
        )}
      </CreatePostModal>
    </PageHeader>

    <section className="bg-light dark:bg-d_semiDark sm:shadow rounded-none ss:rounded-t-xl">
        <div className="aspect-[2.35/1] relative">
          <Image 
          src={group.group_picture}
          fill
          objectFit="cover"
          alt="group picture"
          className="ss:rounded-t-xl"
          />
        </div>

    <div className="pb-3 flex flex-col px-4 pt-4 text-dark dark:text-d_light">
      <h1 className="font-bold text-2xl">{group.name}</h1>
      <p className="break-all my-2">{group.description}</p>
      <div className="flex ss:items-center flex-col ss:flex-row ss:justify-between gap-2">
        <div className="flex items-center gap-1">
          <span className="font-medium">{group.memberTotal}</span>
          <span className="text-semiDark dark:text-d_semiLight">Members</span>
        </div>
        <div className="flex flex-row ss:flex-row-reverse items-center gap-[6px]">
          <GroupJoinButton 
          groupId={group.id}
          isJoin={group.isJoin}
          className="!w-full ss:!w-fit"
          />
          {group.isAdmin && (
            <GroupDropdown
            group={group}
            />
          )}
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

const GroupDropdown = ({group}:{group: GroupProps}) => {
  const { markDelete } = useGroups()
  const router = useRouter()
  const deleteButton = (e: React.MouseEvent) => {
    e.preventDefault()
    let isDelete = confirm("Are you sure you want to delete this group ?")
    if(!isDelete) return;
   
    markDelete(group.id)
    router.push(`/group`)
  }
  return (
    <Dropdown>  
      <Dropdown.Trigger>
        <div className="flexCenter px-[10px] aspect-square rounded-full bg-semiLight dark:bg-d_netral text-dark dark:text-light">
          <BsThreeDots className="text-xl" />
        </div>
      </Dropdown.Trigger>

      <Dropdown.Content className="right-0 w-40 text-dark dark:text-d_light">
        <ul className="bg-light dark:bg-d_semiDark flex flex-col shadow rounded-lg py-2 px-2">
          <li>
            <EditGroup
            id={group.id}
            group_picture={group.group_picture}
            name={group.name}
            description={group.description}
            >
            <div className="flex items-center gap-2 py-2 px-1 hover:bg-semiLight dark:hover:bg-d_netral rounded-lg">
              <CiEdit className="text-xl" />
              <span>Edit Group</span>
            </div>
            </EditGroup>
          </li>
          <li>
            <button onClick={deleteButton} className="flex items-center gap-2 py-2 px-1 hover:bg-semiLight dark:hover:bg-d_netral rounded-lg">
              <AiOutlineDelete className="text-xl" />
              <span>Delete Group</span>
            </button>
          </li>
        </ul>
      </Dropdown.Content>
    </Dropdown> 
  )
}

export default GroupHeader
