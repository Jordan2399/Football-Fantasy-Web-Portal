import { NextFunction, Request, Response } from "express";
import { TokenSplitUtils } from "../split/token.split.utils";
import jwt from "jsonwebtoken";

export const TokenVerificationUtils = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const publicPaths = [
      "/authentication/signup",
      "/authentication/signin",
      "/authentication/osignin",
      "/authentication/forgotpassword",
      "/authentication/setpassword",
    ];

    if (publicPaths.includes(req.path)) {
      next();
      return;
    }
    console.log('GGGGGGGGGGGGGGGGGGGGGGGGGGG',req.headers.authorization)

    // Check if Authorization header is present
    if (!req.headers['Authorization']) {
      return res.status(401).json({ message: "Unauthorized: Missing token" });
    }


    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', req.headers['Authorization'])
    const { token } = await TokenSplitUtils(req.headers['Authorization'] as string);
    const token2 = req.cookies?.["accessToken"];


    console.log('SSSSSSSSSS', token)
    console.log('uuuuuuuuuu', token2)

    jwt.verify(
      token || token2,
      process.env.JWT as string,
      async (err: any, decoded: any) => {
        if (err) {
          return Promise.reject({
            code: 400,
            http_status_code: 401,
            message: "Unauthorized: Invalid token",
          });
        } else {
          res.locals.decode = decoded;
          next();
        }
      }
    );
  } catch (e) {
    next(e);
  }
};
