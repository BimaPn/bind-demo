'use client'
import { MdOutlinePhotoLibrary } from 'react-icons/md'
import { useState,useContext, useEffect } from 'react'
import { CreatePostFormProps, PostsContextProps } from '@/types/post'
import { postContext } from '../providers/PostContext'
import ApiClient from '@/app/api/axios/ApiClient'
import { GrSchedule } from 'react-icons/gr'
import EmojiIcon from '../icons/emojiIcon'
import TextArea from '../ui/TextArea'
import ImagesInput from '../ImagesInput'

const FormCreatePost = ({groupId = null,mobile = false,onClose}:{groupId ?: string | number | null,mobile?:boolean,onClose?:()=>void}) => {
    const [isDisableBtn,setIsDisableBtn] = useState<boolean>(true)
    const [formData,setFormData] = useState<CreatePostFormProps>({
        caption : '',
        group_id : groupId,
        media : [],
    })

    useEffect(() => {
        if(formData.caption == '' && formData.media!.length == 0){
            setIsDisableBtn(true)
        }else{
            setIsDisableBtn(false)
        }
    },[formData])
    const formSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        setIsDisableBtn(true)
        ApiClient.post(`/api/post/create`,formData,{  headers: {
            "Content-Type": "multipart/form-data",
        },})
        .then((res) => {
            setIsDisableBtn(false)
            setFormData({caption:'',media:[]})
            onClose && onClose()
        })
    }
  return (
    <form className='flex flex-col' onSubmit={formSubmit}>
    <div className={`${mobile ? 'max-h-full' : 'max-h-96'} overflow-y-auto py-2`}>
        <TextArea
        value={formData.caption}
        rows={1}
        onChange={(e) => setFormData({...formData,caption:e.target.value})}
        placeholder="What's going on ?"
        className='text-lg !border-0 !bg-transparent placeholder:text-semiDark placeholder:dark:text-d_semiLight dark:text-d_light' />
    </div>
    <ImagesInput 
    value={formData.media as File[]}
    onChange={(files:any) => setFormData({...formData,media:files})}
    >
        <div className='pb-1'>
        < ImagesInput.Preview/>
        </div>
        <div className='flexBetween pt-[3px]'>
            <div className='flex items-center gap-2'>
                <ImagesInput.Trigger>
                    <div className='flexCenter w-8 aspect-square rounded-full bg-semiLight dark:bg-d_netral'>
                        < MdOutlinePhotoLibrary className='text-dark dark:text-light' style={{ fontSize : 20 }} />
                    </div>
                </ImagesInput.Trigger>
                <div className='flexCenter w-8 aspect-square rounded-full bg-semiLight dark:bg-d_netral'>
                    <EmojiIcon />
                </div>
            </div>
            <button
            disabled={isDisableBtn}
            className='px-8 py-[6px] rounded-full bg-light text-dark font-medium hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed'
            type='submit'
            >
            Post
            </button>
        </div>
    </ImagesInput>
    </form>
  )
}

export default FormCreatePost
