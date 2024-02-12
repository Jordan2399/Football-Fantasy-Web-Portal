import api from "@/services/config";
import { AuthenticationServicesType } from "@/services/authentication/type";
import axios, { AxiosError } from "axios";

export namespace AuthenticationServices {
  export const SignIn = async (
    data: AuthenticationServicesType.SignInProps
  ): Promise<AuthenticationServicesType.SignInRes> => {
    try {
      const res = await api.post("/authentication/signin", data);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e as AxiosError);
    }
  };
  export const SignUp = async (
    data: AuthenticationServicesType.SignUpProps
  ): Promise<AuthenticationServicesType.SignUpRes> => {
    try {
      const res = await api.post("/authentication/signup", data);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e as AxiosError);
    }
  };
  export const ForgotPassword = async (
    data: AuthenticationServicesType.ForgotPasswordProps
  ): Promise<AuthenticationServicesType.ForgotPasswordRes> => {
    try {
      const res = await api.post("/authentication/forgotpassword", data);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e as AxiosError);
    }
  };
  export const SetNewPassword = async (
    data: AuthenticationServicesType.ForgotPasswordProps
  ): Promise<AuthenticationServicesType.ForgotPasswordRes> => {
    try {
      const res = await api.post("/authentication/forgotpassword", data);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e as AxiosError);
    }
  };

  export const Profile =
    async (): Promise<AuthenticationServicesType.UserProfile> => {
      try {
        const res = await api.get("/authentication/profile");
        return Promise.resolve(res.data.data);
      } catch (e) {
        return Promise.reject(e as AxiosError);
      }
    };
  export const ProfileUpdate = async (
    data: AuthenticationServicesType.UserProfileUpdate
  ): Promise<AuthenticationServicesType.UpdatedRes> => {
    try {
      const res = await api.patch("/authentication/profile", data);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e as AxiosError);
    }
  };

  export const ChangePassword = async (
    data: AuthenticationServicesType.ChangePassword
  ): Promise<AuthenticationServicesType.UpdatedRes> => {
    try {
      const res = await api.post("/authentication/updatepassword", data);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e as AxiosError);
    }
  };
}
