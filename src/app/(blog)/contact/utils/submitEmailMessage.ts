'use client'

import type { FormEvent } from 'react'

// Função para enviar mensagem por email
export async function submitEmailMessage(event: FormEvent) {
  event.preventDefault() // Evita o comportamento padrão de envio do formulário (Não recarregar página)

  // Coleta os dados do formulário
  const formData = new FormData(event.target as HTMLFormElement)
  const data = Object.fromEntries(formData.entries()) // Converte os dados para um objeto

  try {
    // Envia os dados para a API de contato por email
    const response = await fetch('/api/contact-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Envia os dados como JSON
    })

    // Verifica se a resposta foi bem-sucedida
    if (response.ok) {
      alert('Mensagem enviada com sucesso!')
    } else {
      alert('Erro ao enviar a mensagem.')
    }
  } catch (error) {
    // Captura qualquer erro na requisição
    console.error(error)
    alert('Erro ao enviar a mensagem.')
  }
}
