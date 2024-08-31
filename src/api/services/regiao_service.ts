import { dataSource } from "../..";
import { Regiao } from "../entities/Regiao";
import { Request, Response } from "express";

export async function findAluno(req: Request, res: Response) {
  const repository = dataSource.getRepository(Regiao);
  const objects = await repository.find();

  try {
    res.json({
      message: "OK",
      error: null,
      result: objects,
    });
  } catch (error) {
    res.json({
      message: "ERRO",
      error,
      result: null,
    });
  }
}
