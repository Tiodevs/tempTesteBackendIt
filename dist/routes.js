"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateBlogController_1 = require("./controllers/blog/CreateBlogController");
const DeleteBlogService_1 = require("./controllers/blog/DeleteBlogService");
const ListBlogContoller_1 = require("./controllers/blog/ListBlogContoller");
const CreateLeadController_1 = require("./controllers/lead/CreateLeadController");
const ListLeadContoller_1 = require("./controllers/lead/ListLeadContoller");
// Controllers
const router = (0, express_1.Router)();
exports.router = router;
// Configuração do envio de arquivos
router.get('/', (req, res) => {
    return res.send(`
    <h1 style='font-family: sans-serif'>
        API It Clod Solution!!! 👩‍🏫
    <h1>
  `);
});
// Cria um blog
router.post('/blog', new CreateBlogController_1.CreateBlogController().handle);
// Delta um blog
router.delete('/blog', new DeleteBlogService_1.DeleteBlogController().handle);
// Edita um blog
router.put('/album', () => { });
// Edita um listar
router.get('/blog', new ListBlogContoller_1.ListBlogContoller().handle);
// Cria um blog
router.post('/lead', new CreateLeadController_1.CreateLeadController().handle);
// Edita um listar
router.get('/lead', new ListLeadContoller_1.ListLeadContoller().handle);
