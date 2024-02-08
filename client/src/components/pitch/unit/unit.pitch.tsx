"use client";
import Image from "next/image";
import shirt from ".././../../assets/shirt.webp";
import React from "react";

import { PlayerServiceType } from "@/services/player/type";

export const UnitPitch: React.FC<PlayerServiceType.Player> = (props) => {
  return (
    <div className="unit">
      <Image className="shirt" src={shirt} alt="" />
      <div className="details">
        <div className="name">{props.name}</div>
        <div className="value">{props.player_type}</div>
      </div>
    </div>
  );
};
