import MainContent from "@/components/MainContent"
import CreatePost from "@/components/post/CreatePost"
import MainLayout from "@/layouts/MainLayout"

const page = () => {
  return (
    <MainLayout navbarMobile={false}>
      <div className='mt-1 ss:mt-0'>
        <CreatePost />
      </div>
      <MainContent />
    </MainLayout>
  )
}

export default page
