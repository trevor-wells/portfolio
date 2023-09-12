'use client'

import Link from 'next/link'
// import { useState, useEffect } from 'react'

export default function NavBar(fonts: any) {

    // const [themeIndex, setThemeIndex] = useState(1)
    // const themes = ['matrix']

    // function changeTheme() {
    //     if (themeIndex > themes.length - 1) {
    //         setThemeIndex(prev => 0)
    //     }
    //     else {
    //         setThemeIndex(prev => prev + 1)
    //     }
    // }

    // useEffect(() => {document.body.className = (themes[themeIndex])}, [themeIndex])

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='w-full pt-8 inline-block py-8'>
                <div className='md:float-left block'>
                    <Link href='/'>
                        <span className='transition duration-250 hover:text-[--tertiary] cursor-pointer font-bold text-4xl'>
                            trevorwells
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                <a download href='/trevor-resume.pdf'>
                        <span className='transition duration-250 hover:text-[--tertiary] md:float-right mt-2 align-middle ml-8 font-semibold cursor-pointer'>
                            resume
                        </span>
                    </a>
                    <Link href='/blog'>
                        <span className='transition duration-250 hover:text-[--tertiary] md:float-right mt-2 align-middle ml-8 font-semibold cursor-pointer'>
                            blog
                        </span>
                    </Link>
                    <Link href='/projects'>
                        <span className='transition duration-250 hover:text-[--tertiary] md:float-right mt-2 align-middle ml-8 font-semibold cursor-pointer'>
                            projects
                        </span>
                    </Link>
                    {/* <button className='transition duration-250 hover:text-[--tertiary] md:float-right mt-2 align-middle ml-8 font-semibold cursor-pointer' onClick={changeTheme}>
                        change theme
                    </button> */}
                </div>
            </div>
        </div>
    )
}