import { AppButton } from '@/components/AppButton'
import Image from 'next/image'
import Link from 'next/link'
import notFoundNumber from './assets/404.svg'

export default function NotFound() {
  return (
    <div className="w-full py-28 px-6">
      <div className="max-w-[816px] min-h-[472px] mx-auto bg-blogYellow flex flex-col items-center justify-center gap-9 rounded-2xl">
        <Image src={notFoundNumber} alt="Numero 404" width={280} height={112} />
        <p className="text-2xl text-blogWhite text-center mt-6 raleway">
          Desculpe! <br /> O link está quebrado, tente atualizar ou vá para o
          Início
        </p>
        <Link href="/">
          <AppButton className="bg-blogWhite text-blogBlack py-4 px-6">
            Vá para Início
          </AppButton>
        </Link>
      </div>
    </div>
  )
}
