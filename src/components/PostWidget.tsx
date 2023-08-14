'use client'

import { useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { getRecentPosts, getSimilarPosts } from '@/services/graphql'


export default function PostWidget({ categories, slug }: {categories:string[], slug:string}) {

    const [relatedPosts, setRelatedPosts] = useState<blogPostDetails[]>([])
    const pathname = usePathname()

    useEffect(() => {
        if(slug) {
            getSimilarPosts(slug, categories)
                .then((result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result))
        }
    }, [slug])
    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                {slug ? 'related posts' : 'recent posts'}
            </h3>
            {relatedPosts.map((post => (
                <div key={post.title} className='flex items-center w-full mb-4'>
                    <div className='w-16 flex-none'>
                        <img
                            alt={post.title}
                            height='60px'
                            width='60px'
                            className='align-middle rounded-full'
                            src={post.featuredImage.url}
                        />
                    </div>
                    <div className='flex-grow ml-4'>
                        <p className='text-gray-500 font-xs'>
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
                            {post.title}
                        </Link>
                    </div>
                </div>
            )))}
        </div>
    )
}