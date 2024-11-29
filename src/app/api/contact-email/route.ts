import { type NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()

  if (req.method === 'POST') {
    const { name, email, cell, assunto, message } = body

    try {
      await resend.emails.send({
        from: email,
        to: 'Clemilson <onboarding@resend.dev>',
        subject: assunto || 'Nova mensagem do formulário',
        html: `
          <h1>Nova mensagem do formulário</h1>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Celular:</strong> ${cell}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message}</p>
        `,
      })

      return NextResponse.json({ success: true })
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      if (error instanceof Error) {
        return NextResponse.json(
          { success: false, error: error.message },
          { status: 500 },
        )
      }
    }
  }
}
