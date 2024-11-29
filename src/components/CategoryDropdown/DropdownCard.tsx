import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import NoImage from '@/app/assets/SemImagem.png'

export type dropdownCardProps = {
  category: string | ''
  categoryImageUrl?: string | StaticImageData
}

export function DropdownCard({
  categoryImageUrl,
  category,
}: dropdownCardProps) {
  return (
    <Link href={`/categories?category=${category}`}>
      <div className="w-[220px] h-[280px] flex items-start justify-start bg-blogWhite flex-col gap-7 pt-16 px-7 rounded-lg shadow hover:bg-blogYellow transition">
        <Image
          src={categoryImageUrl ?? NoImage}
          alt={category}
          width={60}
          height={60}
          quality={100}
        />
        <span>{category}</span>
      </div>
    </Link>
  )
}
