import Link from "next/link"
import Logo from "./icons/Logo"

const ApplicationLogo = () => {
  return (
    <Link className="flex items-center gap-[2px]" href={`/`}  >
      <Logo />
      <span className="font-azonix text-[24px]">Bind</span>
    </Link>
  )
}

export default ApplicationLogo
