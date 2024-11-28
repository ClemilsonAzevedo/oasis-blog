import { EmailTemplate } from '@/components/NewsletterInput/EmailTemplate'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { email } = body

  if (!email) {
    return NextResponse.json(
      { error: 'O email é obrigatório.' },
      { status: 400 },
    )
  }

  try {
    const data = await resend.emails.send({
      from: 'Clemilson <onboarding@resend.dev>',
      to: [email],
      subject: 'Bem-vindo(a) à nossa Newsletter!',
      react: EmailTemplate({ firstName: 'Usuário' }),
    })

    return NextResponse.json({ success: true, data })
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
