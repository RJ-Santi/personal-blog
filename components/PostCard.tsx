type Props = {
  post: string[]
}

const PostCard = ({ post }: Props) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard
