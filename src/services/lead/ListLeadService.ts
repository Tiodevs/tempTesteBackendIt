import prismaClient from "../../prisma"

class ListLeadService {
    async execute(){

        const listUsers = prismaClient.leads.findMany({
            orderBy: {
                createdAt: 'asc',
            }
        }) 

        return listUsers
    }
}

export {ListLeadService}