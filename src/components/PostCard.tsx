import Link from 'next/link'

export default function PostCard({ post }:{ post:blogPostExcerpt }) {
    return (
        <div className='transition duration-300 text-center mb-8 cursor-pointer hover:text-white text-3xl font-semibold'>
                <Link href={`/blog/${post.node.slug}`}>
                    {post.node.title}
                </Link>
        </div>
    )
}