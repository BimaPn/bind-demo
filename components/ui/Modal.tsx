'use client'
import { ModalBoxProps } from "@/types/types";
import { Ref, forwardRef, ForwardRefRenderFunction, useEffect } from "react";
import { PiArrowLeft } from "react-icons/pi"

const Modal = ({show,title,children,onClose,className}:ModalBoxProps) => {
    useEffect(() => {
      if(show) {
        document.body.style.overflow = "hidden"
      }else {
        document.body.style.overflow = "auto"
      }

      return () => {
        document.body.style.overflow = "auto"
      }
    },[show])
    const closeModal = () => {
        onClose()
    }
    const buttonClick = (e:React.MouseEvent) => {
        e.stopPropagation()
        closeModal()
    }
  return show && (
    <div 
    onClick={buttonClick}
    className='flexCenter fixed bg-black/25 dark:bg-black/60 inset-0 z-[6000]'>
        <div 
        onClick={(e) => e.stopPropagation()}
        className={`relative w-[662px] sm:!max-h-[90%] flex flex-col bg-light dark:bg-d_semiDark ss:rounded-xl z-[997] ${className}`}>
            {/* header */}
            <div className="top-0 left-0 right-0 flex items-center gap-2 text-dark dark:text-d_light py-3 px-4">
                <button onClick={buttonClick}>
                    <PiArrowLeft className="text-xl" />
                </button>
                <span className="font-medium">{title}</span>
            </div>
            {children}
        </div>
    </div>
  )
}

type BodyProps = {
  children: React.ReactNode
  className?: string
}

const Body: ForwardRefRenderFunction<HTMLDivElement, BodyProps> = ({children, className},ref) => {
    return (
        <div className={`overflow-auto sm:max-h-full ${className}`} ref={ref}>
            {children}
        </div>
    )
}

const Footer = ({children,className}:{children:React.ReactNode,className ?: string}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

Modal.Body = forwardRef(Body) 
Modal.Footer = Footer
export default Modal
