import { EmailTemplate } from '@/components/NewsletterInput/EmailTemplate'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  // Obtém o corpo da requisição (dados do formulário, como e-mail)
  const body = await req.json()
  const { email } = body

  // Valida se o e-mail foi fornecido na requisição
  if (!email) {
    return NextResponse.json(
      { error: 'O email é obrigatório.' }, // Responde com erro caso o e-mail esteja ausente
      { status: 400 },
    )
  }

  try {
    const data = await resend.emails.send({
      from: 'Clemilson <onboarding@resend.dev>', // Define o remetente
      to: [email], // Define o destinatário como o e-mail fornecido
      subject: 'Bem-vindo(a) à nossa Newsletter!', // Define o assunto do e-mail
      react: EmailTemplate({ firstName: 'Usuário' }), // Define o corpo do e-mail utilizando o template react
    })

    // Retorna uma resposta JSON com sucesso e os dados do envio
    return NextResponse.json({ success: true, data })
  } catch (error) {
    // Caso ocorra algum erro durante o envio, ele é capturado e registrado no console
    console.error('Erro ao enviar email:', error)

    // Retorna uma resposta de erro se o envio falhar
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message }, // Mensagem de erro
        { status: 500 }, // Retorna código de erro 500 (Internal Server Error)
      )
    }
  }
}
