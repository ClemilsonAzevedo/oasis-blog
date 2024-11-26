import { DropdownCard } from './DropdownCard'
import { DropdownHeader } from './DropdownHeader'

export function CategoryDropdown() {
  return (
    <div
      id="homeCategory"
      className="bg-blogLightGray100 p-16 flex flex-col justify-center w-full gap-12 relative -z-0"
    >
      <DropdownHeader
        props={{
          isDropDownOpen: false,
          setIsDropDownOpen: () => {},
          categoryTitle: 'Opahhhh',
        }}
      />
      <div className="flex flex-col md:flex-row items-center justify-center gap-9">
        <DropdownCard />
        <DropdownCard />
        <DropdownCard />
        <DropdownCard />
        <DropdownCard />
      </div>
    </div>
  )
}
