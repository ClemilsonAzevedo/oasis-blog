import { SectionHeader, type SectionHeaderProps } from './SectionHeader'
import { type PostProps, SectionPost } from './SectionPost'

interface ArticlesSectionProps extends SectionHeaderProps {
  post: PostProps[]
}

export function ArticlesSection({
  headerProps: { sectionTitle, sectionRedirectLink },
  post,
}: ArticlesSectionProps) {
  return (
    <article className="w-full">
      <SectionHeader
        headerProps={{
          sectionTitle,
          sectionRedirectLink,
        }}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center w-full flex-wrap gap-9">
        {post?.map((post) => (
          <SectionPost
            key={post.postTitle}
            slug={post.slug}
            postImageUrl={post.postImageUrl}
            postTitle={post.postTitle}
            publishDate={post.publishDate}
            poster={post.poster}
          />
        ))}
      </div>
    </article>
  )
}
