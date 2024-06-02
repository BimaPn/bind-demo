'use client'
import { MdOutlinePhotoLibrary } from 'react-icons/md'
import { useState,useContext, useEffect, useRef } from 'react'
import { CreatePostFormProps, PostsContextProps } from '@/types/post'
import { GrSchedule } from 'react-icons/gr'
import EmojiIcon from '../icons/emojiIcon'
import ImagesInput from '../ImagesInput'
import PickEmoji from '../PickEmoji'
import { authUser } from '@/constants/user'
import { usePosts } from '../providers/PostsProvider'
import TextAreaExpand from '../ui/TextAreaExpand'

const FormCreatePost = ({groupId, mobile = false, onClose}:{groupId?: string,mobile?:boolean,onClose?:()=>void}) => {
    const [isDisableBtn,setIsDisableBtn] = useState<boolean>(true)
    const { addPost } = usePosts()
    const submitRef = useRef<HTMLButtonElement>(null)
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
        groupId,
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
        <TextAreaExpand
        value={formData.caption}
        rows={1}
        onChange={(e) => setFormData({...formData,caption:e.target.value})}
        handleSubmit={() => submitRef.current?.click()} 
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
                    <div className='flexCenter w-[30px] ss:w-8 aspect-square rounded-full bg-semiLight dark:bg-d_netral'>
                        < MdOutlinePhotoLibrary className='text-dark dark:text-light' style={{ fontSize : 20 }} />
                    </div>
                </ImagesInput.Trigger>

                <PickEmoji 
                onEmojiClick={(emoji) => setFormData({...formData, caption: formData.caption + emoji})}
                emojiContainerClassName="top-8 left-0"
                >
                  <div className='flexCenter w-[30px] ss:w-8 aspect-square rounded-full bg-semiLight dark:bg-d_netral'>
                      <EmojiIcon />
                  </div>
                </PickEmoji>

            </div>
            <button
            disabled={isDisableBtn}
            className='px-5 ss:px-8 py-1 ss:py-[6px] rounded-full bg-semiLight text-sm text-dark font-medium hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed'
            type='submit'
            ref={submitRef}
            >
            <span className=' block'>Post</span>
            </button>
        </div>
    </ImagesInput>
    </form>
  )
}

export default FormCreatePost
