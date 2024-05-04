"use client"
import { notifications as initial } from "@/constants/notifications"
import { createContext, useContext, useState } from "react"

type NotificationContext = {
  notifications: NotificationItem[]
  clearUnread: (notificationId: string) => void
  unreadCount: number
}

const notificationsContext = createContext<NotificationContext | null>(null)

const NotificationsProvider = ({children}:{children: React.ReactNode}) => {
  const [ notifications, setNotifications ] = useState<NotificationItem[]>(initial)
  const [unreadCount, setUnreadCount] = useState(1)

  const clearUnread = (notificationId: string) => {
    setNotifications((prev) => {
      return prev.map((notif) => {
        if(notif.id === notificationId) {
          notif.isRead = true
        }
        return notif
      })
    })
    decreaseUnreadCount()
  }
  const decreaseUnreadCount = () => {
    if(unreadCount <= 0) return
    setUnreadCount((prev) => prev -1)
  }

  return (
    <notificationsContext.Provider value={{ notifications, clearUnread, unreadCount }}>
    {children}
    </notificationsContext.Provider>
  )
}

export const useNotifications = () => {
  return useContext(notificationsContext) as NotificationContext
}

export default NotificationsProvider
