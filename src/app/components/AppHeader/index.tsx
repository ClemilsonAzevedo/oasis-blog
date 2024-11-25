import OasisLogo from '@/assets/OasisLogo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { NavMenu } from './NavMenu'

export function AppHeader() {
  return (
    <header className="flex items-center justify-between gap-2 h-full bg-blogLightGray100 px-6 md:px-12 lg:px-24 w-full sticky top-0">
      {/* Logo Link to redirect Home */}
      <Link href="/">
        <Image
          src={OasisLogo}
          alt="Logo Oasis Blog"
          quality={100}
          className="w-20 md:w-44"
        />
      </Link>
      <NavMenu />
    </header>
  )
}
