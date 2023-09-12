'use client'

import { useState, useEffect } from 'react'
import { submitComment } from '@/services/graphql'

export default function CommentsForm({ slug }: { slug: string}) {
    
    const [error, setError] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [formData, setFormData] = useState({
        comment: "",
        name: ""
    })

    useEffect(() => {
        setFormData(
        {
            ...formData, 
            name: window.localStorage.getItem('name') || ""
        }
        )
    },[formData])

    function handleChange(e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void {
        const {name, value} = e.currentTarget;
        setFormData({...formData, [name]: value })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        setError(false);

        if (!formData.comment || !formData.name) {
        setError(true);
        return;
        }

        const commentObj = { 
        name: formData.name,
        comment: formData.comment,
        slug: slug
        }

        // save the user's name for the next time they comment
        window.localStorage.setItem('name', formData.name)
        
        submitComment(commentObj)
        .then((res) => {
            setShowSuccessMessage(true);
            setTimeout(() => {
            setShowSuccessMessage(false)
            }, 3000)
        })
    }

    return (
        <form 
        className='rounded-lg px-8'
        onSubmit={handleSubmit}>
        <h3 className='text-xl mb-2 font-semibold'>
            leave a reply
        </h3>
        <div className='grid grid-cols-1 gap-4 mb-4'>
            <textarea 
            name="comment"
            className='p-4 outline-none w-full bg-[--secondary] text-[--primary]' 
            onChange={handleChange} />
        </div>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
            <input
            type='text'
            className='py-2 px-4 outline-none w-full bg-[--secondary] text-[--primary]' 
            placeholder='Name'
            name='name' 
            onChange={handleChange} 
            value={formData.name} />
            <button
            type='submit' 
            className='transition duration-250 ease inline-block text-lg px-8 py-3 cursor-pointer' >
            submit comment
            </button>
        </div>
        { error && <p className='text-xs text-red-500'>all fields are required</p>}
        <div className='mt-8'>

            { showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>comment submitted for review</span>}
        </div>
        </form>
    )
}
