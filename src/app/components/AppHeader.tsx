import OasisLogo from '@/assets/OasisLogo.svg'
import Image from 'next/image'
import Link from 'next/link'

export function AppHeader() {
  return (
    <header className="flex items-center justify-between gap-2 h-full">
      <Image src={OasisLogo} alt="Logo" quality={100} />
      <nav>
        <ul>
          <Link href={'/'}>Home</Link>
          <Link href={'/categorias'}>Categorias</Link>
          <div>
            <label htmlFor="search">icon</label>
            <input type="text" placeholder="Procurar" />
          </div>
        </ul>
      </nav>
    </header>
  )
}
