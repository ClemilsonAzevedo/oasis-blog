import { ProfileImage } from '@/images/ProfileImage';
import type { StaticImageData } from 'next/image';


type PosterProps = {
  name: string
  imageUrl: string | StaticImageData
  post: {
    createdDate: string | Date
  }
}

export function Poster({ post, name, imageUrl }: PosterProps) {
  return (
    <div className="flex w-full items-center gap-4">
      <ProfileImage src={imageUrl} />
      <div className="flex flex-col gap-1">
        <span className="font-semibold">{name}</span>
        <p className="flex gap-2 items-center text-sm">
        <time className="text-zinc-500 text-sm">
              {new Date(post.createdDate).toLocaleDateString('pt-BR', {
                dateStyle: 'medium',
              })}
            </time>
          <span>∙</span>
          <span>3 Min</span>
        </p>
      </div>
    </div>
  )
}
