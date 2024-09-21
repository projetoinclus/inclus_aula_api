import { Router } from "express";
import {
  listarRegiao,
  buscarRegiao,
  salvarRegiao,
  atualizarRegiao,
  excluirRegiao,
} from "../controllers/regiao_controller";

const routerRegiao = Router();

routerRegiao.get("/", listarRegiao);
routerRegiao.get("/:id", buscarRegiao);
routerRegiao.post("/", salvarRegiao);
routerRegiao.put("/:id", atualizarRegiao);
routerRegiao.delete("/:id", excluirRegiao);

export default routerRegiao;
