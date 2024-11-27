'use client'

import type { ReactNode } from 'react'
import { Link as ScrollLink } from 'react-scroll'

export function MoveToBottomButton({ children }: { children: ReactNode }) {
  return (
    <ScrollLink
      className="cursor-pointer"
      to="homeCategory"
      smooth={true}
      duration={500}
      offset={-100}
    >
      {children}
    </ScrollLink>
  )
}
