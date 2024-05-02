type Message = {
  username: string
  message: string
  created_at: string
}

type ChatItem = {
  message: string
  created_at: string
  user: UserChat
  isRead: boolean
}
type UserChat = {
  name:string
  profile_picture: string
  username: string
  isVerified: boolean
}

type ChatListProviderProps = {
  users: ChatItem[]
  setUsers: Dispatch<SetStateAction<ChatItem[]>>
  addToList: (chat: ChatItem) => void
  clearUnread: (username: string) => void
}

