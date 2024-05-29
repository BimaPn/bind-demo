import Image from "next/image"
import { VscVerifiedFilled } from "react-icons/vsc"
import { PiHeartLight} from "react-icons/pi"
import { GoComment } from "react-icons/go"
import { PostCommentProps } from "@/types/post"
import RoundedImage from "../ui/RoundedImage"
import CommentLike from "./CommentLike"
import { TbDotsVertical } from "react-icons/tb"
import Dropdown from "../ui/Dropdown"
import CommentOption from "../CommentOption"
import { authUser } from "@/constants/user"

const PostComment = ({comment} : {comment: PostCommentProps}) => {
  return (
    <div className="flex justify-between gap-3 group">
      <div className="flex gap-3">
        <RoundedImage src={comment.user.profile_picture} alt="profile_picture" />
        <div className="w-full flex flex-col gap-[2px] text-dark dark:text-d_light">
            <div className="flex items-center gap-1">
                <span className="font-medium">
                    {comment.user.name}
                </span>
                {comment.user.isVerified && (
                <VscVerifiedFilled className='text-blue-500 text-lg' />
                )}
                <span className="text-semiDark dark:text-d_semiLight">
                · <span className="text-xs">{comment.created_at}</span>
                </span>
            </div>
            <p>
                {comment.comment}
            </p>
            <div className="flex items-center gap-[12px] text-semiDark dark:text-d_semiLight my-3">
              <CommentLike isLiked={comment.isLiked} commentId={comment.id} />
              <div className="flexCenter gap-[6px]">
                  <GoComment strokeWidth={.5} className="text-[17px]" />
                  <span className="text-[13px]">{3.2+ "K" || ''}</span>
              </div>
            </div>
        </div>
      </div>  
      <div className="block sm:hidden group-hover:block">
        <CommentOption
        isAuthor={comment.user.username === authUser.username} 
        postId={comment.postId as string}
        commentId={comment.id}
        />
      </div>
    </div>
  )
}

export default PostComment
