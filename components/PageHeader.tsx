import { PiArrowLeft } from "react-icons/pi"
import BackButton from "./BackButton"

type PageHeaderProps = {
    title : string
    showWideScreen?: boolean
    children ?: React.ReactNode
    className ?: string
}

const PageHeader = ({title,showWideScreen=true,children,className}:PageHeaderProps) => {
  return (
    <>
    <div className={`ss:hidden block sticky top-0 left-0 right-0 bg-light border-b dark:border-d_netral dark:bg-d_semiDark text-dark dark:text-d_light py-3 px-4 flexBetween rounded-none sm:rounded-t-xl z-[550] ${className}`}>
        <div className="flex items-center gap-3">
            <BackButton />
            <span className="font-medium">
                {title}
            </span>
        </div>
        <div>
            {children}
        </div>
    </div>
    {showWideScreen && (
      <div className="hidden ss:block px-2 ss:px-4 pt-4 pb-3"> 
          <h1 className='font-semibold text-xl hidden xs:block'>{title}</h1>
      </div>
    )}

    </>

  )
}

export default PageHeader
