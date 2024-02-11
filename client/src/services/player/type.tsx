export namespace PlayerServiceType {
  export interface Player {
    _id: string;
    name: string;
    age: string;
    player_type: string;
    club_id: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface res {
    message: string;
  }
  export interface Data {
    match_id: string;
    players: string[];
  }
}
