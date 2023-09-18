interface blogPostExcerpt {
    node: {
        createdAt: string
        slug: string
        title: string
    }
}

interface blogPostDetails {
    title: string
    featuredImage: {
        url: string
    }
    createdAt: string
    slug: string
}

interface blogPost {
    author: {
        bio: string
        name: string
        id: string
        photo: {
            url: string
        }
    }
    createdAt: string
    slug: string
    title: string
    content: {
        raw: any
    }
    videoLink?: string
}

interface commentObj {
    name: string
    comment: string
    slug: string
}

interface blogComment {
    name: string
    createdAt: string
    comment: string
}

interface project {
    title: string
    slug: string
    createdAt: string
    content: {
        raw: any
    }
    videoLink?: string
    gitHubLink: string
}

interface technology {
    name: string
    icon: {
        url: string
    }
}