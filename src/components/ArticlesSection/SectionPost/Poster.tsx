import { ProfileImage } from '@/app/assets/ProfileImage'
import type { StaticImageData } from 'next/image'

type PosterProps = {
  name: string
  imageUrl: string | StaticImageData
  post: {
    publishDate: string | Date
  }
}

// Função para formatar a diferença de tempo, quando tiver mais de um ano, mostrar anos, o mesmos com semanas, dias, meses e tudo mais.
function formatTimeDifference(publishDate: Date): string {
  const now = new Date()
  const diffInSeconds = Math.floor(
    (now.getTime() - publishDate.getTime()) / 1000,
  )

  if (diffInSeconds < 60) return 'Agora mesmo'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} h`
  if (diffInSeconds < 7 * 86400) return `${Math.floor(diffInSeconds / 86400)} d`
  if (diffInSeconds < 30 * 86400)
    return `${Math.floor(diffInSeconds / (7 * 86400))} S`
  if (diffInSeconds < 365 * 86400)
    return `${Math.floor(diffInSeconds / (30 * 86400))} M`

  return `${Math.floor(diffInSeconds / (365 * 86400))} A`
}

export function Poster({ post, name, imageUrl }: PosterProps) {
  return (
    <div className="flex w-full items-center gap-4">
      <ProfileImage src={imageUrl} />
      <div className="flex flex-col gap-1">
        <span className="font-semibold">{name}</span>
        <p className="flex gap-2 items-center text-sm">
          <time className="text-zinc-500 text-sm">
            {new Date(post.publishDate).toLocaleDateString('pt-BR', {
              dateStyle: 'medium',
            })}
          </time>
          <span>∙</span>
          <span className="truncate">
            {formatTimeDifference(new Date(post.publishDate))}
          </span>
        </p>
      </div>
    </div>
  )
}
