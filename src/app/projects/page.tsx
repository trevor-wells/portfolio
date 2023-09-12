import ProjectCard from "@/components/ProjectCard"
import { getProjects } from "@/services/graphql"

export default async function Project() {

    const projects:project[] = await getProjects()

    return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
        <div className='col-start-2 col-span-2'>
            {projects.map(project => <ProjectCard project={project} key={project.slug} />)}
        </div>
    </div>
    )
}