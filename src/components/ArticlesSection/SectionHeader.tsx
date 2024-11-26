import { ChevronRightIcon } from '@/app/assets/icons/ChevronRight'
import Link from 'next/link'

export type SectionHeaderProps = {
  headerProps: {
    sectionTitle: string
    sectionRedirectLink: string
  }
}

export function SectionHeader({ headerProps }: SectionHeaderProps) {
  const { sectionRedirectLink, sectionTitle } = headerProps

  return (
    <div>
      <div className="flex flex-col gap-1 md:flex-row items-center justify-between w-full px-4">
        <h5 className="text-lg md:text-2xl truncate font-bold flex items-center gap-2">
          {sectionTitle}
          <span className="border-blogBlack border-2  h-px w-9" />
        </h5>
        <Link
          href={sectionRedirectLink}
          type="button"
          className="flex items-center gap-3 text-xl font-bold"
        >
          Ver Todos os Artigos <ChevronRightIcon />
        </Link>
      </div>
    </div>
  )
}
