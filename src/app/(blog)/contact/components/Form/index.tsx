import { AppButton } from '@/components/AppButton'
import { submitEmailMessage } from '../../utils/submitEmailMessage'
import { Input } from './Input'

// Formulário de envio de mensagem por email
export function Form() {
  return (
    <form
      onSubmit={submitEmailMessage}
      className="bg-white shadow-lg max-w-[768px] -mt-20 mx-auto rounded-2xl flex flex-col items-center justify-center gap-5 p-14"
    >
      <div className="flex flex-wrap justify-center gap-5">
        {/* Campos de nome e email */}
        <Input label="Nome" type="text" />
        <Input label="Email" type="email" />
      </div>
      <div>
        <div className="flex flex-wrap justify-center gap-5">
          {/* Campos de celular e assunto */}
          <Input label="Celular" type="number" />
          <Input label="Assunto" type="text" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        {/* Campo para mensagem */}
        <label htmlFor="message" className="font-semibold leading-7">
          Mensagem
        </label>
        <textarea
          required
          name="message"
          id="message"
          className="resize-none p-2 border border-blogGray focus:outline-blogYellow rounded-lg text-sm h-40 w-full"
        />
      </div>
      {/* Botão de envio */}
      <AppButton
        type="submit"
        className="text-[15px] font-bold py-5 px-6 rounded mt-6"
      >
        Enviar mensagem
      </AppButton>
    </form>
  )
}
