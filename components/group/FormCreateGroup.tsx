'use client'
import {useEffect, useState} from 'react'
import ImageInput from '../ui/ImageInput'
import TextArea from '../ui/TextArea'
import InputError from '../ui/InputError'
import { GroupProps } from '@/types/group'
import { useGroups } from '../providers/GroupsProvider'
import { useRouter } from 'next-nprogress-bar'

const FormCreateGroup = () => {
  const { addGroup } = useGroups()
  const [isDisableBtn,setIsDisableBtn] = useState<boolean>(true)
  const router = useRouter()

  const [formData,setFormData] = useState({
    group_picture : null,
    name : '',
    description : '',
  })

  useEffect(()=>{
    if(formData.name && formData.description) {
        setIsDisableBtn(false)
    }else {
        setIsDisableBtn(true)
    }
  },[formData])

  const formSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    setIsDisableBtn(true)
    const picture = formData.group_picture ?? "/images/group/default.jpg"
    const newGroup: GroupProps = {
      id: `group-${Date.now()}_${Math.random()}`,
      name: formData.name,
      description: formData.description,
      group_picture: picture,
      memberTotal: 1,
      isJoin: true,
      isAdmin: true
    }

    addGroup(newGroup)
    router.push(`/group/${newGroup.id}`)
  }
  return (
    <form onSubmit={formSubmit} className='flex flex-col'>
    <ImageInput
    defaultImage='/images/group/default.jpg'
    onChange={(file) => setFormData((prev) => ({...prev,group_picture : file}))}
    imageRatio='2.35/1'
    />
    <div className='flex flex-col gap-4 mt-4 px-4'>
        <div>
            <input 
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({...prev,name : e.target.value}))}
            className="w-full border dark:border-gray-600 pl-2 py-2 rounded-xl focus:outline-none bg-transparent"
            type="text"
            placeholder="Name" 
            />
        </div>
        <div>
          <TextArea
          rows={3}
          value={formData.description}
          onChange={(e) => setFormData((prev) => ({...prev,description : e.target.value}))}
          placeholder="Description"
          className='min-h-[36px] pl-2 rounded-xl bg-transparent dark:!border-gray-600' 
          />
        </div>
        <div className="flex items-center justify-end px-4 h-16 bg-white dark:bg-d_semiDark">
            <button 
            disabled={isDisableBtn} 
            className="px-6 py-2 bg-dark dark:bg-white dark:text-black text-light font-medium text-sm rounded-full disabled:opacity-40 disabled:cursor-not-allowed">
                Create
            </button>
        </div>
    </div>
    </form>
  )
}

export default FormCreateGroup
