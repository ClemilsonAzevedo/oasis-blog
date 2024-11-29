'use client'

import { useState } from 'react'
import { DropdownCard, type dropdownCardProps } from './DropdownCard'
import { DropdownHeader } from './DropdownHeader'

type CategoryDropdownProps = {
  cards: dropdownCardProps[] // Uma lista de objetos que representam os cartões de categoria a serem exibidos
}

export function CategoryDropdown({ cards }: CategoryDropdownProps) {
  // Cria o estado 'isDropDownOpen' para controlar se o dropdown está aberto ou fechado
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  // Define quais cartões serão visíveis, limitando a 5 se o dropdown não estiver aberto
  const visibleCards = isDropDownOpen ? cards : cards.slice(0, 5)

  return (
    <div
      id="homeCategory"
      className="p-16 flex flex-col justify-center w-full gap-12 bg-blogLightGray100"
    >
      {/* Componente de Cabeçalho do Dropdown com as funções de abrir e fechar */}
      <DropdownHeader
        isDropDownOpen={isDropDownOpen}
        setIsDropDownOpen={setIsDropDownOpen}
      />

      <div className="flex flex-col md:flex-row items-center flex-wrap justify-center gap-9">
        {visibleCards.map((card, index) => (
          <div
            key={card.category}
            className="transform transition duration-300 ease-in-out opacity-0 translate-y-5 animate-fadeIn" // Estilo de animação para os cartões
            style={{ animationDelay: `${index * 0.1}s` }} // Adiciona um atraso na animação de cada cartão
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
