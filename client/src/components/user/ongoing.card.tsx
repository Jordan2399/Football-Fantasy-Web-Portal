"use client";
import React from "react";
import Link from "next/link";
import { CardProps } from "@/components/user/cards/type";

export const OngoingCard: React.FC<CardProps> = (props) => {
  return (
    <Link
      href={`/dashboard/match/${props.ongoing?._id}?type=1`}
      className={
        "px-4 rounded-md flex flex-row items-center justify-between md:w-[400px] w-full   h-[130px] ring-1 ring-slate-400"
      }
    >
      <div className={"w-fit flex flex-col items-center justify-center py-4"}>
        <div className={"py-2 flex flex-row items-center gap-2 justify-start"}>
          <img
            className={"w-[36px] h-[36px]"}
            src={`/api${props.ongoing?.team1?.image}`}
            alt={"club1.png"}
          />
          <p>{props.ongoing?.team1.name}</p>
        </div>
        <div
          className={
            "w-full flex flex-row items-center justify-center text-[16px] font-bold"
          }
        >
          VS
        </div>
        <div className={"flex flex-row items-center gap-2 justify-start"}>
          <img
            className={"w-[36px] h-[36px]"}
            src={`/api${props.ongoing?.team2?.image}`}
            alt={"club1.png"}
          />
          <p>{props.ongoing?.team2.name}</p>
        </div>
      </div>
      <div
        className={"w-fit h-full  flex flex-col items-end gap-2 justify-center"}
      >
        <div
          className={
            "rounded-full flex flex-row items-center justify-center  h-[20px] px-[20px] text-blue-800 bg-blue-200  "
          }
        >
          {props.ongoing?.score}
        </div>
        <p className={"text-xs text-slate-400"}>{props.ongoing?.match_time}</p>
      </div>
    </Link>
  );
};
