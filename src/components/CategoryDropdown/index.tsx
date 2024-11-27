import { DropdownCard, type dropdownCardProps } from './DropdownCard'
import { DropdownHeader } from './DropdownHeader'

type CategoryDropdownProps = {
  cards: dropdownCardProps[]
}

export function CategoryDropdown({ cards }: CategoryDropdownProps) {
  return (
    <div
      id="homeCategory"
      className="p-16 flex flex-col justify-center w-full gap-12 bg-blogLightGray100"
    >
      <DropdownHeader />
      <div className="flex flex-col md:flex-row items-center justify-center gap-9">
        {cards.map((card) => (
          <DropdownCard
            key={card.category}
            category={card.category}
            categoryImageUrl={card.categoryImageUrl}
          />
        ))}
      </div>
    </div>
  )
}
