import { Request } from "express";
// import jwt from "jsonwebtoken";
import { matchModel } from "../../database/models/match/match.model";

export namespace MatchServices {

    export const CreateMatch = async (req: Request) => {
        try {
            const match_details = req.body;
            const new_match = new matchModel.Match(match_details);
            const save_match = await new_match.save();

            return Promise.resolve(
                {
                    'data': save_match,
                    'message': 'Match Created Successfully',
                    'url': 'system/dashboard/matches'
                }
            );

        } catch (e) {
            return Promise.reject(e);
        }
    };

}
