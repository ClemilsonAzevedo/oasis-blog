'use client'

// *Podia fazer algo mais complexo para o texto do Email, mas optei por deixar assim mais simples, para não perder muito tempo no estilo, fui mais pela funcionalidade

import { useState } from 'react'
import { AppButton } from '../AppButton'

export function NewsletterInput() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  // Verifica se o formulário pode ser enviado
  const isSubmitDisabled =
    !email || email.trim() === '' || status === 'Enviando...'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Enviando...')

    try {
      // Envia o formulário para a API interna do Next
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await response.json()

      if (response.ok) {
        setStatus(' Enviado!')
        setEmail('')
      } else {
        setStatus(`Erro: ${data.error}`)
      }
    } catch (error) {
      console.error(error)
      setStatus('Tente novamente.')
    }
  }
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[645px]">
      <div className="flex items-center justify-center gap-5 md:w-full">
        <input
          type="email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail aqui...."
          className="py-5 px-6 leading-none bg-blogWhite flex-1 rounded-lg md:text-xl placeholder:text-blogGray border border-blogGray md:flex-1"
        />
        <AppButton type="submit" className="px-5" disabled={isSubmitDisabled}>
          {status || 'Inscrever-se'}
        </AppButton>
      </div>
    </form>
  )
}
