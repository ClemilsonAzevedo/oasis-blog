'use client'

import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type SearchContextType = {
  isSearchOpen: boolean
  toggleSearch: () => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export const useSearch = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev)
  }

  // Atualizar a URL quando o searchQuery mudar
  useEffect(() => {
    if (searchQuery) {
      // Atualiza a URL manualmente usando window.history
      window.history.pushState(
        null,
        '',
        `/articles/${searchQuery}?slug=${searchQuery.toLowerCase().replace(/\s+/g, '-')}`,
      )
    }
  }, [searchQuery])

  return (
    // Provider para o contexto de pesquisa
    <SearchContext.Provider
      value={{
        isSearchOpen,
        toggleSearch,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
