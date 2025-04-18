import prismaClient from "../../prisma"

interface UserRequest {
  titulo: string
  texto: string
  Banner: string
}

class CreateBlogService {
  async execute({ titulo, texto,Banner }: UserRequest) {

    // Verifica se tem alguim campo vazio
    if (!titulo) {
      throw new Error("titulo não enviado")
    }
    if (!texto) {
      throw new Error("texto não enviado")
    }

    // Cria uma album
    const blog = await prismaClient.blogs.create({
      data: {
        titulo, 
        texto,
        Banner
      }
    })

    return blog

  }
}

export { CreateBlogService }