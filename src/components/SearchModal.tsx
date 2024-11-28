'use client'

import { useSearch } from '@/context/SearchContext'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { AppButton } from './AppButton'

export function SearchModal() {
  const { isSearchOpen, toggleSearch, searchQuery, setSearchQuery } =
    useSearch()
  const modalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Focar no campo de pesquisa quando o modal for aberto
  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current?.focus()
    }
  }, [isSearchOpen])

  useEffect(() => {
    // Fechar o modal ao pressionar Esc
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleSearch()
      }
    }

    // Fechar o modal ao clicar fora dele
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        toggleSearch()
      }
    }

    document.addEventListener('keydown', handleEsc)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [toggleSearch])

  const handleSearchSubmit = () => {
    // Navegar para a rota usando o useRouter
    router.push(
      `/articles/${searchQuery}?slug=${searchQuery.toLowerCase().replace(/\s+/g, '-')}`,
    )
    setSearchQuery('') // Limpa o campo de pesquisa depois de navegar
    toggleSearch() // Fecha o modal após a pesquisa
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, '') // Remove espaços da palavra
    setSearchQuery(value)
  }

  return (
    <>
      {isSearchOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-neutral-800 bg-opacity-50 z-50 p-5">
          <div
            ref={modalRef}
            className="bg-blogLightGray100 p-6 rounded-lg w-full sm:w-96 relative space-y-5"
          >
            <p className="text-sm text-center text-blogGray font-bold">
              Você pode pesquisar chave por uma palavra aqui <br />
              Exemplo: “JavaScript”
            </p>
            <form
              onSubmit={handleSearchSubmit}
              className="flex flex-col items-center justify-center gap-6"
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Digite uma palavra para pesquisar"
                value={searchQuery}
                onChange={handleInputChange}
                className="w-full py-3 px-2 border rounded focus:outline-blogYellow text-sm"
              />
              <AppButton type="submit" className="w-full py-2 text-sm">
                Buscar
              </AppButton>
            </form>
            <p className="text-sm text-center text-blogGray font-bold">
              Para abrir e fechar o modal pressione a tecla &quot;esc&quot;
            </p>
          </div>
        </div>
      )}
    </>
  )
}
