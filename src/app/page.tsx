import PostCard from "@/components/PostCard"
import PostWidget from "@/components/PostWidget"
import Categories from "@/components/Categories"
import { getPosts } from "@/services/graphql"

export default async function Home() {
  const posts:blogPostExcerpt[] = await getPosts()

  const author : blogAuthor = {
    bio: "Fullstack Developer",
    name: "Trevor Wells",
    id: "1",
    photo: { 
        url: "https://media.licdn.com/dms/image/D4D03AQEWq4quZeggKg/profile-displayphoto-shrink_800_800/0/1682477784840?e=1697673600&v=beta&t=7bU3C09LhLJ3GX5mhQSu3Ftw-NkVGC5hVszfGenb6m4" 
    }
  }

  const categories : blogCategory[] = [
    {
      name: "Development",
      slug: "yup"
    }
  ]

  const examplePosts : blogPostExcerpt[] = [
    { node: {
      author: author,
      createdAt: "right now",
      slug: "Shlooba Dooba",
      title: 'React Testing',
      excerpt: 'Learn React Testing',
      featuredImage: {
        url: "https://previews.123rf.com/images/fordzolo/fordzolo1506/fordzolo150600296/41026708-example-white-stamp-text-on-red-backgroud.jpg"
      },
      categories: categories
      }
    }
  ]

  return (
    <main className="container mx-auto px-10 mb-8">
      <title>CMS Blog</title>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1 bg-gray-800'>
          {posts.map((post) => (<PostCard post={post} key={post.node.title}/>))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8 bg-gray-300'>
              <PostWidget />
              <Categories />
            </div>
        </div>
      </div>
    </main>
  )
}
