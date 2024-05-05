import RoundedImage from '@/components/ui/RoundedImage'
import { authUser } from '@/constants/user'
import React from 'react'
import FormCreatePost from '../post/FormCreatePost'

const CreatePostGroup = ({groupId}:{groupId:string}) => {
  return (
    <section className="w-full bg-light dark:bg-d_semiDark rounded-xl sm:shadow">    
      <div className="flex gap-3 px-4 py-3">
        <RoundedImage
        src={authUser.profile_picture}
        alt="profile picture"
        className='!w-12' />
        <div className='w-full flex flex-col'>
          <FormCreatePost groupId={groupId} />
        </div>
      </div>
    </section>
  )
}

export default CreatePostGroup
