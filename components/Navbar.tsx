import ApplicationLogo from "./ApplicationLogo"
import ProfileDropdown from "./ProfileDropdown"
import Search from "./Search"

const Navbar = () => {
  return (
    <nav className={`bg-light dark:bg-d_semiDark flexCenter fixed top-0 right-0 left-0 shadow z-[995] px-4 sm:px-5 ${className}`}>
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
                <div className='hidden ss:block'>
                    <ProfileDropdown
                    name={session?.user.name as string} 
                    username={session?.user.username as string}
                    profile_picture={session?.user.profile_picture as string} 
                    className='w-fit sm:w-44'
                    />
                </div>
                <CreatePostModal profilePicture={session?.user.profile_picture as string} className='block ss:hidden'>
                    <IoIosAddCircleOutline className='text-3xl text-dark dark:text-light' />
                </CreatePostModal>
                < CgMenuRight className='text-[26px] text-dark dark:text-light block ss:hidden' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar
