import HomeSideImage from '@/app/assets/HomeSideImage.svg'
import { AppButton } from '@/components/AppButton'
import { ArticlesSection } from '@/components/ArticlesSection'
import { CategoryDropdown } from '@/components/CategoryDropdown'
import { MoveToBottomButton } from '@/components/MoveToBottomButton'
import { NewsletterInput } from '@/components/NewsletterInput'
import { getCategoryFromPosts, getPosts } from '@/lib/posts'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Blog() {
  // Obtenção dos posts e categorias
  const posts = await getPosts()
  const categories = await getCategoryFromPosts()

  // Seleciona as primeiras 5 categorias
  const selectedCategories = Array.from(categories).slice(0, 5)

  // Cria os cards de posts filtrados por categoria
  const categoryCards = selectedCategories.map((category) => ({
    category: category ?? '', // Valor default para categoria caso esteja undefined
    posts: posts.filter(
      (post) =>
        (post.category ?? '').toLowerCase() === (category ?? '').toLowerCase(),
    ),
  }))

  return (
    <section className="flex flex-col w-full">
      {/* Seção inicial (Home) */}
      <div
        id="home"
        className="h-[calc(100vh-86px)] flex flex-col justify-start py-5 md:justify-center md:flex-row items-center gap-4 bg-blogLightGray100 relative -z-0 px-5"
      >
        <div className="flex flex-col-reverse items-center justify-center md:justify-around w-full lg:flex-row gap-5">
          <div className="gap-[30px] flex flex-col justify-center md:items-start items-center max-w-[664px]">
            <h1 className="text-4xl lg:text-[64px] text-center md:text-left leading-tight font-bold">
              Olá, Sou o Clemilson Front-end Dev
            </h1>
            <p className="text-blogDarkGray text-left md:text-xl pl-3 border-l-[3px] border-blogBlack">
              Neste blog compartilho dicas e truques, frameworks, projetos, etc.
              Certifique-se de inscrever-se para receber atualizações recentes.
            </p>
            <NewsletterInput />
          </div>
          <Image
            src={HomeSideImage}
            alt="User Preview WebSites in hand"
            quality={100}
            className="lg:w-full w-1/2 max-w-[470px] max-h-[387px] transform transition duration-300 ease-in-out opacity-0 translate-y-5 animate-fadeIn"
          />
        </div>
        <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 cursor-pointer">
          <MoveToBottomButton>
            <ChevronDown />
          </MoveToBottomButton>
        </div>
      </div>

      {/* Renderiza o Dropdown de Categorias */}
      <CategoryDropdown cards={categoryCards} />

      {/* Seção de artigos em destaque */}
      <div className="flex flex-col gap-20 w-full max-w-full px-12 py-10">
        <ArticlesSection
          headerProps={{
            sectionTitle: 'Artigos em Destaque',
            sectionRedirectLink: '/articles',
          }}
          post={posts}
        />

        {/* Renderiza os artigos por categorias */}
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

        {/* Link para mais artigos */}
        <Link href="/articles" className="mx-auto w-[166px]">
          <AppButton className="px-6 ">Mais Artigos</AppButton>
        </Link>
      </div>
    </section>
  )
}
