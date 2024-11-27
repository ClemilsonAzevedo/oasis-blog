import { ChevronDown, ChevronRight } from 'lucide-react'

type DropdownHeaderProps = {
  isDropDownOpen: boolean
  setIsDropDownOpen: (value: boolean) => void
}

export function DropdownHeader({
  isDropDownOpen,
  setIsDropDownOpen,
}: DropdownHeaderProps) {
  return (
    <div>
      <div className="flex flex-col gap-1 md:flex-row items-center justify-between w-full px-4">
        <h5 className="text-lg md:text-2xl truncate font-bold flex items-center gap-2">
          Navegue pela Categoria
          <span className="border-blogBlack border-2  h-px w-9" />
        </h5>
        <button
          onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          type="button"
          className="flex items-center gap-3 text-xl font-bold"
        >
          Ver Todas as Categorias{' '}
          {isDropDownOpen ? <ChevronRight /> : <ChevronDown />}
        </button>
      </div>
    </div>
  )
}
