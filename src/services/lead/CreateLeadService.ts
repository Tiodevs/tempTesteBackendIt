import  prismaClient  from "../../prisma"

interface ItemRequest {
  nome: string
  email: string
  numero: string
}

class CreateLeadService {
  async execute({ nome, email, numero }: ItemRequest) {
    
    // Verifica se tem alguim campo vazio
    if (!nome) {
      throw new Error("nome não enviado")
    }
    if (!email) {
      throw new Error("email não enviado")
    }
    if (!numero) {
      throw new Error("numero não enviado")
    }

    const fotos = await prismaClient.leads.create({
      data: {
        nome, 
        email, 
        numero
      }
    })

    return fotos
  }
}

export { CreateLeadService }