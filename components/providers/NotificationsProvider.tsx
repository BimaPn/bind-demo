"use client"
import { notifications as initial } from "@/constants/notifications"
import { createContext, useContext, useState } from "react"

type NotificationContext = {
  notifications: NotificationItem[]
}
const notificationsContext = createContext<NotificationContext | null>(null)

const NotificationsProvider = ({children}:{children: React.ReactNode}) => {
  const [ notifications, setNotifications ] = useState<NotificationItem[]>(initial)
  return (
    <notificationsContext.Provider value={{ notifications }}>
    {children}
    </notificationsContext.Provider>
  )
}

export const useNotifications = () => {
  return useContext(notificationsContext) as NotificationContext
}

export default NotificationsProvider
