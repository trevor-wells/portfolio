import PostDetail from '@/components/PostDetail'
import Comments from '@/components/Comments'
import CommentsForm from '@/components/CommentsForm'
import { getPostDetails } from '@/services/graphql'

const PostDetails = async ({ params }: { params: { slug: string } }) => {
   
    const post = await getPostDetails(params.slug)

    return (
        <div className='mx-auto px-4 lg:px-10 mb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 mx-auto'>
                <div className='col-span-2 col-start-2'>
                    <PostDetail post={post}/>
                    <CommentsForm slug={post.slug}/>
                    <Comments slug={post.slug}/>
                </div>
            </div>
        </div>
    )
}

export default PostDetails