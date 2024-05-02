"use client"
import { PiHeartFill } from 'react-icons/pi'
import { useComments } from '../providers/CommentsProvider'

const CommentLike = ({commentId, isLiked}:{commentId: string,isLiked:boolean}) => {
  const { like, unlike } = useComments()
  const buttonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if(isLiked) {
      unlike(commentId)
    }else {
      like(commentId)
    }
  }
  return (
    <button onClick={buttonClick} className="flexCenter gap-[6px]">
        <PiHeartFill className={`text-xl stroke-[20px]
        ${isLiked ? 'stroke-red-600 fill-red-600' : 'stroke-semiDark dark:stroke-d_semiLight fill-none '}`} 
        />
        <span className="text-[13px]">{1 + "K" || ''}</span>
    </button>
  )
}

export default CommentLike
