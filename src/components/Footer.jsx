import Link from 'next/link'

export default function Footer() {
    return (
        <div className='container mb-3'>
            <div className='w-[100vw] inline-block'>
                <div className='flex flex-wrap justify-center'>
                    <h1 className='mb-3 text-2xl'>contact</h1>
                    <div className="w-[100vw]"/>
                    <Link href='/blog'>
                        <span className='transition duration-250 hover:text-[#f7efe9] align-middle ml-8 font-semibold cursor-pointer'>
                            linkedin
                        </span>
                    </Link>
                    <Link href='mailto:trevorwells.se@gmail.com'>
                        <span className='transition duration-250 hover:text-[#f7efe9] align-middle ml-8 font-semibold cursor-pointer'>
                            trevorwells.se@gmail.com
                        </span>
                    </Link>
                    <Link href='https://github.com/trevor-wells'>
                        <span className='transition duration-250 hover:text-[#f7efe9] align-middle ml-8 font-semibold cursor-pointer'>
                            github
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}