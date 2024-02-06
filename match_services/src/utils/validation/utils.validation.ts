import { NextFunction, Request, Response } from "express";

export namespace UtilValidation {

  export const Id = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const objectIdRegex = /^[0-9a-fA-F]{24}$/;
    try {
      if (!req.query.id) {
        console.log("log 1", req.query.id)
        res.status(404).json({ 'message': 'Club does not exist' })
      }
      const isValidObjectId = (id: string) => objectIdRegex.test(id);
      if (!isValidObjectId(req.query.id as string)) {
        console.log("invalid")
        res.status(404).json({ 'message': 'Invalid Id' })
      }
      next()
    } catch (e) {
      next(e);
    }
  };
}