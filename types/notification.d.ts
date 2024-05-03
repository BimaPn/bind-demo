type NotificationSender = {
  name: string
  profile_picture: string
}

type NotificationEntity = {
  name: string
  identifier: string
  message?: string
}

type NotificationItem = {
  notifier: {
    name: string
    username: string
    profile_picture: string
  } 
  message: string
  isRead: boolean
  link: string
  created_at: string
}


type NotificationProviderProps = {
  notifications: NotificationItem[] | null
  setNotifications: Dispatch<SetStateAction<NotificationItem[] | null>>
  unreadCount: number
}
