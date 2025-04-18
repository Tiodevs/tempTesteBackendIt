import { Request, Response } from "express";
import { DeleteBlogService } from "../../services/blog/DeleteBlogService";

class DeleteBlogController {
  async handle(req: Request, res: Response) {

    const { blogId } = req.body

    const deleteBlogService = new DeleteBlogService()

    const blogdeleted = await deleteBlogService.execute({ blogId })

    return res.json(blogdeleted)
  }
}

export { DeleteBlogController }