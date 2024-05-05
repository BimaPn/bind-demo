'use client'
import { useEffect,useContext,useState } from 'react'
import TextArea from '@/components/ui/TextArea'
import React from 'react'
import { BsEmojiNeutral } from 'react-icons/bs'
import { FaUserPlus } from 'react-icons/fa'
import { HiGif } from 'react-icons/hi2'
import { MdOutlinePhotoLibrary } from 'react-icons/md'
import {  PostUpdateProps } from '@/types/post'
import ImagesInput from '../ImagesInput'
import PickEmoji from '../PickEmoji'
import EmojiIcon from '../icons/emojiIcon'
import { usePosts } from '../providers/PostsProvider'
import { useDropdown } from '../ui/Dropdown'

const FormUpdatePost = ({postId, caption, media, onClose}:
{postId:string, caption?:string, media?: string[],onClose : () => void}) => {
    const { toggleOpen } = useDropdown() 
    const { updatePost } = usePosts()
    const [isDisableBtn,setIsDisableBtn] = useState<boolean>(true)
    const [formData,setFormData] = useState<PostUpdateProps>({
      caption,
      media: media ?? []
    })

    useEffect(() => {
        if(formData.caption?.length! < 1 && formData.media?.length == 0) {
          setIsDisableBtn(true)
        }else{
          setIsDisableBtn(false)
        }
    },[formData])

    const formSubmit = (e:React.FormEvent) => {
      e.preventDefault()
      updatePost(postId, formData)
      toggleOpen()
      onClose()
    }
  return (
    <form className='flex flex-col' onSubmit={formSubmit}>
    <div className='max-h-96 overflow-y-auto py-2'>
        <TextArea
        value={formData.caption}
        rows={1}
        onChange={(e) => setFormData({...formData,caption:e.target.value})}
        placeholder="What's going on ?"
        className='!border-0' />
    </div>
   <ImagesInput 
    value={formData.media as string []}
    onChange={(files:any) => setFormData({...formData,media:files})}
    >
        <div className='pb-10 ss:pb-12'>
        <ImagesInput.Preview/>
        </div>
        <div className='flexBetween pt-[3px]'>
            <div className='flex items-center gap-2'>
                <ImagesInput.Trigger>
                    <div className='flexCenter w-8 aspect-square rounded-full bg-semiLight dark:bg-d_netral'>
                      <MdOutlinePhotoLibrary className='text-dark dark:text-light' style={{ fontSize : 20 }} />
                    </div>
                </ImagesInput.Trigger>

                <PickEmoji
                onEmojiClick={(emoji) => setFormData({...formData, caption: formData.caption + emoji})}
                emojiContainerClassName="!fixed bottom-0 left-0"
                >
                  <div className='flexCenter w-8 aspect-square rounded-full bg-semiLight dark:bg-d_netral'>
                    <EmojiIcon />
                  </div>
                </PickEmoji>

            </div>
            <button
            disabled={isDisableBtn}
            className='px-8 py-[6px] rounded-full bg-semiLight text-sm text-dark font-medium hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed'
            type='submit'
            >
              <span className=' block'>Edit</span>
            </button>
        </div>
    </ImagesInput>

    </form>
  )
}

export default FormUpdatePost
