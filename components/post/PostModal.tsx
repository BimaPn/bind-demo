'use client'
import { PostProps } from '@/types/post'
import Modal from '../ui/Modal'
import Post from './Post'
import PostCommentBar from './PostCommentBar'
import CommentSkeleton from '../skeletons/CommentSkeleton'

const PostModal = ({post,show,onClose}:{post:PostProps,show : boolean,onClose : () => void}) => {
  return (
    <Modal 
    show={show}
    title='Post'
    onClose={onClose}
    className='!h-screen'
    >
      <Modal.Body className='h-full'>
        <Post 
        id={post.id}
        caption={post.caption} 
        user={post.user} 
        commentTotal={post.commentTotal} 
        likedTotal={post.likedTotal} 
        created_at={post.created_at} 
        media={post.media}
        hover={false}
        isLiked={post.isLiked}
        isSaved={post.isSaved}
        />
      <div>
      </div>

      <div className='min-h-[160px] flex flex-col gap-4 px-2 ss:px-4 pb-4 pt-2'>
        <CommentSkeleton count={3} />
      </div>

      </Modal.Body>
      <Modal.Footer>
        <PostCommentBar postId={post.id as number | string} />
      </Modal.Footer>
    </Modal>
  )
}


export default PostModal
