export namespace MatchServicesType {
  export interface Team {
    _id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface OngoingMatchResponse {
    _id: string;
    team1: Team;
    team2: Team;
    match_time: string;
    team1players: string[];
    team2players: string[];
    status: string;
    createdAt: string;
    updatedAt: string;
    score: string;
  }

  export interface UpcomingMatch {
    _id: string;
    team1: Team;
    team2: Team;
    match_time: string;
    team1players: string[];
    team2players: string[];
    status: string;
    createdAt: string;
    updatedAt: string;
    myteam_status: boolean;
  }
  export interface UpcomingMatchResponse {
    matches: UpcomingMatch[];
    page_size: number;
    total_pages: number;
  }

  interface MDActivity {
    name: string;
    event_type: string;
  }

  export interface MDTeam {
    image: string;
    name: string;
    goal: number;
    activities: MDActivity[];
  }

  export interface MatchDetails {
    id: string;
    status: string;
    match_time: string;
    team1: MDTeam;
    team2: MDTeam;
  }

  export interface FTActivity {
    player_name: string;
    activity_type: string;
    point: string;
  }

  export interface FantasyTeam {
    score: string;
    team_name: string;
    activities: FTActivity[];
  }
  export interface PlayerScore {
    name: string;
    score: string;
  }
  export interface CreateMatch {
    team1: string;
    team2: string;
    team1players: string[];
    team2players: string[];
    match_time: string;
  }
  export interface CreateMatchRes {
    message: string;
    path: string;
    url: string;
  }
}
