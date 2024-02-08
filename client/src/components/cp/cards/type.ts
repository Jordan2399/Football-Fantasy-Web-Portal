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
  onDeleteClub: () => void;
}
