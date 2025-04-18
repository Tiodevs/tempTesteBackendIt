import { Request, Response, Router } from 'express'
import { CreateBlogController } from './controllers/blog/CreateBlogController'
import { DeleteBlogController } from './controllers/blog/DeleteBlogService'
import { ListBlogContoller } from './controllers/blog/ListBlogContoller'
import { UpdateBlogController } from './controllers/blog/UpdateBlogController'
import { CreateLeadController } from './controllers/lead/CreateLeadController'
import { ListLeadContoller } from './controllers/lead/ListLeadContoller'


// Controllers

const router = Router()

// Configuração do envio de arquivos
router.get('/', (req: Request, res: Response) => {
  return res.send(`
    <h1 style='font-family: sans-serif'>
        API It Clod Solution!!! 👩‍🏫
    <h1>
  `)
})


// Cria um blog
router.post('/blog', new CreateBlogController().handle)
// Delta um blog
router.delete('/blog', new DeleteBlogController().handle)
// Edita um blog
router.put('/blog', new UpdateBlogController().handle)
// Edita um listar
router.get('/blog', new ListBlogContoller().handle)

// Cria um blog
router.post('/lead', new CreateLeadController().handle)
// Edita um listar
router.get('/lead', new ListLeadContoller().handle)


export { router }