'use client'
import { PiHeartFill } from 'react-icons/pi'

const PostLike = ({postId,isLiked} : {postId : string | number,isLiked : boolean}) => {
  const postLike = (e:React.MouseEvent) => {
    e.stopPropagation()
    console.log("liked the post")
  }
  return (
    <button onClick={postLike}>
        < PiHeartFill className={`text-[23px] ss:text-[25px] stroke-[20px]
        ${isLiked ? 'stroke-red-600 fill-red-600' : 'stroke-dark dark:stroke-light fill-none '}`} />
    </button>
  )
}

export default PostLike
