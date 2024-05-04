'use client'
import {useState} from 'react'
import Modal from '../ui/Modal'
import { GroupProps } from '@/types/group'
import FormUpdateGroup from './FormUpdateGroup'

const EditGroup = ({id,group_picture,name,description, children}:Pick<GroupProps,'id'|'group_picture'|'name'|'description'> & {children: React.ReactNode}) => {
    const [isOpenModal,setIsOpenModal] = useState<boolean>(false)

    const toggleModal = (e:React.MouseEvent) => {
      e.stopPropagation()
      setIsOpenModal(prev => !prev)
    }
  return (
    <div>
      <button 
      onClick={toggleModal} 
      className='w-full'
      >
      {children}
      </button>
      <Modal 
      title="Edit Group" 
      show={isOpenModal} 
      onClose={() => setIsOpenModal(false)} >
        <FormUpdateGroup 
        groupId={id} 
        defaultPicture={group_picture} 
        defaultName={name} 
        defaultDesc={description}
        onClose={() => setIsOpenModal(false)}
        />
      </Modal>
    </div>
  )
}

export default EditGroup
