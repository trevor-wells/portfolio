import ProjectDetail from '@/components/ProjectDetail'
import { getProjectDetails } from '@/services/graphql'

const ProjectDetails = async ({ params }: { params: { slug: string } }) => {
   
    const project = await getProjectDetails(params.slug)

    return (
        <div className='mx-auto px-4 lg:px-10 mb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 mx-auto'>
                <div className='col-span-2 col-start-2'>
                    <ProjectDetail project={project} />
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails