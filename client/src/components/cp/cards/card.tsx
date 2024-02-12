"use client";
import React from "react";
import { CardProps } from "@/components/cp/cards/type";
import { ClubCard } from "@/components/cp/cards/club.card";
import { PlayerCard } from "@/components/cp/cards/player.card";
import { MatchCard } from "@/components/cp/cards/match.card";

export const CpCard: React.FC<CardProps> = (props) => {
  return (
    <>
      {props.variation === "club" ? (
        <ClubCard {...props} />
      ) : props.variation === "player" ? (
        <PlayerCard {...props} />
      ) : props.variation === "match" ? (
        <MatchCard {...props} />
      ) : (
        ""
      )}
    </>
  );
};
