"use client"
import { usePathname } from "next/navigation"
import RoundedImage from "../ui/RoundedImage"
import { ChatSvg } from "../icons/ChatIcon"
import Link from "next/link"
import { formatDate } from "@/helpers/time"
import { useChatList } from "../providers/ChatListProvider"
import ChatListSkeleton from "../skeletons/ChatListSkeleton"

const ChatMenu = () => {
  const path = usePathname()
  const { users } = useChatList()
  return (
    <div className={`w-full md:w-[512px] flex flex-col bg-white dark:bg-d_semiDark rounded-xl sm:shadow ${path !== "/chat" && "hidden md:block"} py-4`}>
      <div className="mb-3 text-dark -mt-1 px-2">
        <div className="flex items-center pb-3 gap-[6px] border-b dark:border-d_netral">
          <div className="-mb-[2px]">
            <ChatSvg active width={21} />
          </div>
          <span className="font-semibold text-xl dark:text-white">Chat</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:h-full sm:max-h-full sm:overflow-auto px-2 -mt-1">
        {users && users.map((chat, index) => <ChatItem key={index} chat={chat} />)}
        {!users && <ChatListSkeleton count={4} />}
      </div>
    </div>
  )
}

const ChatItem = ({chat}:{chat:ChatItem}) => {
  return (
    <Link href={`/chat/${chat.user.username}`} className="w-full flexBetween gap-2 p-2 cursor-pointer hover:bg-semiLight dark:hover:bg-d_netral rounded-lg">
      <RoundedImage src={chat.user.profile_picture} alt="person" className="min-w-[42px]" />
      <div className="w-[95%] flex flex-col items-center overflow-hidden">
        <div className="w-full flexBetween">
          <span>{chat.user.name}</span>
          <span className="text-[11px] text-gray-600 dark:text-d_semiLight">{formatDate(chat.created_at)}</span>
        </div>
        <div className="w-full flexBetween">
          <span className={`w-[90%] text-[15px] text-gray-600 dark:text-d_semiLight line-clamp-1 ${!chat.isRead && "font-semibold"}`}>
          {chat.message}
          </span>
          {!chat.isRead && (
            <div className="w-2 aspect-square bg-blue-500 rounded-full" />
          )}
        </div>
      </div>
    </Link>
  )
}

export default ChatMenu
