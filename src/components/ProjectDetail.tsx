'use client'

import Image from 'next/image'
import moment from 'moment'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { getTechnologies } from '@/services/graphql'

export default function ProjectDetail({project} : {project: project}) {

    const [technologies, setTechnologies] = useState<technology[]>([])

    useEffect(() => {
        getTechnologies(project.slug)
        .then(res => setTechnologies(res))
    }, [project.slug])

      return (
        <div className='rounded-lg px-4 lg:px-8 mb-8'>
          <div className="mb-8 w-full" >
            <h1 className="text-center mb-8 text-3xl font-semibold">
              {project.title}
            </h1>
            <a
                className="text-center mb-8 text-l font-semibold transition hover:text-[--tertiary]"
                href={project.gitHubLink}
                target="_blank"
                rel="noopener noreferrer">
                (github link)
            </a>
            <div className="block lg:flex text-center items-center justify-center mb-8 w-full" >
              <div className="font-medium text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-[#DDB109]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                  {moment(project.createdAt).format('MMM DD, YYYY').toLowerCase()}
                </span>
              </div>
            </div>
            <div>
                <h1>technologies used</h1>
                {(technologies.map(technology => <span key={technology.name}>{technology.name}</span>))}
            </div>
            <div>
                { project.videoLink ? 
                <div className="mb-8">
                    <iframe
                    src={project.videoLink}
                    className="w-full lg:w-2/3 md:w-4/5 p-2 h-96 mx-auto">
                    </iframe>
                </div>
                :
                null
                }
            </div>
          </div>
        </div>
      )
    }