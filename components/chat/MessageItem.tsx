import { authUser } from "@/constants/user"
import { dateToTime } from "@/helpers/time"

const MessageItem = ({message}:{message:Message}) => {
  const checkIsAuth = () => {
    return message.sender === authUser.username
  }
  return (
    <div className={`w-full flex items-center ${checkIsAuth() ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[90%] flex flex-col ${checkIsAuth() ? "items-start" : "items-end"}`}>
        <div className={`w-full p-2 rounded-xl break-all
        ${checkIsAuth() ? "bg-blue-500 rounded-tr-none text-white" : "bg-white dark:bg-d_netral dark:text-white text-dark rounded-tl-none"}`}
        >
        {message.message}
        </div>
        <div>
          <span className="text-xs text-gray-600 dark:text-d_semiLight">{dateToTime(new Date(message.created_at))}</span>
        </div>
      </div>

    </div>
  )
}

export default MessageItem
