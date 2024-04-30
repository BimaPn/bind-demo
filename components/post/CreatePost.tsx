"use client"
import { useAuth } from "../providers/AuthProvider"
import RoundedImage from "../ui/RoundedImage"
import FormCreatePost from "./FormCreatePost"

const CreatePost = () => {
  const { user } = useAuth()
  return (
    <section className="bg-light dark:bg-d_semiDark rounded-lg sm:shadow">    
        <div className="flex gap-3 px-4 py-3">
            <RoundedImage
            src={user.profile_picture}
            alt="profile picture"
            className='!w-12' />
            <div className='w-full flex flex-col'>
                <FormCreatePost />
            </div>
        </div>
    </section>
  )
}


export default CreatePost
