import { NextFunction, Request, Response } from "express";
import { ClubServices } from "./club.services";

export namespace ClubController {

    export const CreateClub = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            res.status(201).json(await ClubServices.CreateClub(req));
        } catch (e) {
            next(e);
        }
    };





}
