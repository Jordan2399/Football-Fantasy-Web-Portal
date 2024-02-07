import { NextFunction, Request, Response } from "express";
import { PermissionModel } from "../../database/models/permission/permission.model";
export const UtilsMSApi = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {
    console.log("process.env.MSTYPE", process.env.MSTYPE)
    if (process.env.MSTYPE === "gateway") {
      const details = await PermissionModel.Permission.findOne({
        permission_path: req.path,
        permission_method: req.method
      });
      if (!details) {
        console.log("route not found in registry %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%", details)
      }
      console.log("its gateway", details)

      if (details && details.ms === "user") {
        req.headers = {
          'api_key': process.env.API_USER,
          'Content-Type': 'application/json',
          'Authorization': req.headers.authorization
        }
        console.log("user header", req.headers)
        // req.headers['api_key'] = process.env.API_USER
      }
      else if (details && details.ms === "match") {
        if (req.path === '/club') {
          req.headers['api_key'] = process.env.API_MATCH;
          req.headers['Content-Type'] = 'application/json';
          req.headers['Authorization'] = req.headers.authorization;
        }else{

          req.headers = {
            'api_key': process.env.API_MATCH,
            'Content-Type': 'application/json',
            'Authorization': req.headers.authorization
          }
        }

      }
    } else {
      if (process.env.APIKEY !== req.headers['api_key']) {
        res.status(400).send("Not allowed: api key didnt matched");
      }
    }

    next()

  } catch (e) {
    next(e);
  }
};