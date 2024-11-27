type PostTitleProps = {
  title: string
}

export const PostTitle = ({ title }: PostTitleProps) => {
  return <h4 className="text-xl font-bold leading-tight">{title}</h4>
}
