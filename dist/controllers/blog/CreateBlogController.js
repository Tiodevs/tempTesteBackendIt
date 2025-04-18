"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBlogController = void 0;
const cloudinary_1 = require("cloudinary");
const CreateBlogService_1 = require("../../services/blog/CreateBlogService");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});
class CreateBlogController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, texto } = req.body;
            const createBlogService = new CreateBlogService_1.CreateBlogService();
            if (!req.files || Object.keys(req.files).length === 0) {
                throw new Error("error upload file image");
            }
            else {
                // Enviar a imagem para a api docaludnary
                const file = req.files['foto'];
                const resultFile = yield new Promise((resolve, reject) => {
                    cloudinary_1.v2.uploader.upload_stream({}, function (error, result) {
                        if (error) {
                            reject(error);
                            return;
                        }
                        resolve(result);
                    }).end(file.data);
                });
                console.log(resultFile);
                const blog = yield createBlogService.execute({
                    titulo,
                    texto,
                    Banner: resultFile.url
                });
                return res.json(blog);
            }
        });
    }
}
exports.CreateBlogController = CreateBlogController;
