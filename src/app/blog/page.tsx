import PostCard from "@/components/PostCard"
import { getPosts } from "@/services/graphql"

export default async function Blog() {
    const posts:blogPostExcerpt[] = await getPosts()

    return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
        <div className='col-start-2 col-span-2'>
            {posts.map((post) => (<PostCard post={post} key={post.node.title}/>))}
        </div>
    </div>
    )
}