import anyBookSearchedInPexels from '@/app/assets/algumLivroDoPexels.jpg'
import type { StaticImageData } from 'next/image'
import Link from 'next/link'
import { PostImage } from './PostImage'
import { PostTitle } from './PostTitle'
import { Poster } from './Poster'

export type PostProps = {
  postImageUrl: StaticImageData | string
  postTitle: string
  slug?: string
  publishDate: Date
  poster: {
    name: string
    imageUrl: string
  }
}

export function SectionPost({
  postImageUrl,
  postTitle,
  publishDate,
  slug,
  poster,
}: PostProps) {
  return (
    <Link href={`/${slug}`}>
      <div className="flex flex-col items-start justify-between p-5 m-px w-[300px] h-[425px] hover:shadow rounded-xl focus:shadow-md">
        <div className="flex flex-col items-start gap-6">
          <PostImage postImageUrl={postImageUrl ?? anyBookSearchedInPexels} />
          <PostTitle title={postTitle} />
        </div>
        <Poster
          imageUrl={poster?.imageUrl}
          name={poster?.name}
          post={{ publishDate }}
        />
      </div>
    </Link>
  )
}
