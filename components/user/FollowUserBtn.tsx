'use client'

import ApiClient from "@/app/api/axios/ApiClient"
import { useState } from "react"

const FollowUserBtn = ({isFollow,usernameTarget,onFinished,className} : 
    {isFollow : boolean,usernameTarget : string,onFinished ?: () => void,className ?:string}) => {
        
    const [isBtnDisable,setIsBtnDisable] = useState<boolean>(false)
    const buttonClick = (e:React.MouseEvent) => {
        e.stopPropagation()
        setIsBtnDisable(true)
        let url;
        if(isFollow) {
            url = `/api/${usernameTarget}/unfollow`;
        }else {
            url = `/api/${usernameTarget}/follow`;
        }
        ApiClient.post(url)
        .then(() => {
            if(onFinished){
                onFinished()
            }
            setIsBtnDisable(false)
        })
    }
  return (
    <button 
    onClick={buttonClick}
    disabled={isBtnDisable}
    className={`text-[15px] px-5 py-2 rounded-full font-semibold
    ${isFollow ? 'bg-semiLight dark:bg-d_netral text-dark dark:text-d_light' : 'bg-blue-100 dark:bg-semiLight text-blue-600 text-sm dark:text-dark'} ${className}`}>
    {isFollow ? 'Unfollow' : ' Follow'} 
    </button>  
  )
}

export default FollowUserBtn
