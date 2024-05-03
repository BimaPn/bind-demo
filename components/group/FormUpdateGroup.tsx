'use client'
import ApiClient from '@/app/api/axios/ApiClient'
import ImageInput from '@/components/ui/ImageInput'
import InputError from '@/components/ui/InputError'
import TextArea from '@/components/ui/TextArea'
import { GroupContextProps, GroupErrorsProps, UpdateGroupProps } from '@/types/group'
import {useState,useEffect, useContext} from 'react'

const FormUpdateGroup = ({groupId,defaultPicture,defaultName,defaultDesc,onClose}:UpdateGroupProps & {onClose : ()=>void}) => {
  const [isDisableBtn,setIsDisableBtn] = useState<boolean>(true)
  const [formData,setFormData] = useState({
    name : defaultName,
    description : defaultDesc,
    group_picture : null,
  })
  useEffect(() => {
    if(formData.name != defaultName || formData.description != defaultDesc ||
    formData.group_picture) {
        setIsDisableBtn(false)
    }else{
        setIsDisableBtn(true)
    }
},[formData])

  const formSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    console.log("update gorup") 
  }
  return (
    <form onSubmit={formSubmit} className='min-h-full flex flex-col sm:shadow pb-4 sm:rounded-b-xl'>
    < ImageInput 
    defaultImage={defaultPicture}
    onChange={(file) => setFormData((prev) => ({...prev,group_picture : file}))}
    imageRatio='2.35/1' />
        <div className='mt-4 mb-4 px-4'>
            <input 
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({...prev,name : e.target.value}))}
            className="w-full border pl-2 py-2 rounded-xl focus:outline-none dark:border-0"
            type="text"
            placeholder="Name"
            />
        </div>
        <div className='overflow-y-auto max-h-full mb-4 px-4'>
            < TextArea
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData((prev) => ({...prev,description : e.target.value}))}
            placeholder="Description"
            className='min-h-[36px] pl-2 rounded-xl dark:!border-0'
            />
        </div>
        <div className="flex items-center justify-end px-4">
            <button 
            disabled={isDisableBtn} 
            className="px-8 py-2 bg-semiLight dark:bg-light text-dark font-medium rounded-full disabled:opacity-40 disabled:cursor-not-allowed">
                Save
            </button>
        </div>
    </form>
  )
}

export default FormUpdateGroup
