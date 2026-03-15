import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function verProdutos(req, res){

const caminho = path.join(__dirname, "produtos.json");

const produtos = JSON.parse(
    fs.readFileSync(caminho, "utf-8")
);

res.json(produtos);

}
