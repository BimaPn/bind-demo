'use client'
import { BiSolidBookmark } from 'react-icons/bi'
import { usePosts } from '../providers/PostsProvider'

const PostSave = ({postId,isSaved}:{postId:string | number,isSaved:boolean}) => {
  const { saved, unsaved } = usePosts()
    const postSave = (e:React.MouseEvent) => {
      e.stopPropagation()
      if(isSaved) {
        unsaved(postId)
      }else {
        saved(postId)
      }
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
