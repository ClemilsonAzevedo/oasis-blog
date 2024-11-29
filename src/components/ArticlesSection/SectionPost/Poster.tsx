import { ProfileImage } from '@/app/assets/ProfileImage'
import type { StaticImageData } from 'next/image'

type PosterProps = {
  name: string
  imageUrl: string | StaticImageData
  post: {
    publishDate: string | Date
  }
}

// Função para formatar a diferença de tempo entre a data de publicação e o momento atual
function formatTimeDifference(publishDate: Date): string {
  const now = new Date() // Obtém a data e hora atual
  const diffInSeconds = Math.floor(
    (now.getTime() - publishDate.getTime()) / 1000, // Calcula a diferença em segundos
  )

  // Retorna as diferenças de tempo formatadas de acordo com o valor
  if (diffInSeconds < 60) return 'Agora mesmo' // Se for menos de 1 minuto
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min` // Se for menos de 1 hora
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} h` // Se for menos de 1 dia
  if (diffInSeconds < 7 * 86400) return `${Math.floor(diffInSeconds / 86400)} d` // Se for menos de 1 semana
  if (diffInSeconds < 30 * 86400)
    return `${Math.floor(diffInSeconds / (7 * 86400))} S` // Se for menos de 1 mês
  if (diffInSeconds < 365 * 86400)
    return `${Math.floor(diffInSeconds / (30 * 86400))} M` // Se for menos de 1 ano

  return `${Math.floor(diffInSeconds / (365 * 86400))} A` // Se for mais de 1 ano
}

export function Poster({ post, name, imageUrl }: PosterProps) {
  return (
    <div className="flex w-full items-center gap-4">
      {/* Container do autor e dados do post */}
      <ProfileImage src={imageUrl} /> {/* Exibe a imagem de perfil do autor */}
      <div className="flex flex-col gap-1">
        {/* Exibe o nome do autor e a data de publicação */}
        <span className="font-semibold">{name}</span>
        <p className="flex gap-2 items-center text-sm">
          {/* Formatação da data de publicação e tempo passado */}
          <time className="text-zinc-500 text-sm">
            {new Date(post.publishDate).toLocaleDateString('pt-BR', {
              dateStyle: 'medium', // Exibe a data no formato médio
            })}
          </time>
          <span>∙</span>
          <span className="truncate">
            {formatTimeDifference(new Date(post.publishDate))}
            {/* Exibe a diferença de tempo */}
          </span>
        </p>
      </div>
    </div>
  )
}
