import { NextFunction, Request, Response } from "express";
export const UtilsMSApi = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log('ásdfasdfasdfasdf')
  try {
    console.log('api_key', req.headers)

    console.log('environment api_key', process.env.APIKEY)
    if (req.headers['api_key'] !== process.env.APIKEY) {
      // console.log('api validation failed ', req.body)
      res.status(401).send({ message: "Not allowed" });
    } else {
      console.log('api validation pass', req.body)
      next()
    }
  } catch (e) {
    next(e);
  }
};