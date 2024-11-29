import { ArticlesSection } from '@/components/ArticlesSection'
import { getCategoryFromPosts, getPosts } from '@/lib/posts'
import Link from 'next/link'

export default async function Articles() {
  const posts = await getPosts()
  const categories = await getCategoryFromPosts()

  // Cria os cards com posts filtrados por categoria
  const categoryCards = Array.from(categories).map((category) => ({
    category: category ?? '',
    posts: posts.filter(
      (post) =>
        post?.category?.toLowerCase() === (category ?? '').toLowerCase(),
    ),
  }))

  return (
    <div className="py-12 px-5">
      <header className="flex flex-col items-center justify-center text-center w-full max-w-[756px] mx-auto gap-2">
        <span className="font-bold leading-[150%] text-[#666666]">
          NOSSOS BLOGS
        </span>
        <div className="space-y-[18px]">
          <h2 className="text-5xl leading-[64px] font-bold text-[#333333]">
            Encontre todos os nossos blogs vendo todas as categorias
          </h2>
          <p className="leading-[150%] text-[#666666]">
            nossos blogs são escritos a partir de muitas pesquisas e escritores
            conhecidos, para que possamos fornecer a você os melhores blogs e
            artigos para você lê-los o tempo todo
          </p>
        </div>
      </header>

      {posts.length === 0 && (
        <div className="text-5xl text-center py-10 flex flex-col items-center justify-center gap-5">
          <h1 className="text-5xl text-center">Nenhum post encontrado</h1>
          <Link
            href={'/'}
            className="text-lg bg-blogYellow py-2 px-4 rounded-lg hover:brightness-75 text-blogWhite transition"
          >
            Voltar para a <strong>home</strong>
          </Link>
        </div>
      )}

      <div className="flex flex-col  md:justify-start items-start justify-start gap-20 py-10 w-full">
        {categoryCards.map((card) => (
          <ArticlesSection
            key={card.category}
            headerProps={{
              sectionTitle: card.category ?? '',
              sectionRedirectLink: `/articles/${card.category}?slug=${card.category?.toLowerCase()}`,
            }}
            post={card.posts}
          />
        ))}
      </div>
    </div>
  )
}
