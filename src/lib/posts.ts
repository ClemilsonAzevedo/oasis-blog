import type { PostProps } from '@/components/ArticlesSection/SectionPost'
import { readdir } from 'node:fs/promises'

export async function getPosts(): Promise<PostProps[]> {
  const slugs = (
    await readdir('./src/app/(blog)/(posts)', { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory())

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`@/app/(blog)/(posts)/${name}/page.mdx`)
      return { slug: name, ...metadata }
    }),
  )

  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate))

  return posts
}

export async function getPostByCategory(category: string) {
  return (await getPosts()).filter((post) => post.category === category)
}

export async function getCategoryFromPosts() {
  return new Set((await getPosts()).map((post) => post.category))
}

export function filterPostByWord(slug: string, posts: PostProps[]) {
  return posts.filter((post) => post.postTitle.toLowerCase().includes(slug))
}
