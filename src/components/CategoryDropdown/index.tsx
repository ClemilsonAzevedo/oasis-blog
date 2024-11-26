import { DropdownCard } from './DropdownCard'
import { DropdownHeader } from './DropdownHeader'

export function CategoryDropdown() {
  return (
    <div
      id="homeCategory"
      className="p-16 flex flex-col justify-center w-full gap-12 bg-blogLightGray100"
    >
      <DropdownHeader />
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
