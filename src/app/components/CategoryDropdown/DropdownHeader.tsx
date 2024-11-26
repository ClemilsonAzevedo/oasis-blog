type DropdownHeaderProps = {
  props: {
    isDropDownOpen: boolean
    setIsDropDownOpen: (value: boolean) => void
    categoryTitle: string
  }
}

export function DropdownHeader({ props }: DropdownHeaderProps) {
  const { isDropDownOpen, setIsDropDownOpen, categoryTitle } = props

  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <h5>Navegue pela Categoria</h5>
        <button type="button">Ver Todas as Categorias</button>
      </div>
    </div>
  )
}
