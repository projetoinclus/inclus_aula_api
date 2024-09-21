import { dataSource } from "../..";
import { Estado } from "../entities/Estado";
import { Request, Response } from "express";

export async function getAllEstado(req: Request, res: Response) {
  const repository = dataSource.getRepository(Estado);
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

export async function getIdEstado(req: Request, res: Response) {
  const repository = dataSource.getRepository(Estado);
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

export async function createEstado(req: Request, res: Response) {
  const repository = dataSource.getRepository(Estado);
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

export async function updateEstado(req: Request, res: Response) {
  const repository = dataSource.getRepository(Estado);
  const id: number = Number(req.params.id);
  const body = req.body;
  const result = await repository.update({ id }, body);
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

export async function deleteEstado(req: Request, res: Response) {
  const repository = dataSource.getRepository(Estado);
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
