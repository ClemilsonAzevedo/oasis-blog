import Image, { type StaticImageData } from 'next/image'

type ProfileImageProps = {
  src: string | StaticImageData
}

export const ProfileImage = ({ src }: ProfileImageProps) => {
  return (
    <Image
      src={src}
      alt="User Profile Image"
      width={57}
      height={57}
      quality={100}
      style={{ objectFit: 'cover', borderRadius: '100%' }}
      loading="lazy"
    />
  )
}
