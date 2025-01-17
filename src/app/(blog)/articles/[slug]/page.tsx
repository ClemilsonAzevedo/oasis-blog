import { SectionPost } from '@/components/ArticlesSection/SectionPost'
import { filterPostByWord, getPosts } from '@/lib/posts'
import Link from 'next/link'

// Página para exibir artigos filtrados por palavra-chave
export default async function Article({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const slug = searchParams.slug || 'default'
  const posts = await filterPostByWord(slug, await getPosts())

  return (
    <div className="py-12 px-5">
      <header className="flex flex-col items-center justify-center text-center w-full max-w-[756px] mx-auto gap-2">
        <span className="font-bold leading-[150%] text-[#666666]">
          NOSSOS BLOGS
        </span>
        <div className="space-y-[18px]">
          {/* Exibe o título e descrição da página com a palavra-chave */}
          <h2 className="text-5xl leading-[64px] font-bold text-[#333333]">
            Encontre todos os nossos blogs aqui, para a palavra “{slug}”
          </h2>
          <p className="leading-[150%] text-[#666666]">
            nossos blogs são escritos a partir de muitas pesquisas e escritores
            conhecidos, para que possamos fornecer a você os melhores blogs e
            artigos para você lê-los o tempo todo
          </p>
        </div>
      </header>

      {/* Exibe mensagem caso nenhum post seja encontrado */}
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

      {/* Exibe a lista de posts encontrados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex-wrap gap-4 justify-center items-start py-16">
        {posts.map((post) => (
          <SectionPost
            key={post.slug}
            slug={post.slug}
            postImageUrl={post.postImageUrl}
            postTitle={post.postTitle}
            publishDate={post.publishDate}
            poster={post.poster}
          />
        ))}
      </div>
    </div>
  )
}
