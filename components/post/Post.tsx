'use client'
import { GoComment } from "react-icons/go"
import { PiShareFatLight } from "react-icons/pi"
import { VscVerifiedFilled } from "react-icons/vsc"
import { PostProps } from "@/types/post"
import RoundedImage from "../ui/RoundedImage"
import Link from "next/link"
import PostLike from "./PostLike"
import PostMedia from "./PostMedia"
import PostOptionDropdown from "./PostOptionDropdown"
import PostSave from "./PostSave"
import { authUser } from "@/constants/user"

const Post = (
{
  id,
  user,
  caption,
  media,
  isLiked,
  isSaved,
  likedTotal,
  commentTotal,
  created_at,
  hover=true,
  playInView=false
}
:PostProps & {hover?:boolean, playInView?: boolean}) => {
  return (
    <div
    className={`w-full bg-light dark:bg-d_semiDark px-2 ss:px-4 pt-3 pb-[6px] sm:pt-[12px] 
    sm:pb-[10px] rounded-none ss:rounded-xl ${hover && 'hover:bg-slate-50'}`}
    >
      <Header
      id={id} 
      user={user}
      created_at={created_at}
      caption={caption}
      media={media}
      />
      <div className="flex flex-col gap-2 pt-2 pb-[10px]">
          {caption && (
              <p>
                {caption}
              </p>
          )}
          <div className="-mx-1">
            {media?.length != 0 && (
              <PostMedia media={media!} playInView={playInView}/>
            )}
          </div>

      </div>
      <Footer id={id} isLiked={isLiked} isSaved={isSaved} likedTotal={likedTotal} commentTotal={commentTotal} />
    </div>
  )
}

const Header = ({id,user,caption,media,created_at}:Pick<PostProps,"user" | "created_at" | 'id' | 'caption' | 'media'>) => {
    return (
        <div className="flexBetween">
            <div className="flex items-center gap-2">
                {user.profile_picture && (
                    <Link href={`/user/${user.username}`} onClick={(e) => e.stopPropagation()}>
                        < RoundedImage
                        src={user.profile_picture}
                        className="!w-11"
                        alt="profile picture" />    
                    </Link>
                )}
                <div className="flex flex-col text-dark gap-[2px]">

                    <div className="leading-4 flex items-center gap-1">
                        <Link href={`/${user.username}`} onClick={(e) => e.stopPropagation()}>
                            <span className="font-medium text-dark dark:text-d_light hover:underline">
                                {user.name}
                            </span>
                        </Link>
                        {user.isVerified && (
                        < VscVerifiedFilled className='text-blue-500 text-lg' />
                        )}
                    </div>
                    <div className="leading-3">
                        <span className="text-[13px] text-semiDark dark:text-d_semiLight">{created_at}</span>
                    </div>

                </div>
            </div>
            <div onClick={(e) => e.stopPropagation()}>
              <PostOptionDropdown 
              postId={id as string}
              isAuthor={user.username === authUser.username} 
              caption={caption}
              media={media}
              />
            </div>
        </div>
    )
}

const Footer = ({id,likedTotal,commentTotal,isLiked,isSaved}:Pick<PostProps,'id' | 'likedTotal' | 'commentTotal'> & {isLiked:boolean,isSaved:boolean}) => {
    return (
        <div className="flexBetween text-gray-600 dark:text-light pb-2 pt-1 ss:pb-1">
            <div className="flex items-center gap-4">
                <div className="flexCenter gap-1 ss:gap-[6px]">
                    <PostLike postId={id} isLiked={isLiked} />
                    <span className="text-sm">{likedTotal != 0 ? likedTotal : ''}</span>
                </div>
                <div className="flexCenter gap-[6px]">
                    <GoComment strokeWidth={.2} className="text-[22px] ss:text-[24px]" />
                    <span>{commentTotal != 0 ? commentTotal : ''}</span>
                </div>
                <PiShareFatLight strokeWidth={5} className="text-[23px] ss:text-[25px]" />
            </div>
            <div className="flexCenter">
                <PostSave postId={id} isSaved={isSaved} />
            </div>
        </div>
    )
}

export default Post
