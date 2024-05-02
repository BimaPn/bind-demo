'use client'
import { BiSolidBookmark } from 'react-icons/bi'

const PostSave = ({postId,isSaved}:{postId:string | number,isSaved:boolean}) => {
    const postSave = (e:React.MouseEvent) => {
      e.stopPropagation()
      console.log("saved the post") 
    }
  return (
    <button onClick={postSave}>
        < BiSolidBookmark className={`text-[21px] ss:text-[23px] 
        ${isSaved ? 'fill-semiDark stroke-semiDark' : 'stroke-dark dark:stroke-light fill-none'}`}
        strokeWidth={1.8} />
    </button>
  )
}

export default PostSave
