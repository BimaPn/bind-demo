import PageHeader from "@/components/PageHeader"
import PostsSaved from "@/components/post/PostsSaved"
import { BsThreeDots } from "react-icons/bs"

const page = () => {
  return (
    <>
      <PageHeader title='Saved' showWideScreen={false}>
        <BsThreeDots className='text-xl' />
      </PageHeader>
      <div>
        <PostsSaved />
      </div>
    </>
  )
}

export default page
