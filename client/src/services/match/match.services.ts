import api from "@/services/config";
import { MatchServicesType } from "@/services/match/type";

export namespace MatchServices {
  export const OngoingMatch = async (): Promise<
    MatchServicesType.OngoingMatchResponse[]
  > => {
    try {
      const res = await api.get("/user/ongoing_match");
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  export const OngoingMatchDetails = async (data: {
    id: string;
  }): Promise<MatchServicesType.MatchDetails> => {
    try {
      const res = await api.get(`/event/${data.id}`);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  export const FTActivityDetails = async (data: {
    id: string;
  }): Promise<MatchServicesType.FantasyTeam> => {
    try {
      const res = await api.get(`/user/fantasy_team_score?match_id=${data.id}`);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  export const PlayerScore = async (data: {
    id: string;
  }): Promise<MatchServicesType.PlayerScore[]> => {
    try {
      const res = await api.get(`/match/scoreboard?match_id=${data.id}`);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  export const UpcomingMatch = async (data?: {
    page_no: string | number;
    page_size: string | number;
  }): Promise<MatchServicesType.UpcomingMatchResponse> => {
    try {
      const res = await api.get(
        `/user/upcoming_match?page_no=${data?.page_no}&page_size=${data?.page_size}`
      );
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  export const Create = async (data: MatchServicesType.CreateMatch) => {
    try {
      const res = await api.post(`/match`, data);
      return Promise.resolve(res.data);
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
