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
    data: string;
    url: string;
  }
  export interface Data {
    match_id: string;
    players: string[];
  }
  export interface Club {
    _id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface AllPlayer {
    _id: string;
    name: string;
    age: string;
    player_type: string;
    club_id: Club;
    createdAt: string;
    updatedAt: string;
  }
  export interface Create {
    name: string;
    age: string;
    player_type: string;
    club_id: string;
  }
}
