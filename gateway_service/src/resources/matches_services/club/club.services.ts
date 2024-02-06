import { Request } from "express";
import jwt from "jsonwebtoken";
// import { clubModel } from "../../database/models/club/club.model";
// import { CommonType } from "../../database/models/commontype";
// import { playerModel } from "../../database/models/player/player.model";
import mongoose from "mongoose";
import { CommonType } from "../../../database/models/commontype";
import axios, { AxiosError } from "axios";

export namespace ClubServices {

    export const CreateClub = async (req: Request) => {
    };





    export const GetClub = async (req: Request) => {
        // console.log('asdf', process.env.MSMATCHURL + ':' + process.env.MSMATCHPORT + '/resources/club')
        let url = process.env.MSMATCHURL + ':' + process.env.MSMATCHPORT + '/resources/club';


        try {
            if (Object.keys(req.query).length > 0) {
                // Initialize a flag to track if it's the first query parameter
                let isFirstQueryParam = true;
                // Loop through each key-value pair in req.query
                Object.entries(req.query).forEach(([key, value]) => {
                    // Append key-value pair to the URL
                    url += `${isFirstQueryParam ? '?' : '&'}${key}=${value}`;
                    // Update the flag after appending the first parameter
                    isFirstQueryParam = false;
                });
            }
            console.log('###############################', url)
            const authResponse = await axios.get(url, { headers: req.headers });
            // return Promise.resolve({
            //   message: authResponse.data.message,
            //   token: authResponse.data.token,
            //   url: authResponse.data.url,
            // });
            return Promise.resolve(authResponse.data);

        } catch (e) {
            console.log('roshanError', e)
            if (axios.isAxiosError(e)) {
                const axiosError = e as AxiosError;
                if (axiosError.response && axiosError.response.status >= 400 && axiosError.response.status < 500) {
                    return Promise.reject({
                        code: 400,
                        http_status_code: axiosError.response.status,
                        error: axiosError.response.data,
                    })
                }
            }
            return Promise.reject(e);
        }
    };








    export const DeleteClub = async (req: Request) => {


        let url = process.env.MSMATCHURL + ':' + process.env.MSMATCHPORT + '/resources/club';


        try {
            if (Object.keys(req.query).length > 0) {
                // Initialize a flag to track if it's the first query parameter
                let isFirstQueryParam = true;
                // Loop through each key-value pair in req.query
                Object.entries(req.query).forEach(([key, value]) => {
                    // Append key-value pair to the URL
                    url += `${isFirstQueryParam ? '?' : '&'}${key}=${value}`;
                    // Update the flag after appending the first parameter
                    isFirstQueryParam = false;
                });
            }
            console.log('###############################', url)
            const authResponse = await axios.delete(url, { headers: req.headers });
            // return Promise.resolve({
            //   message: authResponse.data.message,
            //   token: authResponse.data.token,
            //   url: authResponse.data.url,
            // });
            return Promise.resolve(authResponse.data);

        } catch (e) {
            console.log('roshanError', e)
            if (axios.isAxiosError(e)) {
                const axiosError = e as AxiosError;
                if (axiosError.response && axiosError.response.status >= 400 && axiosError.response.status < 500) {
                    return Promise.reject({
                        code: 400,
                        http_status_code: axiosError.response.status,
                        error: axiosError.response.data,
                    })
                }
            }
            return Promise.reject(e);
        }

    };

    export const UpdateClub = async (req: Request) => {
    };


}
