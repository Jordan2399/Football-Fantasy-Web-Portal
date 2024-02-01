import { Request } from "express";
import jwt from "jsonwebtoken";
import { clubModel } from "../../database/models/club/club.model";
import { CommonType } from "../../database/models/commontype";
import mongoose from "mongoose";

export namespace ClubServices {

    export const CreateClub = async (req: Request) => {
        const files = req.files as unknown as CommonType.Iimage
        if (!files || !Object.keys(files).length) {
            return Promise.reject({
                code: 400,
                http_status_code: 404,
                error: 'Files not available',
            });
        }



        // console.log(req.files?['image'][0]:[]   )

        console.log(files.image[0].destination + '' + files.image[0].filename)
        console.log(req.body)

        try {
            const check_club = await clubModel.Club.findOne({
                name: req.body?.name,
            });

            if (!check_club) {
                // const club_detailsBody = {"name"};
                // const club_details = req.files;
                // console.log(club_details)

                const new_club = new clubModel.Club({ name: req.body.name, image: `/uploads/private/images/${files.image[0].filename}` });
                const save_club = await new_club.save();
                return Promise.resolve({
                    data: save_club,
                });
            }
            if (check_club) {
                return Promise.reject({
                    code: 400,
                    http_status_code: 409,
                    error: "Club already exist",
                });
            }
        } catch (e) {
            return Promise.reject(e);
        }
    };  
}
