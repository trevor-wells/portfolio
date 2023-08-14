'use client'

import { useState, useEffect } from "react"
import moment from "moment"
import parse from "html-react-parser"
import { getComments } from "@/services/graphql"

export default function Comments({ slug }: { slug: string }) {
    
    const [comments, setComments] = useState<blogComment[]>([])
  
    useEffect(() => {
        getComments(slug)
        .then(res => setComments(res))
    },[])

    return (
        <>
        { comments.length > 0 && (
            <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                { comments.length }{' '}Comment(s)
            </h3>
            { comments.map((comment) => (
                <div 
                key={comment.createdAt}
                className="border-b border-gray-100 mb-4 pb-4">
                <p className="mb-4">
                    <span className="font-semibold">
                    {comment.name} {' '}on { moment(comment.createdAt).format('MMM DD, YYYY')}
                    </span>
                </p>
                <p className="whitespace-pre-line text-gray-600 w-full">
                    { parse(comment.comment) }
                </p>
                </div>
            ))}
            </div>
        )}
        </>
    )
}