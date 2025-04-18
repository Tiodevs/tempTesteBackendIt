import { Request, Response } from "express";
import { UpdateBlogService } from "../../services/blog/UpdateBlogService";

class UpdateBlogController {
  async handle(req: Request, res: Response) {
    
    const { id, titulo, texto, Banner } = req.body;

    const updateBlogService = new UpdateBlogService();

    try {
      const updatedBlog = await updateBlogService.execute({
        id,
        titulo,
        texto,
        Banner
      });

      return res.json(updatedBlog);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: "Erro ao atualizar blog" });
    }
  }
}

export { UpdateBlogController } 