import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || ""

export const getPosts = async () => {
    const query = gql`
        query getBlogs {
            blogsConnection (orderBy: createdAt_DESC) {
                edges {
                    node {
                        createdAt
                        slug
                        title
                    }
                }
            }
        }
    `

    const results:any = await request(graphqlAPI, query)

    return results.blogsConnection.edges;
}

export const getPostDetails = async (slug:string) => {
    const query = gql`
        query GetBlogDetails($slug: String!) {
            blog(where: { slug: $slug }) {
                createdAt
                slug
                title
                content {
                    raw
                }
                videoLink?
            }
        }
    `

    const blogDetails:any = await request(graphqlAPI, query, { slug })

    return blogDetails.blog;
}

export const getComments = async (slug:string) => {
    const query = gql`
        query GetComments($slug: String!) {
            comments(where: { post: { slug: $slug }}) {
                name
                createdAt
                comment
            }
        }
    `
    const results:any = await request(graphqlAPI, query, { slug })

    return results.comments;
}

export const submitComment = async (obj: commentObj) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })

    return result.json();
}

export const getProjects = async () => {
    const query = gql`
        query getProjects {
            projects {
                title
                slug
            }
        }
    `

    const results:any = await request(graphqlAPI, query)

    return results.projects;
}

export const getProjectDetails = async (slug:string) => {
    const query = gql`
        query GetProjectDetails($slug: String!) {
            project(where: { slug: $slug }) {
                title
                slug
                createdAt
                content {
                    raw
                }
                videoLink
                gitHubLink
            }
        }
    `

    const projectDetails:any = await request(graphqlAPI, query, {slug})

    return projectDetails.project
}

export const getTechnologies = async (slug:string) => {
    const query = gql`
        query GetTechnologies($slug: String!) {
            technologies(where: {projects_some: {Project: {slug: $slug}}}) {
                name
                icon {
                    url
                }
            }
        }
    `

    const results:any = await request(graphqlAPI, query, {slug})

    return results.technologies
}