'use client'
import Link from "next/link"
import { BsThreeDots } from "react-icons/bs"
import { VscVerifiedFilled } from "react-icons/vsc"
import Image from "next/image"
import EditProfile from "./EditProfile"
import { useContext, useEffect } from "react"
import { UserProfileContextProps, UserProfileProps} from "@/types/user"
import FollowUserBtn from "./FollowUserBtn"
import { useUsers } from "../providers/UsersProvider"
import { authUser } from "@/constants/user"
import FollowUser from "./FollowUser"
import { formatNumber } from "@/constants/number"
import { useAuth } from "../providers/AuthProvider"

const UserHeader = ({user}:{user:UserProfileProps}) => {
  return (
    <> 
    {user.username === authUser.username && (
      <AuthUser />
     )}
    {user.username !== authUser.username && (
      <Content user={user} />
     )}
    </>
  )
}

const AuthUser = () => {
  const { user } = useAuth()
  return (
  <Content user={user} />
  )
}
const Content = ({user}:{user:UserProfileProps}) => {
  return ( 
 <div className="bg-light dark:bg-d_semiDark ss:rounded-t-xl h-fit ss:overflow-hidden border border-transparent">        
        <div className="relative h-fit">
            <div className="relative w-full aspect-[3/1] overflow-hidden">
                <Image src={user.cover_photo}
                fill
                objectFit="cover"
                alt="cover" />
            </div>
            <div className="w-32 md:w-36 aspect-square rounded-full overflow-hidden absolute -bottom-14 ss:-bottom-[72px] left-3 border-4 border-light dark:border-d_semiDark">
                <Image src={user.profile_picture}
                fill
                style={{objectFit:"cover"}}
                alt="profile picture"/>
            </div>
        </div>

        <div className="mt-12 ss:mt-0 px-4 text-dark dark:text-d_light">
            <div className="pl-0 ss:pl-[150px] ss:mb-6 flex flex-col pt-2">
                <div className="flex items-center gap-1">
                    <span className="font-bold text-[22px] ss:text-xl">{user.name}</span>
                    {user.isVerified && (
                    < VscVerifiedFilled className='text-blue-500 text-lg-xl -mb-[4px]' />
                    )}
                </div>
                <span className="text-gray-600 dark:text-d_semiLight text-sm">@{user.username}</span>
            </div>

            <p className="break-all my-2 text-[15px]">{user.bio}</p>

            <div className="mb-3 flex ss:items-center flex-col ss:flex-row ss:justify-between gap-2">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <span className="font-bold">{formatNumber(user.followingTotal)}</span>
                        <span className="text-sm text-gray-600 dark:text-d_semiLight">Followings</span>
                    </div>
                    ·
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">{formatNumber(user.followerTotal)}</span>
                        <span className="text-sm text-gray-600 dark:text-d_semiLight">Followers</span>
                    </div>
                    ·
                    <div className="flex items-center gap-1">
                        <span className="font-bold">{user.postTotal}</span>
                        <span className="text-sm text-gray-600 dark:text-d_semiLight">Posts</span>
                    </div>
                </div>
                <div className="flex flex-row ss:flex-row-reverse items-center gap-[6px]">
                    {user.username == authUser.username ? (
                        <EditProfile
                        username={user.username}
                        profile_picture={user.profile_picture}
                        cover_photo={user.cover_photo}
                        name={user.name}
                        bio={user.bio}
                        className="!w-full ss:!w-fit" />
                    ) : 
                    (
                        <>
                        <FollowUser username={user.username} /> 
                        <Link 
                        href={`/chat/${user.username}`}
                        className="text-sm flexCenter font-medium border border-gray-300 dark:border-d_semiLight px-6 py-[7px] rounded-full">
                          <span className="block -mt-[1px]">Chat</span>
                        </Link>     
                        </>
                    )}
                </div>
            </div>
        </div>
    </div>

  )
}

export default UserHeader
