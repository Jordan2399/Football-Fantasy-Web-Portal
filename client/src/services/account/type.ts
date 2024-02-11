export namespace AccountServiceType {
  export interface Team {
    name: string;
    image: string;
    goal: string;
  }

  export interface Match {
    team1: Team;
    team2: Team;
    score: string;
  }

  export interface MatchHistory {
    stat: {
      total_score: string;
      total_match: string;
    };
    history: Match[];
  }
}
