import { Request, Response } from "express";
import {
  getAllRegiao,
  getIdRegiao,
  createRegiao,
  updateRegiao,
  deleteRegiao,
} from "../services/regiao_service";

export async function listarRegiao(req: Request, res: Response) {
  return await getAllRegiao(req, res);
}

export async function buscarRegiao(req: Request, res: Response) {
  return await getIdRegiao(req, res);
}

export async function salvarRegiao(req: Request, res: Response) {
  return await createRegiao(req, res);
}

export async function atualizarRegiao(req: Request, res: Response) {
  return await updateRegiao(req, res);
}

export async function excluirRegiao(req: Request, res: Response) {
  return await deleteRegiao(req, res);
}
