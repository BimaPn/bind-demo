import { IoIosAddCircleOutline } from "react-icons/io"
import ApplicationLogo from "./ApplicationLogo"
import NotificationDropdown from "./NotificationDropdown"
import ProfileDropdown from "./ProfileDropdown"
import Search from "./Search"
import { CgMenuRight } from "react-icons/cg"
import CreatePostModal from "./post/CreatePostModal"

const Navbar = ({className}:{className?:string}) => {
  return (
    <nav className={`bg-light dark:bg-d_semiDark flexCenter fixed top-0 right-0 left-0 shadow z-[1] px-4 sm:px-5 ${className}`}>
        <div className='w-[1366px] grid grid-cols-2 md:grid-cols-[1fr_2.5fr_1fr] py-[6px]'>
            {/* logo */}
            <div className='flex py-3'>
            <ApplicationLogo />
            </div>
            {/* search */}
            <div className='hidden md:flex items-center justify-center'>
                <Search className='w-[70%] xl:w-[70%]' />
            </div>
            {/* props */}
            <div className='flex items-center justify-end gap-3'>
                <div className='ss:block hidden'>
                  <NotificationDropdown />
                </div>
                <CreatePostModal className='block ss:hidden'>
                  <IoIosAddCircleOutline className='text-[28px] text-dark dark:text-light' />
                </CreatePostModal>
                <ProfileDropdown
                className='w-fit sm:w-44'
                />
            </div>
        </div>
    </nav>
  )
}

export default Navbar
