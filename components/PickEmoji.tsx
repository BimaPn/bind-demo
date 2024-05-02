"use client"
import { useTheme } from "next-themes"
import { useState } from "react"
import EmojiPicker from "emoji-picker-react"
import Dropdown from "./ui/Dropdown"

const PickEmoji = ({
  children,
  onEmojiClick,
  emojiContainerClassName
  }:{
    children: React.ReactNode,
    onEmojiClick: (emoji: string) => void,
    emojiContainerClassName?: string
    }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { resolvedTheme } = useTheme()
  return (
    <Dropdown>
      <Dropdown.Trigger>
        {children}
      </Dropdown.Trigger>
      <Dropdown.Content showFromBottom={false} className={`top-8 left-0 xs:right-0 ${emojiContainerClassName}`}>
        <EmojiPicker 
        onEmojiClick={(object) => onEmojiClick(object.emoji)} 
        theme={resolvedTheme as any}
        />
      </Dropdown.Content>
    </Dropdown>
  )
}

export default PickEmoji
