"use client";
import React from "react";
import { CardProps } from "@/components/cp/cards/type";
import { ClubCard } from "@/components/cp/cards/club.card";

export const CpCard: React.FC<CardProps> = (props) => {
  return <>{props.variation === "club" ? <ClubCard {...props} /> : null}</>;
};
