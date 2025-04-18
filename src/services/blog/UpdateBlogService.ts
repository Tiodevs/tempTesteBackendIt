import prismaClient from "../../prisma"

interface BlogUpdateRequest {
  id: string
  titulo?: string
  texto?: string
  Banner?: string
}

class UpdateBlogService {
  async execute({ id, titulo, texto, Banner }: BlogUpdateRequest) {
    
    // Verificar se o blog existe
    const blogExists = await prismaClient.blogs.findFirst({
      where: {
        id: id
      }
    })

    if (!blogExists) {
      throw new Error("Blog não encontrado")
    }

    // Atualiza o blog
    const blog = await prismaClient.blogs.update({
      where: {
        id: id
      },
      data: {
        titulo: titulo || blogExists.titulo,
        texto: texto || blogExists.texto,
        Banner: Banner || blogExists.Banner
      }
    })

    return blog
  }
}

export { UpdateBlogService } 