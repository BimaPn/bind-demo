"use client"
import users from "@/constants/suggestionUsers"
import { UserItemProps } from "@/types/types"
import Link from "next/link"
import { VscVerifiedFilled } from "react-icons/vsc"
import RoundedImage from "./ui/RoundedImage"
import FollowUserBtn from "./user/FollowUserBtn"
import { useUsers } from "./providers/UsersProvider"

const suggestions = ["bimapn","fabian","cristiano","eminem","mike_tyson"]

const SuggestionUsers = () => {
  const { users } = useUsers()
  return (
    <div className="bg-light dark:bg-d_semiDark text-dark dark:text-light rounded-xl sm:shadow px-3 pt-2">
      <div className="flexBetween">
        <h4 className="font-medium">Suggestion for you</h4>
      </div>
        <ul className="flex flex-col gap-[18px] mt-4 mb-4">
          {users.filter(user => suggestions.includes(user.username)).map((user, index) => (
            <UserItem 
            key={index}
            name={user.name}
            username={user.username}
            image={user.profile_picture}
            verified={user.isVerified}
            isFollow={user.isFollow}
            />
            ))}
        </ul>
    </div>
  )
}

const UserItem = ({name,username,image,verified, isFollow}:UserItemProps) => {
  return (
    <li className="flexBetween text-dark dark:text-light">
      <div className="flex items-center gap-2">
        <Link href={`/user/${username}`}>
          <RoundedImage
          src={image}
          alt="profile picture"
          className="!w-10"
          />
        </Link>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <Link href={`/user/${username}`} className="hover:underline">
              <span className="truncate">{name}</span>
            </Link>
            {verified && (
               < VscVerifiedFilled className='text-blue-500' />
            )}
          </div>
          <div className="leading-4">
            <span className="text-xs text-semiDark dark:text-d_semiLight">@{username}</span>
          </div>
        </div>
      </div>
      <FollowUserBtn
      isFollow={isFollow} 
      username={username}
      className="!py-[6px] !px-4"
      />
    </li>
  )
}



export default SuggestionUsers
