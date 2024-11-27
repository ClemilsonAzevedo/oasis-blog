import VueJsFramework from '@/app/assets/FrameworkVueJs.svg'
import HomeSideImage from '@/app/assets/HomeSideImage.svg'
import { ChevronDownIcon } from '@/app/assets/icons/ChevronDown'
import { AppButton } from '@/components/AppButton'
import { ArticlesSection } from '@/components/ArticlesSection'
import { CategoryDropdown } from '@/components/CategoryDropdown'
import type { dropdownCardProps } from '@/components/CategoryDropdown/DropdownCard'
import { getPosts } from '@/lib/posts'
import Image from 'next/image'

// const fakePosts: PostProps[] = [
//   {
//     postImageUrl: AnyBookImage,
//     category: 'tecnologia',
//     postTitle: 'Explorando o Futuro da Inteligência Artificial',
//     publishDate: new Date('2024-11-20T14:35:00'),
//     poster: {
//       name: 'Clemilson Azevedo',
//       imageUrl: 'https://github.com/clemilsonazevedo.png',
//     },
//   },
//   {
//     postImageUrl: AnyBookImage,
//     category: 'tecnologia',
//     postTitle: 'Como Desenvolver Aplicativos Mobile com React Native',
//     publishDate: new Date('2024-11-18T09:15:00'),
//     poster: {
//       name: 'Clemilson Azevedo',
//       imageUrl: 'https://github.com/clemilsonazevedo.png',
//     },
//   },
//   {
//     postImageUrl: AnyBookImage,
//     category: 'tecnologia',
//     postTitle: 'Design Patterns no Desenvolvimento Frontend',
//     publishDate: new Date('2024-11-22T16:45:00'),
//     poster: {
//       name: 'Clemilson Azevedo',
//       imageUrl: 'https://github.com/clemilsonazevedo.png',
//     },
//   },
//   {
//     postImageUrl: AnyBookImage,
//     category: 'tecnologia',
//     postTitle: 'Melhores Práticas para API REST',
//     publishDate: new Date('2024-11-15T12:30:00'),
//     poster: {
//       name: 'Clemilson Azevedo',
//       imageUrl: 'https://github.com/clemilsonazevedo.png',
//     },
//   },
// ]
export const fakeCategories: dropdownCardProps[] = [
  {
    categoryImageUrl: VueJsFramework,
    category: 'Tecnologia',
  },
  {
    categoryImageUrl: VueJsFramework,
    category: 'Moda',
  },
  {
    categoryImageUrl: VueJsFramework,
    category: 'Esportes',
  },
  {
    categoryImageUrl: VueJsFramework,
    category: 'Gastronomia',
  },
]

export default async function Blog() {
  const posts = await getPosts()

  return (
    <section className="flex flex-col w-full">
      <div
        id="home"
        className="h-screen flex flex-col justify-center md:justify-center md:flex-row items-center gap-4 bg-blogLightGray100 relative -z-0 p-5"
      >
        <div className="flex flex-col-reverse items-center justify-center md:justify-around w-full lg:flex-row gap-5">
          <div className="gap-[30px] flex flex-col justify-center md:items-start items-center max-w-[664px]">
            <h1 className="text-4xl lg:text-[64px] text-center md:text-left leading-tight font-bold">
              Olá, Sou o Clemilson Front end dev
            </h1>
            <p className="text-blogDarkGray text-left md:text-xl pl-3 border-l-[3px] border-blogBlack">
              Neste blog compartilho dicas e truques, frameworks, projetos, etc.
              Certifique-se de inscrever-se para receber atualizações recentes
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
            className="lg:w-full w-1/2 max-w-[470px] max-h-[387px]"
          />
        </div>

        <button
          type="button"
          className="absolute left-1/2 bottom-10 md:bottom-5"
        >
          <ChevronDownIcon />
        </button>
      </div>

      {/* Category Zone */}
      <CategoryDropdown cards={fakeCategories} />

      {/* articles Zone */}
      <div className="flex flex-col gap-20 w-full max-w-full px-12 py-10">
        <ArticlesSection
          headerProps={{
            sectionTitle: 'Artigos em Destaque',
            sectionRedirectLink: '/articles',
          }}
          post={posts}
        />

        {/* <ArticlesSection
          headerProps={{
            sectionTitle: 'CSS',
            sectionRedirectLink: '/articles',
          }}
          post={fakePosts}
        />

        <ArticlesSection
          headerProps={{
            sectionTitle: 'Javascript',
            sectionRedirectLink: '/articles',
          }}
          post={fakePosts}
        />

        <ArticlesSection
          headerProps={{
            sectionTitle: 'React JS',
            sectionRedirectLink: '/articles',
          }}
          post={fakePosts}
        /> */}

        <AppButton className="px-6 mx-auto w-[166px]">Mais Artigos</AppButton>
      </div>

      {/* Category Zone
      <CategoryDropdown /> */}
    </section>
  )
}
