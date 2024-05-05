import Navigation from "./Navigation"

const Sidebar = async () => {
  return (
    <aside 
    className='bg-light dark:bg-d_semiDark fixed sm:sticky sm:top-[72px] sm:h-fit bottom-0 right-0 left-0 py-1 px-0 sm:px-1 
    sm:py-2 border-t sm:border-0 dark:border-d_netral z-[10] sm:z-0 shadow-none sm:shadow sm:rounded-xl'>
      <Navigation
      className="flex-row sm:flex-col items-center sm:items-start justify-evenly sm:justify-center gap-0 sm:gap-1 w-full"
      />
    </aside>
  )
}   

export default Sidebar
