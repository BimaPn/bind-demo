import PostSkeleton from "./skeletons/PostSkeleton"

const MainContent = () => {
  return (
    <>
    <div className="flexCenter flex-col gap-1 sm:gap-3 mt-4">
       <PostSkeleton count={4} />
    </div>
    </>
  )
}

export default MainContent

// https://github.com/nextauthjs/next-auth/discussions/3550
