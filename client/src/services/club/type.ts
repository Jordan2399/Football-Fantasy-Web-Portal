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
  export interface Details {
    _id: string;
    name: string;
    image: string;
    players: [];
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
