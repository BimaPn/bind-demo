'use client'
import { PiHeartFill } from 'react-icons/pi'
import { usePosts } from '../providers/PostsProvider'

const PostLike = ({postId,isLiked} : {postId : string | number,isLiked : boolean}) => {
  const { like, unlike } = usePosts()
  const postLike = (e:React.MouseEvent) => {
    e.stopPropagation()
    if(isLiked) {
      unlike(postId)
    }else {
      like(postId)
    }
  }
  return (
    <button onClick={postLike}>
        < PiHeartFill className={`text-[23px] ss:text-[25px] stroke-[20px]
        ${isLiked ? 'stroke-red-600 fill-red-600' : 'stroke-dark dark:stroke-light fill-none '}`} />
    </button>
  )
}

export default PostLike
