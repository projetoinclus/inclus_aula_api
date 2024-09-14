import { dataSource } from "../..";
import { Regiao } from "../entities/Regiao";
import { Request, Response } from "express";

export async function getAllRegiao(req: Request, res: Response) {
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

export async function getIdRegiao(req: Request, res: Response) {
  const repository = dataSource.getRepository(Regiao);
  const id: number = Number(req.params.id);
  const object = await repository.findOneBy({ id });

  try {
    res.json({
      message: "OK",
      error: null,
      result: object,
    });
  } catch (error) {
    res.json({
      message: "ERRO",
      error,
      result: null,
    });
  }
}

export async function createRegiao(req: Request, res: Response) {
  const repository = dataSource.getRepository(Regiao);
  const body = req.body;
  const objectCreate = repository.create(body);
  const object = await repository.save(objectCreate);

  try {
    res.json({
      message: "OK",
      error: null,
      result: object,
    });
  } catch (error) {
    res.json({
      message: "ERRO",
      error,
      result: null,
    });
  }
}

export async function deleteRegiao(req: Request, res: Response) {
  const repository = dataSource.getRepository(Regiao);
  const id: number = Number(req.params.id);
  const result = await repository.delete({ id });

  try {
    res.json({
      message: "OK",
      error: null,
      result: result.affected,
    });
  } catch (error) {
    res.json({
      message: "ERRO",
      error,
      result: null,
    });
  }
}
