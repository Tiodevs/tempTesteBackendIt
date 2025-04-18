import { Request, Response } from "express"
import { CreateBlogService } from "../../services/blog/CreateBlogService"

import dotenv from 'dotenv';
dotenv.config();



export class CreateBlogController {
    async handle(req: Request, res: Response) {

        const { titulo, texto } = req.body

        const createBlogService = new CreateBlogService()

        const blog = await createBlogService.execute({
            titulo,
            texto,
            Banner: "a"
        })

        return res.json(blog)
    }

}
