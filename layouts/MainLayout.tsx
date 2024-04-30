import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import SidebarSecond from '@/components/SidebarSecond'
import { MainLayoutProps } from '@/types/types'

const MainLayout = async ({children,navbarMobile = true, className}:MainLayoutProps) => {
  return (
    <>
    <header>
      <Navbar className={`${navbarMobile && '!hidden ss:!flex'}`} />
    </header>
    <main className='flex justify-center min-h-screen px-0 sm:px-5'>
      <div
       className={
         `w-full ss:w-[90%] md:w-[1366px] grid grid-cols-1 sm:grid-cols-[.1fr_3fr]
         md:grid-cols-[.1fr_4fr] lg:grid-cols-[.8fr_3.5fr] gap-3 sm:gap-6 relative`}>
        <Sidebar />
        <div className='flex justify-center gap-6'>
          <div className={`grow flex justify-start md:justify-center mt-12 mb-14 ss:!my-[72px] ${navbarMobile && '!mt-0'}`}>
            <div className={`w-full md:w-[90%] ${className}`}>
             {children}
            </div>
          </div>
          <SidebarSecond />
        </div>
      </div>
    </main>
    </>
  )
}

export default MainLayout

