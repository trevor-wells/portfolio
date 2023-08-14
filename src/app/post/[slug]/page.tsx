import Categories from '@/components/Categories'
import PostWidget from '@/components/PostWidget'
import PostDetail from '@/components/PostDetail'
import Author from '@/components/Author'
import Comments from '@/components/Comments'
import CommentsForm from '@/components/CommentsForm'
import { getPostDetails } from '@/services/graphql'

const PostDetails = async ({ params }: { params: { slug: string } }) => {
   
    const post = await getPostDetails(params.slug)

    return (
        <div className='mx-auto px-4 lg:px-10 mb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:w-5/6 mx-auto'>
                <div className='col-span-1 lg:col-span-8'>
                    <PostDetail post={post}/>
                    <Author author={post.author}/>
                    <CommentsForm slug={post.slug}/>
                    <Comments slug={post.slug}/>
                </div>
                <div className='col-span-1 lg:col-span-4'>
                    <div className='relative lg:sticky top-8'>
                        <PostWidget slug={post.slug} categories={post.categories.map((category:blogCategory) => category.slug)} />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails