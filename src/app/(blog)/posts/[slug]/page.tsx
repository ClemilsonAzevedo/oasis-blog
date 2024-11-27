export default function Post({ params }: { params: { slug: string } }) {
  return <h1>Post: {params.slug}</h1>
}
