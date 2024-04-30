import Link from "next/link"
import TempAppIcon from "./icons/TempAppIcon"

const ApplicationLogo = () => {
  return (
    <Link className="flex item-center justify-start" href={`/`}  >
        <TempAppIcon />
    </Link>
  )
}

export default ApplicationLogo
