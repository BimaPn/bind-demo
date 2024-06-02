'use client'
import Modal from '@/components/ui/Modal'
import {useState} from 'react'
import FormCreateGroup from './FormCreateGroup'

const CreateGroup = ({children,className}:{children:React.ReactNode,className?:string}) => {
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
      className="h-svh sm:!h-fit"
      >
      <Modal.Body className="ss:rounded-b-xl rounded-none">
        <FormCreateGroup />
      </Modal.Body>
      </Modal>
    </>
  )
}

export default CreateGroup
