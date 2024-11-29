import type { PostProps } from '@/components/ArticlesSection/SectionPost'
import { readdir } from 'node:fs/promises'
import path from 'node:path'

const postsPath = path.join(process.cwd(), 'src/app/(blog)/(posts)')

// Função para obter todos os posts
export async function getPosts(): Promise<PostProps[]> {
  // Lê os diretórios dentro de '/src/app/(blog)/(posts)' para obter os slugs dos posts
  const slugs = (await readdir(postsPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isDirectory(),
  ) // Filtra apenas os diretórios (posts)

  // Mapeia os slugs para importar o conteúdo de cada post
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      // Importa os dados de metadata de cada post (arquivo .mdx)
      const { metadata } = await import(`@/app/(blog)/(posts)/${name}/page.mdx`)
      return { slug: name, ...metadata } // Retorna o post com o slug e os dados de metadata
    }),
  )

  // Ordena os posts pela data de publicação em ordem decrescente
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate))

  return posts // Retorna a lista de posts ordenada
}

// export async function getPostByCategory(category: string) {
//   // Filtra os posts pela categoria especificada
//   return ()
// }

// Função para obter todas as categorias dos posts
export async function getCategoryFromPosts() {
  // Mapeia os posts e retorna um Set (conjunto) de categorias únicas
  return new Set((await getPosts()).map((post) => post.category))
}

export function filterPostByWord(slug: string, posts: PostProps[]) {
  // Filtra os posts cujo título contém a palavra-chave (slug)
  return posts.filter((post) => post.postTitle.toLowerCase().includes(slug))
}
