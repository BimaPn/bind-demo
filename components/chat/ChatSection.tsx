"use client"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { IoSend } from "react-icons/io5"
import { BsEmojiSmile } from "react-icons/bs"
import { useEffect, useRef, useState } from "react"
import RoundedImage from "../ui/RoundedImage"
import Link from "next/link"
import TextArea from "../ui/TextArea"
import PickEmoji from "../PickEmoji"
import BackButton from "../BackButton"
import MessageItem from "./MessageItem"
import { useMessages } from "../providers/MessagesProvider"

const ChatSection = ({username, userTarget}:{username: string,userTarget: UserChat}) => {
  const { getUsersMessages } = useMessages()
  const [messages, setMessages] = useState<Message[]>(getUsersMessages(username, userTarget.username))
  const messagesContainer = useRef<HTMLDivElement>(null) 

  const scrollToBottom = () => {
    if (messagesContainer.current) {
      const element = messagesContainer.current;
      element.scrollTop = element.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom()
  },[messages])


  const addMessage = (message: Message) => {
    // addToList({
    //   user: userTarget,
    //   message: message.message,
    //   created_at:message.created_at,
    //   isRead: true
    // })
    // setMessages((prev) => [...prev, message])
  }
  return (
   <section className={`w-full flex flex-col bg-white dark:bg-d_semiDark rounded-xl sm:shadow
    sm:static fixed inset-0 z-[1000] sm:z-0`}>
      
      <Header userTarget={userTarget} />
      <div ref={messagesContainer} className="basis-full overflow-auto bg-semiLight dark:bg-d_dark rounded-xl sm:mx-3">
        <div className="flex flex-col gap-4 px-3 pb-2 pt-4">
          {messages.map((message, index) => (
          <li key={index} className="flex flex-col gap-4">
            <MessageItem message={message} />
          </li>
          ))}
        </div>  
      </div>
      
      <Footer
      onSendMessage={(message) => addMessage(message)}
      targetUsername={userTarget.username} 
      />

    </section>

  )
}

const Header = ({userTarget}:{userTarget: UserChat}) => {
  return (
    <div className="flexBetween px-3">
      <div className="basis-[90%] flex items-center gap-2 py-2">
        <BackButton className="block sm:hidden" />
        <Link href={`/user/${userTarget.username}`}>
          <RoundedImage
          src={userTarget.profile_picture} 
          alt={userTarget.name}
          className="!min-w-[40px] !w-[40px]"
          />
        </Link>
        <Link href={`/${userTarget.username}`}>
          <span className="w-full line-clamp-1">{userTarget.name}</span>
        </Link>
      </div>
      <div className="w-9 aspect-square flexCenter rounded-full bg-semiLight dark:bg-d_netral">
        <HiOutlineDotsHorizontal className="text-xl" />
      </div>
    </div>
  )
}

const Footer = ({onSendMessage,targetUsername}:{onSendMessage: (message: Message) => void, targetUsername:string}) => {
  const [message, setMessage] = useState<string>("")
  const [disabled, setDisabled] = useState<boolean>(false) 

  useEffect(() => {
  setDisabled(message.length <= 0)
  },[message])
  const onSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
      setMessage("")
      setDisabled(false)
      // onSendMessage(res.data.message)
  }
  return (
    <form onSubmit={onSend} className="flexBetween gap-1 py-2 px-1 sm:px-3">
      <div className='w-full border dark:border-d_netral flexCenter gap-2 rounded-2xl pr-3 pl-4'>
       <TextArea
        value={message}
        rows={1}
        onChange={(e) => setMessage(e.target.value)}
        className='w-full bg-transparent border-0 py-2'
        placeholder='Type something ...'
        />
        <div>
        <PickEmoji onEmojiClick={(emoji) => setMessage(prev => prev + emoji)}>
          <BsEmojiSmile className="text-[22px] text-blue-400 hover:text-blue-300 cursor-pointer" />
        </PickEmoji>
        </div>
      </div>
      <button disabled={disabled} type="submit" className="text-blue-500 hover:text-blue-400 disabled:text-blue-400 disabled:cursor-not-allowed px-2">
        <IoSend className="text-2xl cursor-pointer" />
      </button>
    </form>
  )
}

const TimeBadge = ({time}:{time:string}) => {
  return (
    <div className="flexCenter mb-1">
      <div className="bg-white dark:bg-d_netral px-3 py-1 rounded-full text-xs">
        {time} 
      </div>
    </div>  
  )
}

export default ChatSection
