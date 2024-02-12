"use client";
import { CardProps } from "@/components/cp/cards/type";
import React from "react";
import Link from "next/link";
import { Edit, Trash } from "iconsax-react";

export const PlayerCard: React.FC<CardProps> = (props) => {
  return (
    <div
      className={
        "cursor-pointer bg-white rounded-md ring-1 ring-slate-200 flex flex-row items-center justify-between w-full h-[100px] py-2 pl-3.5 pr-4"
      }
    >
      <div
        className={
          "w-[50%] flex flex-row gap-12 h-fit items-center justify-start"
        }
      >
        <div className={"flex flex-col gap-2 items-center justify-start"}>
          <img
            className={"w-[40px] h-[40px]"}
            src={`${process.env.NEXT_PUBLIC_IMAGEURL}${props.player?.club_id?.image}`}
            alt={"club-logo"}
          />
          <h2 className={"text-xl font-semibold"}>
            {props.player?.club_id?.name}
          </h2>
        </div>
        <div className={"flex flex-col items-center justify-center"}>
          <div className={"flex flex-col"}>
            <h2 className={"text-xl font-medium"}>{props.player?.name}</h2>
            <h2 className={"mt-2 text-sm font-medium"}>{props.player?.age}</h2>
            <h2 className={"text-sm font-medium"}>
              {props.player?.player_type}
            </h2>
          </div>
        </div>
      </div>
      <div
        className={
          "flex flex-row items-center justify-end gap-4   w-[40px] h-[40px]"
        }
      >
        <Link href={`/system/dashboard/players/edit/${props.player?._id}`}>
          <Edit color="#334155" />
        </Link>
        <div onClick={props.onDeletePlayer} className={"cursor-pointer"}>
          <Trash color="#b91c1c" />
        </div>
      </div>
    </div>
  );
};
