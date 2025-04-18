import { Request, Response } from "express";
import { ListBlogService } from "../../services/blog/ListBlogService";

export class ListBlogContoller{
    async handle(req: Request, res: Response){

        const listBlogService = new ListBlogService()

        const listBlog = await listBlogService.execute()
        
        res.json(listBlog)
    }
}