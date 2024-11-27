'use client'

import { CloseIcon } from '@/app/assets/icons/Close'
import { MagnifyingGlassIcon } from '@/app/assets/icons/MagnifyingGlass'
import { MenuIcon } from '@/app/assets/icons/Menu'
import Link from 'next/link'
import { useState } from 'react'
import { MoveToBottomButton } from '../MoveToBottomButton'

// todo:Refatorar Os Menus

export function NavMenu() {
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
        <li className="flex items-center py-1 w-28">
          <label htmlFor="search" className="mr-[10px]">
            <MagnifyingGlassIcon />
          </label>
          <input
            type="text"
            id="search"
            placeholder="Procurar"
            className="placeholder:text-blogBlack placeholder:text-xl focus:outline-none flex-1 bg-transparent w-[85px]"
          />
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
            <li className="flex items-center py-1 w-full">
              <label htmlFor="search" className="mr-[10px]">
                <MagnifyingGlassIcon />
              </label>
              <input
                type="text"
                id="search"
                placeholder="Procurar"
                className="placeholder:text-blogBlack placeholder:text-xl focus:outline-none flex-1 bg-transparent w-full"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
