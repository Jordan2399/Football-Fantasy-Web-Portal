import axios, { AxiosError } from "axios";
import api from "@/services/config";
import { ClubServicesType } from "@/services/club/type";

export namespace ClubServices {
  export const Create = async (
    data: ClubServicesType.Create
  ): Promise<ClubServicesType.ClubRes> => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("image", data.image as File);
      const res = await api.post("/club", formData);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e as AxiosError);
    }
  };

  export const List = async (): Promise<ClubServicesType.List[]> => {
    try {
      const res = await api.get("/club");
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e as AxiosError);
    }
  };
  export const ClubDetails = async (data: {
    _id: string;
  }): Promise<ClubServicesType.Details> => {
    try {
      const res = await api.get(`/club?id=${data._id}`);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e as AxiosError);
    }
  };
  export const Delete = async (data: { _id: string }) => {
    try {
      const res = await api.delete(`/club?id=${data._id}`);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e as AxiosError);
    }
  };
  export const Update = async (
    data: ClubServicesType.Update
  ): Promise<ClubServicesType.ClubRes> => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("image", data.image as File);
      const res = await api.patch(`/club?id=${data._id}`, formData);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e as AxiosError);
    }
  };
}
