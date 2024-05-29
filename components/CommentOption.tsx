"use client"
import { TbDotsVertical } from "react-icons/tb"
import Dropdown from "./ui/Dropdown"
import { IoWarningOutline } from "react-icons/io5"
import { AiOutlineDelete } from "react-icons/ai"
import DeleteComment from "./DeleteComment"

const CommentOption = ({postId, commentId, isAuthor}:{isAuthor: boolean, postId: string, commentId: string}) => {
  return (
    <Dropdown >
        <Dropdown.Trigger>
          <TbDotsVertical className="text-lg text-gray-600 dark:text-d_semiLight" />
        </Dropdown.Trigger>
        <Dropdown.Content 
        closeWhenClick={false}
        className="right-0 w-40 text-dark dark:text-d_light bg-light dark:bg-d_netral shadow-xl flex flex-col gap-1 max-h-64 overflow-auto rounded-lg py-1 px-1">
          <div className="flex justify-start items-center rounded hover:bg-light dark:hover:bg-d_semiLight dark:hover:text-dark text-sm py-[6px]">
            <IoWarningOutline className="w-8 text-xl" />
            <span>Report</span>
          </div>
          {isAuthor && (
          <>                
          <DeleteComment 
          postId={postId}
          commentId={commentId}
          className="w-full flex justify-start items-center rounded hover:bg-light text-sm dark:hover:bg-d_semiLight dark:hover:text-dark py-[6px]"> 
            <AiOutlineDelete className="w-8 text-xl" />
            <span>Delete</span>
          </DeleteComment>
          </>
          )}
        </Dropdown.Content>
    </Dropdown>
  )
}

export default CommentOption
