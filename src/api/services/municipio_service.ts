import { dataSource } from "../..";
import { Municipio } from "../entities/Municipio";
import { Request, Response } from "express";

export async function getAllMunicipio(req: Request, res: Response) {
  const repository = dataSource.getRepository(Municipio);
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

export async function getIdMunicipio(req: Request, res: Response) {
  const repository = dataSource.getRepository(Municipio);
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

export async function createMunicipio(req: Request, res: Response) {
  const repository = dataSource.getRepository(Municipio);
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

export async function updateMunicipio(req: Request, res: Response) {
  const repository = dataSource.getRepository(Municipio);
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

export async function deleteMunicipio(req: Request, res: Response) {
  const repository = dataSource.getRepository(Municipio);
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
