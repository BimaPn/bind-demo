'use client'
import { MdArrowForwardIos } from "react-icons/md"
import { IoMdSettings } from 'react-icons/io'
import { IoLogOut } from "react-icons/io5"
import Link from "next/link"
import Dropdown, { useDropdown } from "./ui/Dropdown"
import RoundedImage from "./ui/RoundedImage"
import ThemeSwitch from "./ui/ThemeSwicth"
import { authUser } from "@/constants/user"
import { useAuth } from "./providers/AuthProvider"
import { RiPaintFill } from "react-icons/ri"
import { useState } from "react"
import { UserProfileProps } from "@/types/user"
import { AnimatePresence, motion } from "framer-motion"
import { HiArrowRight } from "react-icons/hi2"
import { CgMenuRight } from "react-icons/cg"

const ProfileDropdown = ({className} : {className ?: string}) => {
  const { user } = useAuth()
  return  (
    <Dropdown>
      <Dropdown.Trigger>
        <div className={`hidden sm:flex items-center justify-center gap-3 hover:bg-semiLight dark:hover:bg-d_netral dark:text-d_light ${className} sm:px-2 rounded-lg cursor-pointer sm:py-1`}>
          <div className="flex items-center gap-2 max-w-[85%]">
            <RoundedImage
            src={user.profile_picture}
            alt="profile picture"
            className="min-w-[34px] w-[34px] sm:min-w-[36px] sm:w-[36px]" /> 
            <span className="font-medium text-sm hidden sm:block w-full truncate">{user.name}</span>
          </div>
          <MdArrowForwardIos className="text-sm rotate-90 hidden sm:block" />
        </div>
        <CgMenuRight className='text-[26px] text-dark dark:text-light block sm:hidden -mb-1' />
      </Dropdown.Trigger>

      <Dropdown.Content closeWhenClick={false} className="right-0 w-56 ss:w-72 h-[113px] ss:h-[170px] bg-light dark:bg-d_semiDark shadow rounded-lg py-1 ss:py-2 px-1 ss:px-3 overflow-hidden">
        <DropdownContent user={user} />
      </Dropdown.Content>
    </Dropdown>
  )
}

const DropdownContent = ({user}:{user:UserProfileProps}) => {
  const [menu, setMenu] = useState<"main"|"appearance">("main")
  return (
    <> 
      <AnimatePresence> 
        {menu === "main" && <MainMenu key={"mainMenu"} changeMenu={(menu) => setMenu(menu)} user={user} />}
        {menu === "appearance" && <AppearanceMenu key={"AppearanceMenu"} onBack={() => setMenu("main")} />}
      </AnimatePresence>
    </>
  )
}

const mainMenuVariants = {
  initial: {
    x: -500
  },
  animate: {
    x: 0,
    transition: {
      duration: .3,
    }
  },
  exit: {
    x: -500,
    transition: {
      duration: .3,
    }
  }
}

const MainMenu = ({user, changeMenu}:{user:UserProfileProps, changeMenu: (menu:"main"|"appearance") => void}) => {
  const { toggleOpen } = useDropdown()
  return (
    <motion.div variants={mainMenuVariants} initial="initial" animate="animate" exit="exit" className="w-full flex flex-col">
      <Link
      onClick={toggleOpen}
      href={`/user/${user.username}`} 
      className="hidden hover:bg-semiLight dark:hover:bg-d_netral ss:flex items-center gap-3 py-2 px-1 
      rounded-xl hover:text-dark text-gray-700 dark:text-d_light"
      >
        <RoundedImage
        src={user.profile_picture}
        className="w-9"
        alt="profile picture"/>
        <span className="font-medium">Profile</span>
      </Link>
      <button 
      onClick={() => changeMenu("appearance")} 
      className="flexBetween py-2 px-1 hover:bg-semiLight dark:hover:bg-d_netral rounded-xl hover:text-dark text-gray-700 dark:text-d_light group">
        <div className="flex items-center gap-3">
          <div className="w-9 flexCenter aspect-square rounded-full bg-semiLight dark:bg-d_netral">
            <RiPaintFill className="text-[22px]" />
          </div>
          <span className="font-medium">Appearance</span>
        </div>
        <div className="group-hover:flex items-center justify-center flex ss:hidden mr-2">
          <HiArrowRight className="text-lg" />
        </div>
      </button>
      
      <button onClick={toggleOpen} className="flex items-center gap-3 py-2 px-1 hover:bg-semiLight dark:hover:bg-d_netral rounded-xl hover:text-dark text-gray-700 dark:text-d_light">
        <div className="w-9 flexCenter aspect-square rounded-full bg-semiLight dark:bg-d_netral">
          <IoLogOut className="text-2xl" />
        </div>
        <span className="font-medium">
          Logout
        </span>
      </button>
    </motion.div>
  )
}

const appearanceMenuVariants = {
  initial: {
    x: 500,
  },
  animate: {
    x: 0,
    transition: {
      duration: .3,
    }
  },
  exit: {
    x: 500,
    transition: {
      duration: .3,
    }
  }
}

const AppearanceMenu = ({onBack}:{onBack: () => void}) => {
  return (
    <motion.div variants={appearanceMenuVariants} initial="initial" animate="animate" exit="exit" className="absolute inset-0 w-full h-full py-2 px-3">
      <div className="flex items-center gap-[6px]">
      <button onClick={onBack} className="flexCenter"> 
        <HiArrowRight className="text-xl rotate-180" />
      </button>
      <span className="font-medium">Appearance</span>
      </div>

      <div className="py-3">
        <div className="flexBetween">
          <span>Theme</span>
          <ThemeSwitch />
        </div>
      </div>
    </motion.div>
  )
}

export default ProfileDropdown
