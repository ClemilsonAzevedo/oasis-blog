import type { ReactNode } from 'react'

export default function PostLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <div className="prose prose-zinc md:prose-lg mx-auto max-w-[calc(100vw-64px)] md:max-w-3xl prose-h1:leading-tight">
        {children}
      </div>
    </div>
  )
}
