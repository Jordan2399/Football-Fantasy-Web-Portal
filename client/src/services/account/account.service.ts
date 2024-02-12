import api from "@/services/config";
import { AccountServiceType } from "@/services/account/type";

export namespace AccountService {
  export const history = async (): Promise<AccountServiceType.MatchHistory> => {
    try {
      const res = await api.get("/user/history");
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  export const UpdateProfile = async () => {
    try {
      const res = await api.get("/user/history");
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
