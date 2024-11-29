import HomeCircle from '@/app/assets/icons/HomeCircle.svg'
import MailCircle from '@/app/assets/icons/MailCircle.svg'
import PhoneCircle from '@/app/assets/icons/PhoneCircle.svg'
import { AppButton } from '@/components/AppButton'
import 'leaflet/dist/leaflet.css'
import Image from 'next/image'
import { MapComponent } from './components/map'

export default function Contact() {
  return (
    <section className="py-32">
      <div>
        <div className="text-center max-w-[442px] mx-auto">
          <h2 className="text-5xl leading-[64px] font-bold text-[#333333]">
            Get in Touch
          </h2>
          <p className="text-[#999999] leading-[150%]">
            Contact us to publish your content and show ads to our website and
            get a good reach.
          </p>
        </div>
        <div className="flex flex-wrap justify-center justify-center items-center gap-5 w-full">
          <div className="w-[373px] h-[244px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5">
            <Image src={HomeCircle} alt="Home icon" width={70} height={70} />
            <span className="text-blogYellow text-xl font-bold">Office</span>
            <p className="font-medium leading-7 text-[#7a7a7a]">
              Victoria Street, London, UK
            </p>
          </div>
          <div className="w-[373px] h-[244px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5">
            <Image src={MailCircle} alt="Mail icon" width={70} height={70} />
            <span className="text-blogYellow text-xl font-bold">Email</span>
            <p className="font-medium leading-7 text-[#7a7a7a]">
              hello@zarrin.com
            </p>
          </div>
          <div className="w-[373px] h-[244px] bg-white rounded-2xl flex flex-col items-center justify-center gap-5">
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
          <MapComponent />
        </div>
        <form
          action=""
          className="bg-white shadow-lg max-w-[768px] -mt-20 mx-auto rounded-2xl flex flex-col items-center justify-center gap-5 p-14"
        >
          <div className="flex flex-wrap justify-center gap-5">
            <div className="flex flex-col gap-5 w-[312px]">
              <label htmlFor="name" className="font-semibold leading-7">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="border border-blogGray focus:border-blogYellow rounded-lg text-sm h-12 py-1 w-full"
              />
            </div>

            <div className="flex flex-col gap-5 w-[312px]">
              <label htmlFor="email" className="font-semibold leading-7">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-blogGray focus:border-blogYellow rounded-lg text-sm h-12 py-1 w-full"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-wrap justify-center gap-5">
              <div className="flex flex-col gap-5 w-[312px]">
                <label htmlFor="cell" className="font-semibold leading-7">
                  Celular
                </label>
                <input
                  type="text"
                  id="cell"
                  className="border border-blogGray focus:border-blogYellow rounded-lg text-sm h-12 py-1 w-full"
                />
              </div>

              <div className="flex flex-col gap-5 w-[312px]">
                <label htmlFor="assunto" className="font-semibold leading-7">
                  Assunto
                </label>
                <input
                  type="text"
                  id="assunto"
                  className="border border-blogGray focus:border-blogYellow rounded-lg text-sm h-12 py-1 w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="message" className="font-semibold leading-7">
              Mensagem
            </label>
            <textarea
              name=""
              id=""
              className="resize-none border border-blogGray focus:border-blogYellow rounded-lg text-sm h-40 py-1 w-full"
            />
          </div>

          <AppButton className="text-[15px] font-bold py-5 px-6 rounded mt-6">
            Enviar mensagem
          </AppButton>
        </form>
      </div>
    </section>
  )
}
