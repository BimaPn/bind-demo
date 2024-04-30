'use client'
import { BiSolidBookmark } from "react-icons/bi"
import { GoHomeFill } from "react-icons/go"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { comparePath } from "@/constants"
import ExploreIcon from "./icons/ExploreIcon"
import ChatIcon from "./icons/ChatIcon"
import GroupIcon from "./icons/GroupIcon"
import UserIcon from "./icons/UserIcon"
import { useAuth } from "./providers/AuthProvider"

const Navigation = ({className}:{className?:string}) => {
  const { user } = useAuth()
  const pathname = usePathname()
  return (
        <div className={`flex text-dark dark:text-d_light ${className}`}>
            <NavItem
            name="Home"
            path={`/`} 
            icon={
            <GoHomeFill 
            className={`${pathname === '/' ? 'fill-dark dark:fill-light stroke-none' : 'fill-none stroke-dark dark:stroke-light'}`} 
            strokeWidth={1.5} 
            style={{ fontSize : 27 }} 
            />
            } 
            isActive={pathname === '/'}
            />

            <NavItem
            name="Explore"
            path={`/explore`} 
            icon={
            <ExploreIcon
            active={comparePath(pathname, "/explore") ? true : false}
            width={24} 
            />
            } 
            isActive={comparePath(pathname, "/explore")}
            />

            <NavItem
            name="Chat"
            path={`/chat`} 
            icon={
            <ChatIcon
            active={comparePath(pathname, "/chat") ? true : false}
            width={22}
            />        
            } 
            isActive={comparePath(pathname, "/chat")}
            />

            <NavItem
            name="Group"
            path={`/group`} 
            icon={
            <GroupIcon
            active={comparePath(pathname, "/group") ? true : false}
            width={20} 
            />
            } 
            isActive={comparePath(pathname, "/group")}
            />

            <NavItem
            name="Saved"
            path={`/saved`} 
            className="!hidden ss:!flex"
            icon={
            <BiSolidBookmark 
            className={`stroke-dark dark:stroke-light 
            ${comparePath(pathname, "/saved") ? 'fill-dark dark:fill-light' : 'fill-none'} text-[21px]`}
            strokeWidth={1.7}  
            />
            } 
            isActive={comparePath(pathname, "/saved")}
            />

            <NavItem
            name="Profile"
            path={`/user/${user.username}`} 
            className="ss:hidden"
            icon={
              <UserIcon
              active={comparePath(pathname, `/user/${user.username}`)} 
              width={16.5}
              className={`stroke-dark fill-none`}
              />
            } 
            isActive={comparePath(pathname, `/user/${user.username}`)}
            />
        </div>

  )
}

const NavItem = ({isActive, path, name, icon, className}:{isActive: boolean, path:string, name:string, icon: React.ReactNode, className?:string}) => {
  return (
    <Link
    href={path}
    className={`sm:w-full flex items-center gap-2 py-2 px-2 
    hover:bg-semiLight dark:hover:bg-d_netral rounded-lg cursor-pointer 
    ${isActive && 'font-medium'} ${className}`}
    >
      <div className="w-8 flexCenter">
      {icon} 
      </div>
      <span className="hidden lg:block">
        {name} 
      </span>
    </Link>
  )
}

export default Navigation
