import { Request, Response } from "express";
import {
  getAllMunicipio,
  getIdMunicipio,
  createMunicipio,
  updateMunicipio,
  deleteMunicipio,
} from "../services/municipio_service";

export async function listarMunicipio(req: Request, res: Response) {
  return await getAllMunicipio(req, res);
}

export async function buscarMunicipio(req: Request, res: Response) {
  return await getIdMunicipio(req, res);
}

export async function salvarMunicipio(req: Request, res: Response) {
  return await createMunicipio(req, res);
}

export async function atualizarMunicipio(req: Request, res: Response) {
  return await updateMunicipio(req, res);
}

export async function excluirMunicipio(req: Request, res: Response) {
  return await deleteMunicipio(req, res);
}
