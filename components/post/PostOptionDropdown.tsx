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
        className="right-0 w-40 text-dark dark:text-d_light bg-light dark:bg-d_netral shadow-xl flex flex-col gap-1 max-h-64 overflow-auto rounded-lg py-2 px-1">
            <div className="flex justify-start items-center py-1 rounded hover:bg-light dark:hover:bg-d_semiLight dark:hover:text-dark">
                <IoWarningOutline className="w-10 text-xl" />
                <span>Report post</span>
            </div>
            {isAuthor && (
            <>                
            <PostEdit
            id={postId}
            caption={caption} 
            media={media}
            className="w-full"
            >
              <div className="flex justify-start items-center py-1 rounded hover:bg-light dark:hover:bg-d_semiLight dark:hover:text-dark">
                  <AiOutlineEdit className="w-10 text-xl" />
                  <span>Edit post</span>
              </div>
            </PostEdit>

            <PostDelete postId={postId} className="flex justify-start items-center py-1 rounded hover:bg-light dark:hover:bg-d_semiLight dark:hover:text-dark">
                <AiOutlineDelete className="w-10 text-xl" />
                <span>Delete post</span>
            </PostDelete>
            </>
            )}

        </Dropdown.Content>
    </Dropdown>
  )
}

export default PostOptionDropdown
