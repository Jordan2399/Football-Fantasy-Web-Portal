import { NextFunction, Request, Response } from "express";
import { PermissionModel } from "../../database/models/permission/permission.model";
export const UtilsPermission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    type TMethod =
      | "GET"
      | "HEAD"
      | "POST"
      | "PUT"
      | "DELETE"
      | "CONNECT"
      | "OPTIONS"
      | "TRACE"
      | "PATCH";

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

    // console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR')
    const userDetails = res.locals.decode;
    console.log('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', userDetails)
    const details = await PermissionModel.Permission.findOne({
      permission_path: req.path,
      permission_method:req.method
    });
    console.log('OOOOOOOO',req.path,details)
    console.log('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',req.method)
    console.log('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',req.method as TMethod)

    if (
      details &&
      details.permission_allowed_role.includes(userDetails.role) &&
      details.permission_method === (req.method as string) &&
      details.permission_status === "1"
    ) {
      console.log('permission passed')
      next();
    } else {
      res.status(401).send("Not allowed: permission");
    }
  } catch (e) {
    next(e);
  }
};
