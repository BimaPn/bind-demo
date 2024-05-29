'use client'
import { BsThreeDots } from "react-icons/bs"
import Dropdown from "../ui/Dropdown"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { IoWarningOutline } from "react-icons/io5"
import PostDelete from "./PostDelete"
import { PostEditContextProps } from "@/types/post"
import PostEdit from "./PostEdit"

const PostOptionDropdown = ({
  isAuthor,
  postId,
  caption,
  media
  }:{
    isAuthor:boolean,
    postId: string,
    caption?: string,
    media?: string[]
  }) => {
  return (
    <Dropdown>
        <Dropdown.Trigger>
            <div className="flexCenter px-2 aspect-square rounded-full hover:bg-light dark:hover:bg-d_netral">
              <BsThreeDots className="text-xl text-dark dark:text-light"/>
            </div>
        </Dropdown.Trigger>
        <Dropdown.Content 
        className="right-0 w-36 text-dark dark:text-d_light bg-light dark:bg-d_netral shadow-xl flex flex-col gap-1 max-h-64 overflow-auto rounded-lg py-1 px-1">
            <div className="flex justify-start items-center rounded hover:bg-light dark:hover:bg-d_semiLight dark:hover:text-dark text-sm py-[6px]">
                <IoWarningOutline className="w-8 text-lg" />
                <span>Report</span>
            </div>
            {isAuthor && (
            <>                
            <PostEdit
            id={postId}
            caption={caption} 
            media={media}
            className="w-full"
            >
              <div className="flex justify-start items-center rounded hover:bg-light dark:hover:bg-d_semiLight text-sm dark:hover:text-dark py-[6px]">
                  <AiOutlineEdit className="w-8 text-xl" />
                  <span>Edit</span>
              </div>
            </PostEdit>
            </>
            )}

        </Dropdown.Content>
    </Dropdown>
  )
}

export default PostOptionDropdown
