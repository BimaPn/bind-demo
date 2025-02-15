'use client'
import { useEffect, useState } from 'react'
import Modal from '../ui/Modal'
import RoundedImage from '../ui/RoundedImage'
import { authUser } from '@/constants/user'
import FormUpdatePost from './FormUpdatePost'

const PostEdit = ({
  children, 
  id,
  caption,
  media,
  className
}:{
  children:React.ReactNode,
  id: string,
  caption?: string,
  media?: string[],
  className?:string
  }) => {
  const [isOpen,setIsOpen] = useState<boolean>(false)

  const buttonClick = (e:React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(prev => !prev)
  }
  return (
    <>
    <button onClick={buttonClick} className={className}>
        {children}
    </button>

    <Modal 
    onClose={() => setIsOpen(false)} 
    show={isOpen}
    title='Edit post'
    className='h-svh sm:h-fit z-[900]'
    >
        <Modal.Body>
          <div className="flex gap-3 px-3 ss:px-4 py-2 ss:py-3">
            <RoundedImage
            src={authUser.profile_picture}
            alt="profile picture"
            className='!w-12 !hidden ss:!block' />
            <div className='w-full flex flex-col'>
              <FormUpdatePost
              postId={id}
              caption={caption} 
              media={media}
              onClose={() => setIsOpen(false)}
              />
            </div>
          </div>
        </Modal.Body>
    </Modal>
    </>
  )
}

export default PostEdit 
