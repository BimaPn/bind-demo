import { PostCommentProps } from '@/types/post'
import PostComment from './PostComment'

const PostComments = ({comments}:{comments?:PostCommentProps[]}) => {
  return comments?.length != 0 ? (
      <>      
      {comments?.map((item) => (
        <PostComment
        key={item.id}
        comment={item}
        />
      ))}
      </>
    ) : 
    (
      <div>
        no comment yet
      </div>
    )
}

export default PostComments
