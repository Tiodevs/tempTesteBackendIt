import prismaClient from "../../prisma"

class ListBlogService {
    async execute(){

        const listUsers = prismaClient.blogs.findMany({
            orderBy: {
                createdAt: 'asc',
            }
        }) 

        return listUsers
    }
}

export {ListBlogService}