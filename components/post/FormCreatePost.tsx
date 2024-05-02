'use client'
import { MdOutlinePhotoLibrary } from 'react-icons/md'
import { useState,useContext, useEffect } from 'react'
import { CreatePostFormProps, PostsContextProps } from '@/types/post'
import { postContext } from '../providers/PostContext'
import { GrSchedule } from 'react-icons/gr'
import EmojiIcon from '../icons/emojiIcon'
import TextArea from '../ui/TextArea'
import ImagesInput from '../ImagesInput'
import PickEmoji from '../PickEmoji'
import { authUser } from '@/constants/user'
import { usePosts } from '../providers/PostsProvider'

const FormCreatePost = ({groupId = null,mobile = false,onClose}:{groupId ?: string | number | null,mobile?:boolean,onClose?:()=>void}) => {
    const [isDisableBtn,setIsDisableBtn] = useState<boolean>(true)
    const { addPost } = usePosts()
    const [formData,setFormData] = useState<CreatePostFormProps>({
        caption : '',
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
      const newPost = {
        id: `post-${Date.now()}_${Math.random()}`,
        user: {
          name: authUser.name,
          username: authUser.username,
          profile_picture: authUser.profile_picture,
          isVerified: authUser.isVerified
        },
        ...formData,
        created_at: "Now",
        likedTotal: 0,
        commentTotal: 0,
        isLiked: false,
        isSaved: false,
      }
      addPost(newPost)
      setFormData({caption:"", media: []})
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
    value={formData.media as string []}
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

                <PickEmoji 
                onEmojiClick={(emoji) => setFormData({...formData, caption: formData.caption + emoji})}
                emojiContainerClassName="top-8 left-0"
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
            <span className=' block'>Post</span>
            </button>
        </div>
    </ImagesInput>
    </form>
  )
}

export default FormCreatePost
