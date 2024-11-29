'use client'

import type { FormEvent } from 'react'

export async function submitEmailMessage(event: FormEvent) {
  event.preventDefault()

  const formData = new FormData(event.target as HTMLFormElement)
  const data = Object.fromEntries(formData.entries())

  try {
    const response = await fetch('/api/contact-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      alert('Mensagem enviada com sucesso!')
    } else {
      alert('Erro ao enviar a mensagem.')
    }
  } catch (error) {
    console.error(error)
    alert('Erro ao enviar a mensagem.')
  }
}
