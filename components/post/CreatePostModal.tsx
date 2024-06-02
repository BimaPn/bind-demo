'use client'
import {useState} from 'react'
import RoundedImage from '../ui/RoundedImage'
import Modal from '../ui/Modal'
import FormCreatePost from './FormCreatePost'
import { useAuth } from '../providers/AuthProvider'

const CreatePostModal = ({children,groupId,className}:{children:React.ReactNode,groupId?: string | number,className?:string}) => {
  const { user } = useAuth()
  const [isOpenModal,setIsOpenModal] = useState<boolean>(false)
  return (
    <>
        <button 
        onClick={() => setIsOpenModal(prev => !prev)} 
        className={`${className}`}>
            {children}
        </button>
            <Modal 
            title="Create group"
            show={isOpenModal} 
            onClose={() => setIsOpenModal(false)}
            className="h-screen sm:!h-fit">
              <Modal.Body className="ss:rounded-b-xl rounded-none">
              <div className="flex gap-3 px-4 py-3">
                < RoundedImage
                src={user.profile_picture}
                alt="profile picture"
                className='!w-12' />
                <div className='w-full flex flex-col'>
                  <FormCreatePost onClose={() => setIsOpenModal(false)} groupId={groupId ? groupId as string : undefined} mobile />
                </div>
              </div>
              </Modal.Body>
            </Modal>
    </>
  )
}

export default CreatePostModal
