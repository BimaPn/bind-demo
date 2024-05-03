"use client"
import { messages as initial } from "@/constants/messages"
import { createContext, useContext, useState } from "react"

type MessagesContext = {
  messages: Message[]
  getUsersMessages: (username1: string, username2: string) => Message[]
  addMessage: (message: Message) => void
}

const messagesContext = createContext<MessagesContext | null>(null)

const MessagesProvider = ({children}:{children: React.ReactNode}) => {
  const [messages, setMessages] = useState<Message[]>(initial)
  
  const filterMessage = (sender: string, receiver: string) => {

  }
  const getUsersMessages = (username1: string, username2: string) => {
    return messages.filter((message) => {
      return ((message.sender === username1) && (message.receiver === username2)) || 
             ((message.sender === username2) && (message.receiver === username1))
    })
  }
  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message])
  }
  return (
    <messagesContext.Provider value={{ messages, getUsersMessages, addMessage }}>
    {children}
    </messagesContext.Provider>
  )
}

export const useMessages = () => {
  return useContext(messagesContext) as MessagesContext
}

export default MessagesProvider
