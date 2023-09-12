import Link from 'next/link'

export default function ProjectCard({project} : {project: project}) {

    return (
        <div className='transition duration-300 text-center mb-8 cursor-pointer hover:text-white text-3xl font-semibold'>
            <Link href={`/projects/${project.slug}`}>
                {project.title}
            </Link>
        </div>
    )
}