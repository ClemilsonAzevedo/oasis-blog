'use client'

import dynamic from 'next/dynamic'

import HomeCircle from '@/app/assets/icons/HomeCircle.svg'
import MailCircle from '@/app/assets/icons/MailCircle.svg'
import PhoneCircle from '@/app/assets/icons/PhoneCircle.svg'
import 'leaflet/dist/leaflet.css'
import Image from 'next/image'
import { Form } from './components/Form'

// Eu fiz isso aqui no mapa porque ele estava dando erro na renderização do lado do servidor
// Correção da importação dinâmica com o tipo correto
const MapComponent = dynamic(
  () => import('./components/map').then((mod) => mod.MapComponent),
  {
    ssr: false, // Desativa a renderização do lado do servidor para o componente do mapa
  },
)

export default function Contact() {
  return (
    <section className="py-32 space-y-16">
      <div className="space-y-10">
        <div className="text-center max-w-[442px] mx-auto">
          <h2 className="text-5xl leading-[64px] font-bold text-[#333333]">
            Get in Touch
          </h2>
          <p className="text-[#999999] leading-[150%]">
            Contact us to publish your content and show ads to our website and
            get a good reach.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5 w-full">
          {/* Cartões de informações de contato */}
          <div className="shadow w-[373px] h-[244px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5">
            <Image src={HomeCircle} alt="Home icon" width={70} height={70} />
            <span className="text-blogYellow text-xl font-bold">Office</span>
            <p className="font-medium leading-7 text-[#7a7a7a]">
              Victoria Street, London, UK
            </p>
          </div>
          <div className="shadow w-[373px] h-[244px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5">
            <Image src={MailCircle} alt="Mail icon" width={70} height={70} />
            <span className="text-blogYellow text-xl font-bold">Email</span>
            <p className="font-medium leading-7 text-[#7a7a7a]">
              hello@zarrin.com
            </p>
          </div>
          <div className="shadow w-[373px] h-[244px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5">
            <Image src={PhoneCircle} alt="Phone icon" width={70} height={70} />
            <span className="text-blogYellow text-xl font-bold">Phone</span>
            <p className="font-medium leading-7 text-[#7a7a7a]">
              (001) 2342 3451
            </p>
          </div>
        </div>
      </div>

      <div className="relative -z-0 px-6">
        <div className="relative -z-10">
          {/* Mapa dinâmico */}
          <MapComponent />
        </div>
        {/* Formulário de contato */}
        <Form />
      </div>
    </section>
  )
}
