import axios, { AxiosError } from "axios";
import { Request } from "express";

export namespace PlayerServices {

    export const CreatePlayer = async (req: Request) => {
        console.log("DDDDDDDDDDDDDDDDDDDDDD", req.headers)

        let url = process.env.MSMATCHURL + ':' + process.env.MSMATCHPORT + '/resources/player';
        try {
            if (Object.keys(req.query).length > 0) {
                let isFirstQueryParam = true;
                Object.entries(req.query).forEach(([key, value]) => {
                    url += `${isFirstQueryParam ? '?' : '&'}${key}=${value}`;
                    isFirstQueryParam = false;
                });
            }
            console.log('url: ', req.headers)
            headers: {
                Authorization: req.headers.authorization
            }
            const authResponse = await axios.post(url, req.body, { headers: req.headers });
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







    export const GetPlayer = async (req: Request) => {
        console.log("DDDDDDDDDDDDDDDDDDDDDD", req.body)

        let url = process.env.MSMATCHURL + ':' + process.env.MSMATCHPORT + '/resources/player';
        try {
            if (Object.keys(req.query).length > 0) {
                let isFirstQueryParam = true;
                Object.entries(req.query).forEach(([key, value]) => {
                    url += `${isFirstQueryParam ? '?' : '&'}${key}=${value}`;
                    isFirstQueryParam = false;
                });
            }
            const authResponse = await axios.get(url, { headers: req.headers });
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









  

    export const DeletePlayer = async (req: Request) => {


        let url = process.env.MSMATCHURL + ':' + process.env.MSMATCHPORT + '/resources/player';


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












    export const UpdatePlayer = async (req: Request) => {

        console.log("DDDDDDDDDDDDDDDDDDDDDD", req.headers)

        let url = process.env.MSMATCHURL + ':' + process.env.MSMATCHPORT + '/resources/player';
        try {
            if (Object.keys(req.query).length > 0) {
                let isFirstQueryParam = true;
                Object.entries(req.query).forEach(([key, value]) => {
                    url += `${isFirstQueryParam ? '?' : '&'}${key}=${value}`;
                    isFirstQueryParam = false;
                });
            }
            console.log('url: ', req.headers)

            const authResponse = await axios.patch(url, req.body, { headers: req.headers });
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
}
