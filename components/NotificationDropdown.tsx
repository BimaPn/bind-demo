"use client"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { useContext, useEffect } from "react"
import { DropdownProps } from "@/types/types.dropdown"
import ApiClient from "@/app/api/axios/ApiClient"
import { formatDate } from "@/helpers/time"
import Dropdown from "./ui/Dropdown"
import NotificationIcon from "./icons/NotificationIcon"
import RoundedImage from "./ui/RoundedImage"
import { useNotifications } from "./providers/NotificationsProvider"
import { useRouter } from "next-nprogress-bar"

const NotificationDropdown = () => {
  const { unreadCount } = useNotifications()
  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
            <div className='w-9 aspect-square flexCenter bg-semiLight dark:bg-d_netral rounded-full'>
              <div className="relative">
                {unreadCount > 0 && (
                  <div className={`${unreadCount <= 10 ? "w-[14px] font-semibold text-[9px]":"w-4 text-[9px]"} absolute -top-[10px] -right-[10px] 
                  text-center aspect-square rounded-full bg-red-500 font-bold text-white`}
                  >
                  <span className="block -mt-[1px]">
                    {(unreadCount <= 10) && unreadCount}
                    {(unreadCount > 10) && `${unreadCount}+`}
                  </span>
                  </div>
                )}
                <NotificationIcon active width={18} className='cursor-pointer'/>
              </div>
            </div>
        </Dropdown.Trigger>
        <Dropdown.Content className="!fixed md:!absolute right-3 md:right-0 !top-12 md:!top-10 w-[384px] aspect-[3/4.5]">
          <Content />
        </Dropdown.Content>
      </Dropdown>

    </>
  )
}

const Content = () => {
  const { notifications, clearUnread } = useNotifications()
  const router = useRouter()

  const navigate = (notification: NotificationItem) => {
    if(!notification.isRead) {
      clearUnread(notification.id) 
    }
    router.push(notification.link)
  }
  return (
    <div className="w-full h-full flex flex-col bg-white dark:bg-d_semiDark rounded-xl shadow py-2 pt-3">
      <div className="mb-1 px-4">
        <span className="text-lg font-semibold">Notification</span>
      </div>
      <div className="flex flex-col gap-1 grow overflow-auto px-2">
        {notifications.map((notification, index) => (
          <button key={index} className="block w-full text-start" onClick={() => navigate(notification)}>
            <NotificationItem 
            notification={notification}
            />
          </button>
        ))}
      </div>
    </div>  
  )
}

export const NotificationItem = ({notification}:{notification: NotificationItem}) => {
  return (
    <div className={`flexBetween py-2 group rounded-xl px-2 ${!notification.isRead && 'bg-semiLight dark:bg-d_netral'}`}>
      <div className='basis-[85%] flex gap-2'>
        <RoundedImage src={notification.notifier.profile_picture} className="min-w-[40px] !w-[40px]" alt='profile_picture' />
        <div className='flex flex-col'>
          <div className="text-[15px]">
            <span className='font-semibold'>{notification.notifier.name}</span> {notification.message} 
          </div>
          <span className='text-gray-600 text-[13px]'>{notification.created_at}</span>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <div className={`w-8 aspect-square hidden group-hover:flex items-center justify-center rounded-full
        ${notification.isRead ? "bg-semiLight dark:bg-d_netral":"bg-white dark:bg-d_semiDark"}`}
        >
          <HiOutlineDotsHorizontal className='text-xl' />
        </div>
        {!notification.isRead && (
          <div className='w-2 aspect-square rounded-full bg-blue-500' />
        )}
      </div>
    </div>
  )
}

export default NotificationDropdown
