import { Request, Response } from "express";
import { CreateLeadService } from "../../services/lead/CreateLeadService"

class CreateLeadController {
  async handle(req: Request, res: Response) {

    const { nome, email, numero } = req.body

    const createLeadService = new CreateLeadService()

    const lead = await createLeadService.execute({ nome, email, numero })

    return res.json(lead)
  }
}

export { CreateLeadController }