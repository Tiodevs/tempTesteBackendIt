import  prismaClient  from "../../prisma"

interface ItemRequest {
  blogId: string
}

class DeleteBlogService {
  async execute({ blogId }: ItemRequest) {
      
    const fotos = await prismaClient.blogs.delete({
      where: {
        id: blogId
      }
    })

    return fotos
  }
}

export { DeleteBlogService }