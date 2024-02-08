import axios, { AxiosError } from "axios";
import { Request } from "express";
import jwt from "jsonwebtoken";

export namespace AuthorizationServices {
  export const ForgotPasswordVerify = async (req: Request) => {
    console.log("DDDDDDDDDDDDDDDDDDDDDD", req.path)

    let url = process.env.MSMATCHURL + ':' + process.env.MSMATCHPORT + '/resources/event';
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
};

