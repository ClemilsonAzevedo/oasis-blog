import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from 'next/font/google'

import { AppFooter } from '@/components/AppFooter'
import { AppHeader } from '@/components/AppHeader'
import './globals.css'

import { SearchModal } from '@/components/SearchModal'
import { SearchProvider } from '@/context/SearchContext'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
})

export const metadata: Metadata = {
  title: 'Oasis Blog | Desenvolvimento Web com Next.js e React',
  description:
    'Descubra artigos exclusivos sobre desenvolvimento web, incluindo Next.js, React, JavaScript, SEO, otimização de performance e práticas modernas para criar aplicativos rápidos e escaláveis. Aprenda a dominar tecnologias de ponta para o desenvolvimento web.',
  keywords: [
    'desenvolvimento web',
    'Next.js',
    'React',
    'JavaScript',
    'SEO',
    'otimização de performance',
    'aplicativos modernos',
    'web design',
    'frontend',
    'boas práticas de desenvolvimento',
    'tecnologias web',
    'tutorial Next.js',
    'framework React',
    'escalabilidade',
    'web apps',
  ], // Palavras-chave para o SEO
  robots: 'index, follow', // Instruções para o robô de busca
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-blogLightGray200">
      <body
        className={`${plusJakartaSans.className} antialiased grid grid-rows-[86px_auto_auto] max-w-[1440px] mx-auto selection:bg-blogYellow/30`}
      >
        <SearchProvider>
          {/* Provedor de contexto para a busca */}
          <AppHeader /> {/* Cabeçalho da aplicação */}
          <SearchModal /> {/* Modal de busca */}
          {children} {/* Conteúdo da página */}
          <AppFooter /> {/* Rodapé da aplicação */}
        </SearchProvider>
      </body>
    </html>
  )
}
