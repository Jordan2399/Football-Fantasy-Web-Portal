"use client";
import React from "react";
import { CardProps } from "@/components/user/cards/type";
import { HistoryCard } from "@/components/user/cards/history.card";
import { OngoingCard } from "@/components/user/cards/ongoing.card";
import { UpcomingCard } from "@/components/user/cards/upcoming.card";

export const UserCard: React.FC<CardProps> = (props) => {
  return (
    <>
      {props.variation === "history" ? (
        <HistoryCard {...props} />
      ) : props.variation === "ongoing" ? (
        <OngoingCard {...props} />
      ) : props.variation === "upcoming" ? (
        <UpcomingCard {...props} />
      ) : null}
    </>
  );
};
