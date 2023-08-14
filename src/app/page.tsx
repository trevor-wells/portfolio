import PostCard from "@/components/PostCard"
import PostWidget from "@/components/PostWidget"
import Categories from "@/components/Categories"
import { getPosts } from "@/services/graphql"

export default async function Home() {
  const posts:blogPostExcerpt[] = await getPosts()

  return (
    <main className="container mx-auto px-10 mb-8">
      <title>CMS Blog</title>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1 bg-gray-800'>
          {posts.map((post) => (<PostCard post={post} key={post.node.title}/>))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8 bg-gray-300'>
              <PostWidget categories={[]} slug={''}/>
              <Categories />
            </div>
        </div>
      </div>
    </main>
  )
}
