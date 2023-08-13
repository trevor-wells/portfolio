export default function Home() {

  const posts = [
    { title: 'React Testing', excerpt: 'Learn React Testing' },
    { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
    { title: 'Uhh', excerpt: 'Learn Uhhh' },
  ]

  return (
    <main className="container mx-auto px-10 mb-8">
      <title>CMS Blog</title>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1 bg-gray-800'>
          {posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
            )
          )}
        </div>
        <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8 bg-gray-300'>
              
            </div>
        </div>
      </div>
    </main>
  )
}
