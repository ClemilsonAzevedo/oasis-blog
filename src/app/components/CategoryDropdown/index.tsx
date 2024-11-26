import { DropdownHeader } from './DropdownHeader'

export function CategoryDropdown() {
  return (
    <div>
      <DropdownHeader
        props={{
          isDropDownOpen: false,
          setIsDropDownOpen: () => {},
          categoryTitle: 'Opahhhh',
        }}
      />
      <div>kkkk</div>
    </div>
  )
}
