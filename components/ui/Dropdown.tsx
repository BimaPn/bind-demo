'use client'
import {useState,useContext,createContext} from 'react'
import { DropdownProps } from '@/types/types.dropdown'
import { AnimatePresence, motion } from "framer-motion"

export const dropDownContext = createContext<DropdownProps | null>(null)

const Dropdown = ({children}:{children : React.ReactNode}) => {
    const [open,setOpen] = useState<boolean>(false);
    const toggleOpen = () => {
        setOpen((prev) => !prev)
    }
  return (
    <dropDownContext.Provider value={{ open,setOpen, toggleOpen}}>
        <div className='relative'>
            {children}
        </div>
    </dropDownContext.Provider>
  )
}

const Trigger = ({children}:{children : React.ReactNode}) => {
    const { open,setOpen,toggleOpen } = useContext(dropDownContext) as DropdownProps
    return (
        <>
            <button onClick={() => toggleOpen()}>{children}</button>
            {open && <div className='fixed inset-0 z-[990]' onClick={() => setOpen(false)}></div>}
        </>
    )
}

const contentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      bounce: 0
    }
  },
  exit: {
    opacity: 0,
    transition: {
      bounce: 0,
      delay: .2
    }
  }
}
const childVariants = {
  initial: {
    opacity: 0,
    transition: {
      bounce: 0,
      delay: .2
    }
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  }
}

const Content = ({children, showFromBottom=true, closeWhenClick=true, className}:{children : React.ReactNode, showFromBottom?: boolean, closeWhenClick?:boolean, className ?: string}) => {
    const { open,setOpen } = useContext(dropDownContext) as DropdownProps
    const toggle = () => {
      if(!closeWhenClick) return
      setOpen(prev => !prev)
    }
    return (
    <> 
      <AnimatePresence> 
      {open && (
        <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={() => toggle()}
        className={`absolute mt-2 ${showFromBottom && 'top-full'} z-[994] ${className} origin-top shadow`}>
          <motion.div variants={childVariants}>
            {children}
          </motion.div>

        </motion.div>
      )}
      </AnimatePresence>

    </>
    )
} 

export const useDropdown = () => {
  return useContext(dropDownContext) as DropdownProps
}
Dropdown.Trigger = Trigger
Dropdown.Content = Content
export default Dropdown
