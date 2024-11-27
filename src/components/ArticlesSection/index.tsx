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
    <article>
      <SectionHeader
        headerProps={{
          sectionTitle,
          sectionRedirectLink,
        }}
      />
      <div className="flex flex-col md:flex-row md:justify-start items-center justify-center gap-9">
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
