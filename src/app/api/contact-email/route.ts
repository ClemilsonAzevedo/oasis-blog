import { type NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Inicializa a instância do Resend com a chave API
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  // Obtém o corpo da requisição (dados do formulário)
  const body = await req.json()

  // Verifica se o método da requisição é POST
  if (req.method === 'POST') {
    const { name, email, cell, assunto, message } = body

    try {
      // Envia o e-mail utilizando o serviço Resend
      await resend.emails.send({
        from: email, // Remetente do e-mail
        to: 'Clemilson <onboarding@resend.dev>', // Destinatário fixo
        subject: assunto || 'Nova mensagem do formulário', // Assunto do e-mail (padrão se não fornecido)
        html: `
          <h1>Nova mensagem do formulário</h1>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Celular:</strong> ${cell}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message}</p>
        `,
      })

      // Retorna resposta de sucesso
      return NextResponse.json({ success: true })
    } catch (error) {
      // Captura e loga erros ao tentar enviar o e-mail
      console.error('Erro ao enviar email:', error)

      // Retorna erro se houver falha na tentativa de envio
      if (error instanceof Error) {
        return NextResponse.json(
          { success: false, error: error.message },
          { status: 500 }, // Código de erro 500 para falha no servidor
        )
      }
    }
  }
}
