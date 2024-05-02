'use client'
import { PostCommentProps, PostProps } from '@/types/post'
import Modal from '../ui/Modal'
import Post from './Post'
import PostCommentBar from './PostCommentBar'
import CommentSkeleton from '../skeletons/CommentSkeleton'
import { useEffect, useState } from 'react'
import { comments } from '@/constants/postComments'
import PostComment from './PostComment'
import { useComments } from '../providers/CommentsProvider'

const PostModal = ({post,show,onClose}:{post:PostProps,show : boolean,onClose : () => void}) => {
  const { findComments } = useComments()
  const [postComments, setPostComments] = useState<PostCommentProps[]>(findComments(post.id))
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLoaded(true)
    },500)
    return () => clearTimeout(timerId)
  },[])
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
        {!loaded && <CommentSkeleton count={3} />}
        {loaded && postComments.map((comment, index) => (
          <PostComment key={index} comment={comment} />
        ))}
      </div>

      </Modal.Body>
      <Modal.Footer>
        <PostCommentBar postId={post.id as number | string} />
      </Modal.Footer>
    </Modal>
  )
}


export default PostModal
