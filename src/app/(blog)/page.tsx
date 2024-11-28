import HomeSideImage from '@/app/assets/HomeSideImage.svg'
import { AppButton } from '@/components/AppButton'
import { ArticlesSection } from '@/components/ArticlesSection'
import { CategoryDropdown } from '@/components/CategoryDropdown'
import { MoveToBottomButton } from '@/components/MoveToBottomButton'
import { getCategoryFromPosts, getPosts } from '@/lib/posts'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// todo: Mostrar os dados dos posts, categorias
// todo: Resolver bugs
// todo: Mostrar minutos nos posts quando tem menos te 24h

export default async function Blog() {
  const posts = await getPosts()
  const categories = await getCategoryFromPosts()

  // Converte o Set em um array antes de usar slice
  const selectedCategories = Array.from(categories).slice(0, 3)

  // Cria os cards com posts filtrados por categoria
  const categoryCards = selectedCategories.map((category) => ({
    category,
    categoryImageUrl: `/images/${category}.png`,
    posts: posts.filter(
      (post) => post.category.toLowerCase() === category.toLowerCase(),
    ),
  }))

  return (
    <section className="flex flex-col w-full">
      {/* Home Section */}
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
            <div className="flex items-center justify-center gap-5 md:w-full">
              <input
                type="text"
                placeholder="Digite seu e-mail aqui...."
                className="py-5 px-6 leading-none bg-blogWhite rounded-lg md:text-xl placeholder:text-blogGray border border-blogGray md:flex-1"
              />
              <AppButton className="px-5">Inscrever-se</AppButton>
            </div>
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

      {/* Category Dropdown */}
      <CategoryDropdown cards={categoryCards} />

      {/* Articles Section */}
      <div className="flex flex-col gap-20 w-full max-w-full px-12 py-10">
        <ArticlesSection
          headerProps={{
            sectionTitle: 'Artigos em Destaque',
            sectionRedirectLink: '/articles/recent',
          }}
          post={posts}
        />

        {/* Renderização das Categorias */}
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

        <Link href="/articles" className="mx-auto w-[166px]">
          <AppButton className="px-6 ">Mais Artigos</AppButton>
        </Link>
      </div>
    </section>
  )
}
