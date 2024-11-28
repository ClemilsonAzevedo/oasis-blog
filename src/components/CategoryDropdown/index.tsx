'use client'

import { useState } from 'react'
import { DropdownCard, type dropdownCardProps } from './DropdownCard'
import { DropdownHeader } from './DropdownHeader'

type CategoryDropdownProps = {
  cards: dropdownCardProps[]
}

export function CategoryDropdown({ cards }: CategoryDropdownProps) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const visibleCards = isDropDownOpen ? cards : cards.slice(0, 5)

  return (
    <div
      id="homeCategory"
      className="p-16 flex flex-col justify-center w-full gap-12 bg-blogLightGray100"
    >
      <DropdownHeader
        isDropDownOpen={isDropDownOpen}
        setIsDropDownOpen={setIsDropDownOpen}
      />
      <div className="flex flex-col md:flex-row items-center flex-wrap justify-center gap-9">
        {visibleCards.map((card, index) => (
          <div
            key={card.category}
            className="transform transition duration-300 ease-in-out opacity-0 translate-y-5 animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <DropdownCard
              category={card.category}
              categoryImageUrl={card.categoryImageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
