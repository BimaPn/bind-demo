import PostSkeleton from "../skeletons/PostSkeleton"

const PostsSaved = () => {
  return (
    <>
    <div className="flexCenter flex-col gap-1 sm:gap-3 mt-1 ss:m-0">
      <PostSkeleton count={3} />
    </div>
    </>
  )
}

export default PostsSaved
