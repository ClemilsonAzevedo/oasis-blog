'use client'

import { CloseIcon } from '@/app/assets/icons/Close'
import { MagnifyingGlassIcon } from '@/app/assets/icons/MagnifyingGlass'
import { MenuIcon } from '@/app/assets/icons/Menu'
import { useSearch } from '@/context/SearchContext'
import Link from 'next/link'
import { useState } from 'react'
import { MoveToBottomButton } from '../MoveToBottomButton'

// todo:Fazer a pesquisa funcional

export function NavMenu() {
  const { toggleSearch } = useSearch()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      aria-label="Navegação principal"
      className="relative text-xl font-bold pr-4 z-50"
    >
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-12">
        <li>
          <Link href="/" legacyBehavior>
            Home
          </Link>
        </li>
        <li>
          <Link href="#homeCategory" scroll={false} legacyBehavior>
            <MoveToBottomButton>Categories</MoveToBottomButton>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            Contato
          </Link>
        </li>
        <li>
          <button
            type="button"
            onClick={toggleSearch}
            aria-label="Abrir pesquisa"
            className="flex items-center  py-1 w-28 gap-[10px]"
          >
            <MagnifyingGlassIcon />
            <span id="search" className="text-xl">
              Procurar
            </span>
          </button>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center p-4">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          className="text-gray-800 hover:text-gray-500 focus:outline-none"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Side Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blogLightGray100 shadow-lg transition-transform transform z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
            className="text-gray-800 hover:text-gray-500 focus:outline-none mb-4"
          >
            <CloseIcon />
          </button>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" legacyBehavior>
                Home
              </Link>
            </li>
            <li>
              <MoveToBottomButton>Categories</MoveToBottomButton>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                Contato
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={toggleSearch}
                aria-label="Abrir pesquisa"
                className="flex items-center  py-1 w-28 gap-[10px]"
              >
                <MagnifyingGlassIcon />
                <span id="search" className="text-xl">
                  Procurar
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
