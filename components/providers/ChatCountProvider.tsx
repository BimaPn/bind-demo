"use client"

import { createContext, useContext, useState } from "react"

type ChatCountContext = {
  count: number
  decreaseCount: () => void
}
const chatCountContext = createContext<ChatCountContext | null>(null)

const ChatCountProvider = ({children}:{children: React.ReactNode}) => {
  const [count, setCount] = useState<number>(1)

  const decreaseCount = () => {
    setCount((prev) => prev -= 1)
  }
  return (
    <chatCountContext.Provider value={{ count, decreaseCount }}>
    {children}
    </chatCountContext.Provider>
  )
}

export const useChatCount = () => {
  return useContext(chatCountContext) as ChatCountContext
}

export default ChatCountProvider
