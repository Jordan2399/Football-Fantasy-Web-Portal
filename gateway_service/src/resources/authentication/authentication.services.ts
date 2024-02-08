import { Request } from "express";
import axios from "axios";
import { AxiosError } from "axios";

export namespace AuthenticationServices {
  export const SignUp = async (req: Request) => {
    console.log('asdf', process.env.MSUSERURL + ':' + process.env.MSUSERPORT + '/resources/authentication/signup')
    try {
      const authResponse = await axios.post(process.env.MSUSERURL + ':' + process.env.MSUSERPORT + '/resources/authentication/signup', req.body, { headers: req.headers });
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


  export const SignIn = async (req: Request) => {
    try {
      const authResponse = await axios.post(process.env.MSUSERURL + ':' + process.env.MSUSERPORT + '/resources/authentication/signin', req.body, { headers: req.headers });
      return Promise.resolve(authResponse.data);

    } catch (e) {
      // console.log('roshanError', e)
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
  export const SignInV2 = async (req: Request) => {
    try {
      const authResponse = await axios.post(process.env.MSUSERURL + ':' + process.env.MSUSERPORT + '/resources/authentication/osignin', req.body, { headers: req.headers });
      return Promise.resolve(authResponse.data);

    } catch (e) {
      // console.log('roshanError', e)
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

  export const ForgotPassword = async (req: Request) => {
    console.log('RRRROOOORORORORO', req.body)
    try {
      const authResponse = await axios.post(process.env.MSUSERURL + ':' + process.env.MSUSERPORT + '/resources/authentication/forgotpassword', req.body, { headers: req.headers });
      return Promise.resolve({
        message: authResponse.data.message,
      });

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

  export const Users = async (req: Request) => {
    console.log('headers', req.headers)
    try {

      const authResponse = await axios.get('http://localhost:4000/resources/authentication/users', { headers: req.headers });

      return Promise.resolve({
        message: "data extracted",
        data: authResponse.data.data
        // url: authResponse.data.url,
      });

    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log('KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK')
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







  export const SetPassword = async (req: Request) => {
    console.log('asdf', process.env.MSUSERURL + ':' + process.env.MSUSERPORT + '/resources/authentication/setpassword')
    try {
      const authResponse = await axios.post(process.env.MSUSERURL + ':' + process.env.MSUSERPORT + '/resources/authentication/setpassword', req.body, { headers: req.headers });
      return Promise.resolve({
        message: authResponse.data.message,
      });

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



  export const Profile = async (req: Request) => {
    console.log('asdf', process.env.MSUSERURL + ':' + process.env.MSUSERPORT + '/resources/authentication/profile')
    try {
      const authResponse = await axios.get(process.env.MSUSERURL + ':' + process.env.MSUSERPORT + '/resources/authentication/profile', { headers: req.headers });
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


  export const ProfileUpdate = async (req: Request) => {
    console.log('asdf', process.env.MSUSERURL + ':' + process.env.MSUSERPORT + '/resources/authentication/profile')
    try {
      const authResponse = await axios.patch(process.env.MSUSERURL + ':' + process.env.MSUSERPORT + '/resources/authentication/profile', req.body, { headers: req.headers });
      return Promise.resolve({
        message: authResponse.data.message,
      });

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



  export const UpdatePassword = async (req: Request) => {
    console.log('asdf', process.env.MSUSERURL + ':' + process.env.MSUSERPORT + '/resources/authentication/updatepassword')
    try {
      const authResponse = await axios.patch(process.env.MSUSERURL + ':' + process.env.MSUSERPORT + '/resources/authentication/updatepassword', req.body, { headers: req.headers });
      return Promise.resolve({
        message: authResponse.data.message,
      });

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
