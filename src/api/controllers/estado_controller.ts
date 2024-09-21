import { Request, Response } from "express";
import {
  getAllEstado,
  getIdEstado,
  createEstado,
  updateEstado,
  deleteEstado,
} from "../services/estado_service";

export async function listarEstado(req: Request, res: Response) {
  return await getAllEstado(req, res);
}

export async function buscarEstado(req: Request, res: Response) {
  return await getIdEstado(req, res);
}

export async function salvarEstado(req: Request, res: Response) {
  return await createEstado(req, res);
}

export async function atualizarEstado(req: Request, res: Response) {
  return await updateEstado(req, res);
}

export async function excluirEstado(req: Request, res: Response) {
  return await deleteEstado(req, res);
}
