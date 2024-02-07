import api from "@/services/config";
import { PlayerServiceType } from "@/services/player/type";

export namespace PlayerServices {
  export const List = async (data: {
    match_id: string;
    player_type: string;
  }): Promise<PlayerServiceType.Player[]> => {
    try {
      const res = await api.get(
        `/current_match_players?match_id=${data.match_id}&player_type=${data.player_type}`
      );
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  export const AllList = async (): Promise<PlayerServiceType.AllPlayer[]> => {
    try {
      const res = await api.get(`/player`);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  export const PlayerGame = async (
    data: PlayerServiceType.Data
  ): Promise<PlayerServiceType.res> => {
    try {
      const res = await api.post(`/user/fantasy_team`, data);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  export const Create = async (
    data: PlayerServiceType.Create
  ): Promise<PlayerServiceType.res> => {
    try {
      const res = await api.post(`/player`, data);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  export const Delete = async (data: {
    _id: string;
  }): Promise<PlayerServiceType.res> => {
    try {
      const res = await api.delete(`/player${data._id}`);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
