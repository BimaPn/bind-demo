'use client'
import { BsThreeDots } from "react-icons/bs"
import Image from "next/image"
import GroupJoinButton from "./GroupJoinButton"
import { useContext, useState} from "react"
import { useGroups } from "../providers/GroupsProvider"
import PageHeader from "../PageHeader"
import EditGroup from "./EditGroup"
import Dropdown from "../ui/Dropdown"
import { CiEdit } from "react-icons/ci"
import { AiOutlineDelete } from "react-icons/ai"
import { GroupProps } from "@/types/group"
import { useRouter } from "next-nprogress-bar"
import useConfirm from "../ui/Confirm"

const GroupHeader = ({groupId}:{groupId: string}) => {
  const { findGroup } = useGroups()
  const [group, setGroup] = useState(findGroup(groupId))
  return (
    <>
    <PageHeader title={group.name} showWideScreen={false} className="ss:hidden block" />

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

    <div className="pb-3 flex flex-col px-3 ss:px-4 pt-4 text-dark dark:text-d_light">
      <h1 className="font-bold text-xl ss:text-2xl">{group.name}</h1>
      <p className="break-all text-sm ss:text-base my-2">{group.description}</p>
      <div className="flex ss:items-center flex-col ss:flex-row ss:justify-between gap-2">
        <div className="flex items-center gap-1 text-sm ss:text-base">
          <span className="font-medium">{group.memberTotal}</span>
          <span className="text-semiDark dark:text-d_semiLight">Members</span>
        </div>
        <div className="flex flex-row ss:flex-row-reverse items-center gap-2">
          <GroupJoinButton 
          groupId={group.id}
          isJoin={group.isJoin}
          className="!w-full ss:!w-fit ss:px-7"
          />
          {group.isAdmin && (
            <div className="relative"> 
            <GroupDropdown
            group={group}
            />
            </div>
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
  const [ConfirmDialog, confirm] = useConfirm({
    label: "Are you sure you want to delete this group ?"
  })
  const deleteButton = async (e: React.MouseEvent) => {
    e.preventDefault()
    let isDelete = await confirm()
    if(!isDelete) return;
   
    markDelete(group.id)
    router.push(`/group`)
  }
  return (
    <> 
    <Dropdown>  
      <Dropdown.Trigger>
        <div className="flexCenter px-[6px] aspect-square rounded-full border border-gray-300 dark:border-d_netral text-dark dark:text-light">
          <BsThreeDots className="text-xl" />
        </div>
      </Dropdown.Trigger>

      <Dropdown.Content className="right-0 w-40 text-dark dark:text-d_light">
        <ul className="bg-light dark:bg-d_semiDark flex flex-col shadow rounded-lg py-2 px-2 dark:border border-0 dark:border-d_netral">
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
    <ConfirmDialog />
    </>
  )
}

export default GroupHeader
