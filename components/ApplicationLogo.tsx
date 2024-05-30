import Link from "next/link"
import Logo from "./icons/Logo"

const ApplicationLogo = () => {
  return (
    <Link className="flex items-center gap-[2px]" href={`/`}  >
      <Logo />
      <span className="font-azonix text-[25px]">BIND</span>
    </Link>
  )
}

export default ApplicationLogo
