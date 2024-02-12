import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variation: "club" | "player" | "match";
  club?: {
    name: string;
    image: string;
    id: string;
  };
  player?: {
    _id: string;
    name: string;
    age: string;
    player_type: string;
    club_id: {
      _id: string;
      name: string;
      image: string;
      createdAt: string;
      updatedAt: string;
    } | null;
  };
  match?: {
    match: {
      team1:{
        name:string,
        image:string
      },
      team2:{
        name:string
        image:string
      },
      match_time:string
    };
    // image: string;
    id: string;
  };
  // match?: {
  //   name: string;
  //   image: string;
  //   id: string;
  // };
  onDeleteClub?: () => void;
  onDeletePlayer?: () => void;
  onDeleteMatch?: () => void;
}
