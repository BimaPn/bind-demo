import {useState,useEffect,useContext} from 'react'
import ImageInput from '@/components/ui/ImageInput'
import InputError from '@/components/ui/InputError';
import TextArea from '@/components/ui/TextArea';
import { UpdateProfileProps, UserProfileContextProps, UserUpdateErrorsProps } from '@/types/user';
import { useAuth } from '../providers/AuthProvider';

const FormUpdateUser = ({username,defaultName,defaultBio,defaultProfilePic,defaultCover,onClose}:UpdateProfileProps) => {
    const [isDisableBtn,setIsDisableBtn] = useState<boolean>(true)
    const { updateUser } = useAuth()
    const [formData,setFormData] = useState({
        name : defaultName,
        bio : defaultBio,
        profile_picture : defaultProfilePic,
        cover_photo : defaultCover,
    })

    useEffect(() => {
        if(formData.name != defaultName || formData.bio != defaultBio ||
        formData.profile_picture || formData.cover_photo) {
            setIsDisableBtn(false)
        }else{
            setIsDisableBtn(true)
        }
    },[formData])
    const formSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        updateUser(formData)
        onClose()
    }
  return (
    <form onSubmit={formSubmit} className='flex flex-col sm:shadow sm:rounded-b-xl'>
        <div className="relative">
            < ImageInput 
            onChange={(file) => setFormData({...formData,cover_photo : file})}
            defaultImage={defaultCover}  />
            < ImageInput 
            onChange={(file) => setFormData({...formData,profile_picture : file})} 
            imageRatio='square' 
            defaultImage={defaultProfilePic} 
            className="!absolute aspect-square rounded-full overflow-hidden border-light dark:border-d_semiDark border-4 -bottom-16 left-4 w-28 ss:w-32" />
        </div>
        <div className='mt-20 mb-4 px-4'>
            <input 
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({...prev,name : e.target.value}))}
            className="w-full border dark:border-0 pl-2 py-2 rounded-xl focus:outline-none"
            type="text"
            placeholder="Name" />
        </div>
        <div className='overflow-y-auto max-h-full mb-4 px-4'>
            < TextArea
            rows={3}
            value={formData.bio}
            onChange={(e) => setFormData((prev) => ({...prev,bio : e.target.value}))}
            placeholder="Bio"
            className='min-h-[36px] pl-2 rounded-xl dark:!border-0' />
        </div>
        <div className="fixed left-0 bottom-0 right-0 ss:static bg-white dark:bg-d_semiDark flex items-center justify-end px-4 pt-2 pb-3">
            <button 
            disabled={isDisableBtn} 
            type='submit'
            className="px-6 py-[6px] text-sm bg-dark dark:bg-white dark:text-dark text-white hover:bg-gray-300 font-medium rounded-full disabled:opacity-40 disabled:cursor-not-allowed">
                Save
            </button>
        </div>
    </form>
  )
}

export default FormUpdateUser
