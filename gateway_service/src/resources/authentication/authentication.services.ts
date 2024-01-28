import { Request } from "express";
import { userModel } from "../../database/models/user/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userTypeModel } from "../../database/models/userType/userType.model";
import axios from "axios";
import { AxiosError } from "axios";
import { error } from "console";

export namespace AuthenticationServices {
  export const SignUp = async (req: Request) => {
    try {
      const check_email = await userModel.User.findOne({
        email: req.body?.email,
      });
      const check_username = await userModel.User.findOne({
        username: req.body?.username,
      });
      if (!check_email && !check_username) {
        const user_details = req.body;
        delete user_details?.cnf_password;
        const new_user = new userModel.User(user_details);
        const save_user = await new_user.save();


        // Create user_type entry with uid and role
        console.log(save_user._id)
        const user_type_entry = new userTypeModel.UserType({
          uid: save_user._id, // assuming _id is the user ID
          role: req.body.role, // replace with the actual role
        });
        await user_type_entry.save();

        return Promise.resolve({
          "message": "signup successful",
          "url": "/auth/sign-in"
        });

      }
      if (check_email) {
        return Promise.reject({
          code: 400,
          http_status_code: 409,
          error: {
            message: "User Email already exist",
            path: "email",
          }
        });
      }
      if (check_username) {
        return Promise.reject({
          code: 400,
          http_status_code: 409,
          error: {
            message: "Username already exist",
            path: "username"
          },
        });
      }
    } catch (e) {
      return Promise.reject(e);
    }
  };


  export const SignIn = async (req: Request) => {
    try {

      console.log('headers', req.headers)

      const authResponse = await axios.post('http://localhost:4000/resources/authentication/signin', req.body);

      return Promise.resolve({
        message: "Sign in successful ",
        token: authResponse.data.token,
        url: authResponse.data.url,
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
}