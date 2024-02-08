export namespace ClubServicesType {
  export interface List {
    _id: string;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
  }
  export interface Create {
    name: string;
    image: any;
  }
  export interface Player {
    _id: string;
    name: string;
    age: string;
    player_type: string;
  }

  export interface Details {
    _id: string;
    name: string;
    image: string;
    players: Player[];
  }
  export interface Update {
    _id: string;
    name: string;
    image: any;
  }
  export interface ClubRes {
    message: string;
    url: string;
  }
}
