"use client"
import { messages as initial } from "@/constants/messages"
import { createContext, useContext, useState } from "react"

type MessagesContext = {
  messages: Message[]
  getUsersMessages: (username1: string, username2: string) => Message[]
}

const messagesContext = createContext<MessagesContext | null>(null)

const MessagesProvider = ({children}:{children: React.ReactNode}) => {
  const [messages, setMessages] = useState<Message[]>(initial)

  const getUsersMessages = (username1: string, username2: string) => {
    return messages.filter((message) => (message.username === username1) || (message.username === username2))
  }
  return (
    <messagesContext.Provider value={{ messages, getUsersMessages }}>
    {children}
    </messagesContext.Provider>
  )
}

export const useMessages = () => {
  return useContext(messagesContext) as MessagesContext
}

export default MessagesProvider
