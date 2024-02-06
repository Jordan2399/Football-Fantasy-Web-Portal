import { NextFunction, Request, Response } from "express";
import { MatchServices } from "./match.services";

export namespace MatchController {


    export const CreateMatch = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(201).json(await MatchServices.CreateMatch(req));
        } catch (e) {
            next(e);
        }
    };


}
