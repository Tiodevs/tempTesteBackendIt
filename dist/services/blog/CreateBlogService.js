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
exports.CreateBlogService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateBlogService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ titulo, texto, Banner }) {
            // Verifica se tem alguim campo vazio
            if (!titulo) {
                throw new Error("titulo não enviado");
            }
            if (!texto) {
                throw new Error("texto não enviado");
            }
            if (!Banner) {
                throw new Error("Banner não enviado");
            }
            // Cria uma album
            const blog = yield prisma_1.default.blogs.create({
                data: {
                    titulo,
                    texto,
                    Banner
                }
            });
            return blog;
            console.log(titulo, texto, Banner);
        });
    }
}
exports.CreateBlogService = CreateBlogService;
