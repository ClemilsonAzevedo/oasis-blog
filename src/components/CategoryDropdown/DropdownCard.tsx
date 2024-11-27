import VueJsFramework from '@/app/assets/FrameworkVueJs.svg'
import Image from 'next/image'

export function DropdownCard() {
  return (
    <div className="w-[220px] h-[280px] flex items-start justify-start bg-blogWhite flex-col gap-7 pt-16 px-7 rounded-lg shadow hover:bg-blogYellow transition">
      <Image src={VueJsFramework} alt="Framework VueJs" quality={100} />
      <span>Vue JS</span>
    </div>
  )
}
