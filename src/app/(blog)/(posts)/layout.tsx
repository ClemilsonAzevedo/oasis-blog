import { Comments } from '@/components/Comments'
import type { ReactNode } from 'react'

export default function PostLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8 py-10 md:py-20 max-lg:px-4">
      <div className="prose prose-zinc md:prose-lg mx-auto max-w-[800px] md:max-w-3xl prose-h1:leading-tight prose-h1:text-4xl prose-h2:text-2xl prose-blockquote:bg-blogSecondary50 prose-blockquote:border-l-4 prose-blockquote:border-blogSecondary100 prose-blockquote:rounded-xl md:prose-blockquote:p-8 prose-blockquote:p-4 md:prose-blockquote:text-2xl prose-blockquote:italic">
        {children}
      </div>
      <div className="h-px w-full bg-blogDarkGray" />
      <h2 className="text-3xl font-bold text-center">Comentários</h2>
      <Comments />
    </div>
  )
}
