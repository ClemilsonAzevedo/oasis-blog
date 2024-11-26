import HomeSideImage from '@/assets/HomeSideImage.svg'
import { ChevronDownIcon } from '@/assets/icons/ChevronDown'
import Image from 'next/image'
import { AppButton } from './components/AppButton'
import { CategoryDropdown } from './components/CategoryDropdown'

export default function Home() {
  return (
    <section>
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
      <div className="">
        <CategoryDropdown />
      </div>
    </section>
  )
}
