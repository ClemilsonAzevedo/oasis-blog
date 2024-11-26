import Image from 'next/image'

import { AppButton } from './AppButton'

import MailBox from '@/app/assets/MailBox.png'
import OasisLogo from '@/app/assets/OasisLogo.svg'
import { InstagramIcon } from '@/app/assets/icons/InstagramIcon'
import { LinkedinIcon } from '@/app/assets/icons/LinkedinIcon'
import { TwitterIcon } from '@/app/assets/icons/TwitterIcon'

export function AppFooter() {
  return (
    <footer>
      <section className="flex items-center justify-center bg-blogLightGray100 py-14 px-4">
        <div className="flex flex-col items-center justify-center gap-[30px]">
          <Image src={MailBox} alt="Logo Oasis Blog" width={100} height={100} />
          <div className="space-y-[10px] text-center">
            <h3 className="text-2xl md:text-4xl font-bold">
              Inscreva-se para receber últimas atualizações
            </h3>
            <p className="md:text-xl text-blogGray">
              Subscribe to newsletter and never miss the new post every week.
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-5">
            <input
              type="text"
              placeholder="Digite seu e-mail aqui...."
              className="bg-blogWhite rounded-lg md:text-xl py-5 px-6 leading-none placeholder:text-blogGray border-2 border-blogGray"
            />
            <AppButton className="py-5 px-6">Inscrever-se</AppButton>
          </div>
        </div>
      </section>
      <section className="bg-blogLightGray200 py-14 px-24 ">
        <div className="flex flex-col  md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-5">
            <Image src={OasisLogo} alt="Logo Oasis Blog" quality={100} />
            <p className="md:text-lg">
              Conectando você às últimas novidades e tendências. 🌐
            </p>
            <div className="flex items-center gap-[30px]">
              <TwitterIcon />
              <InstagramIcon />
              <LinkedinIcon />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-around items-center md:items-start gap-12 md:gap-4 lg:gap-24">
            <div>
              <h4 className="text-xl font-bold">CATEGORIA</h4>
              <ul className="space-y-5 mt-6 text-lg">
                <li>CSS</li>
                <li>Javascript</li>
                <li>Tailwind</li>
                <li>ReactJS</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold">ENTRE EM CONTACTO</h4>
              <ul className="space-y-5 mt-6 text-lg">
                <li>+55 11 9XXX-XXX-XX</li>
                <li>testeoasis@gmail.com</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold">Siga-nos</h4>
              <ul className="space-y-5 mt-6 text-lg">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="w-full border border-blogGray my-10" />
        <span className="flex items-center justify-center text-blogBlack text-sm">
          © 2024 Oasis Blog
        </span>
      </section>
    </footer>
  )
}
