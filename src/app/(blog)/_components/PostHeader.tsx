import Image from 'next/image'

type PostHeaderProps = {
  title: string
  category: string
  publishDate: Date
  poster: {
    name: string
    imageUrl: string
  }
}

export function PostHeader({
  title,
  category,
  publishDate,
  poster,
}: PostHeaderProps) {
  return (
    <div className="space-y-5">
      <div className="space-y-4">
        <div>
          <span className="px-3 py-[6px] rounded-[6px] bg-blogYellow text-blogWhite text-sm font-medium leading-5">
            {category}
          </span>
        </div>
        <h1>{title}</h1>
      </div>
      <div className="flex items-center gap-1 not-prose text-zinc-500 text-sm">
        <div className="flex items-center gap-2">
          <Image
            src={poster.imageUrl}
            width={28}
            height={28}
            alt="User Profile Image"
            className="rounded-full"
          />
          <div className="flex items-center gap-6">
            <h6>{poster.name}</h6>
            <time
              style={{
                fontFamily: 'Work Sans, sans-serif',
                fontSize: '14px',
              }}
            >
              {new Date(`${publishDate}`).toLocaleDateString('pt-BR', {
                dateStyle: 'medium',
              })}
            </time>
          </div>
        </div>
      </div>
    </div>
  )
}
