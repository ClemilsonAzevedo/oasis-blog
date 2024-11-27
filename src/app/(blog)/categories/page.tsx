// 'use client'

import { SectionPost } from '@/components/ArticlesSection/SectionPost'
import { getPostByCategory } from '@/lib/posts'

export default async function Categories({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const category = searchParams.category.toLowerCase() || 'default'

  const posts = await getPostByCategory(category)

  return (
    <div>
      <h1>Posts de {category}</h1>
      {posts.map((post) => (
        <SectionPost
          key={post.postTitle}
          slug={post.slug}
          postImageUrl={post.postImageUrl}
          postTitle={post.postTitle}
          publishDate={post.publishDate}
          poster={post.poster}
        />
      ))}
    </div>
  )
}
