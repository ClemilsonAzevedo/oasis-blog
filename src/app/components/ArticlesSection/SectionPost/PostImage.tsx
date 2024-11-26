import Image, { type StaticImageData } from 'next/image'

type PostImageProps = {
  postImageUrl: string | StaticImageData
}

export const PostImage = ({ postImageUrl }: PostImageProps) => {
  return (
    <div className="w-full h-[198px] rounded-xl">
      <Image
        src={postImageUrl}
        width={260}
        height={196}
        className="w-full rounded-xl"
        alt="WebSite Image Book"
      />
    </div>
  )
}
