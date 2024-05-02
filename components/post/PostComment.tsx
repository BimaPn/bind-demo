import Image from "next/image"
import { BsThreeDots } from "react-icons/bs"
import { VscVerifiedFilled } from "react-icons/vsc"
import { PiHeartLight} from "react-icons/pi"
import { GoComment } from "react-icons/go"
import { PostCommentProps } from "@/types/post"
import RoundedImage from "../ui/RoundedImage"
import CommentLike from "./CommentLike"

const PostComment = ({comment} : {comment: PostCommentProps}) => {
  return (
        <div className="flex gap-3">
            {/* image */}
            <RoundedImage src={comment.user.profile_picture} alt="profile_picture" />
            <div className="w-full flex flex-col gap-[2px] text-dark dark:text-d_light">
                {/* name */}
                <div className="flex items-center gap-1">
                    <span className="font-medium">
                        {comment.user.name}
                    </span>
                    {comment.user.isVerified && (
                    <VscVerifiedFilled className='text-blue-500 text-lg' />
                    )}
                    <span className="text-semiDark dark:text-d_semiLight">
                    · <span className="text-sm">{comment.created_at}</span>
                    </span>
                </div>
                {/* comment */}
                <p>
                    {comment.comment}
                </p>
                {/* footer */}
                <div className="flex items-center gap-6 text-semiDark dark:text-d_semiLight my-3">
                  <CommentLike isLiked={comment.isLiked} commentId={comment.id} />
                  <div className="flexCenter gap-[6px]">
                      <GoComment strokeWidth={.5} className="text-[17px]" />
                      <span className="text-[13px]">{3.2+ "K" || ''}</span>
                  </div>
                      <BsThreeDots className="text-xl" />
                  </div>
                </div>
        </div>
  )
}

export default PostComment
