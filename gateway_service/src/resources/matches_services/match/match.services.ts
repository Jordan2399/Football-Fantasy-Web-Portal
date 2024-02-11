import axios, { AxiosError } from "axios";
import { Request } from "express";


export namespace MatchServices {

    export const GetUserHistory = async (req: Request) => {
        try {
            const history = {
                "stat": {
                    "total_score": "20",
                    "total_match": "5"
                },
                "history": [
                    {
                        "team1": {
                            "name": "Team1Name1",
                            "image": "Team1Image1",
                            "goal": "1"
                        },
                        "team2": {
                            "name": "Team2Name1",
                            "image": "Team2Image1",
                            "goal": "2"
                        },
                        "score": "80"
                    },
                    {
                        "team1": {
                            "name": "Team1Name2",
                            "image": "Team1Image2",
                            "goal": "3"
                        },
                        "team2": {
                            "name": "Team2Name2",
                            "image": "Team2Image2",
                            "goal": "4"
                        },
                        "score": "120"
                    },
                    {
                        "team1": {
                            "name": "Team1Name3",
                            "image": "Team1Image3",
                            "goal": "5"
                        },
                        "team2": {
                            "name": "Team2Name3",
                            "image": "Team2Image3",
                            "goal": "6"
                        },
                        "score": "90"
                    }
                ]
            }


            return Promise.resolve(
                history
            );

        } catch (e) {
            return Promise.reject(e);
        }
    };
    export const GetMatchScoreBoard = async (req: Request) => {
        try {
            const scoreboard = [
                {
                    "name": "roshan",
                    "score": "30"
                },
                {
                    "name": "john",
                    "score": "45"
                },
                {
                    "name": "emma",
                    "score": "22"
                },
                {
                    "name": "alex",
                    "score": "50"
                }
            ]



            return Promise.resolve(
                scoreboard
            );

        } catch (e) {
            return Promise.reject(e);
        }
    };







    export const CreateMatch = async (req: Request) => {
        console.log("DDDDDDDDDDDDDDDDDDDDDD", req.headers)

        let url = process.env.MSMATCHURL + ':' + process.env.MSMATCHPORT + '/resources/match';
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







 
    export const GetMatch = async (req: Request) => {
        console.log("DDDDDDDDDDDDDDDDDDDDDD", req.body)

        let url = process.env.MSMATCHURL + ':' + process.env.MSMATCHPORT + '/resources/match';
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




    export const GetOngoingMatchByUser = async (req: Request) => {
        console.log("DDDDDDDDDDDDDDDDDDDDDD", req.path)

        let url = process.env.MSMATCHURL + ':' + process.env.MSMATCHPORT + '/resources/user/ongoing_match';
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




    export const GetUpcomingMatchByUser = async (req: Request) => {
        console.log("DDDDDDDDDDDDDDDDDDDDDD", req.path)

        let url = process.env.MSMATCHURL + ':' + process.env.MSMATCHPORT + '/resources/user/upcoming_match';
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



    export const PlayersByMatch = async (req: Request) => {
        console.log("DDDDDDDDDDDDDDDDDDDDDD", req.body)

        let url = process.env.MSMATCHURL + ':' + process.env.MSMATCHPORT + '/resources/current_match_players';
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


    export const DeleteMatch = async (req: Request) => {


        let url = process.env.MSMATCHURL + ':' + process.env.MSMATCHPORT + '/resources/match';


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

    export const UpdateMatch = async (req: Request) => {

        console.log("DDDDDDDDDDDDDDDDDDDDDD", req.headers)

        let url = process.env.MSMATCHURL + ':' + process.env.MSMATCHPORT + '/resources/match';
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
