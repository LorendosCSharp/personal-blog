export const usePosts = () => {
  const { locale } = useI18n()

  const getPostBySlug = async (slug: string) => {
    const { locale } = useI18n()

    return await queryCollection('blog')
      .where('stem', '=', `blog/${slug}.${locale.value}`)
      .first()
  }

  const getAllPosts = async () => {
    const posts = await queryCollection('blog')
      .where('stem', '<>', `null`)
      .all()
    const rightPost=posts.filter(p => p.path.includes(`.${locale.value}`)).map((post)=>({
      ...post,
      path:post.path.substring(0,post.path.length-3)
    }))
    return rightPost
  }

  return {
    getPostBySlug,
    getAllPosts
  }
}