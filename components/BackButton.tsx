"use client"
import { useRouter } from 'next/navigation'
import { MdOutlineClose } from 'react-icons/md'
import { PiArrowLeft } from 'react-icons/pi'

const BackButton = ({ closeIcon=false, className }:{  closeIcon?: boolean,className?:string }) => {
  const router = useRouter()
  return (
    <button onClick={router.back} className={className}>
      {closeIcon && ( 
        <MdOutlineClose className='text-[23px]' />
      )}
      {!closeIcon && ( 
        <PiArrowLeft className="text-[22px]" />
      )}

    </button>
  )
}

export default BackButton
