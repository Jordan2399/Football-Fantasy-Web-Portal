"use client";

import Link from "next/link";
import { Edit, Trash } from "iconsax-react";
import React from "react";
import { CardProps } from "@/components/cp/cards/type";

export const MatchCard: React.FC<CardProps> = (props) => {
  const getTime = (time: string) => {
    const formattedDate = new Date(time).toLocaleString("en-US");
    return formattedDate
  }


  console.log('data of match', props.match?.match.team1)
  return (
    <div
      className={
        "cursor-pointer bg-white rounded-md ring-1 ring-slate-200 flex flex-row items-center justify-between w-full h-[100px] py-2 pl-2 pr-4"
      }
    >
      <div
        className={"flex flex-row gap-2 items-center w-[80%] justify-between"}
      >
        <div
          className={"w-[15%] flex flex-row gap-2 items-center justify-start"}
        >
          <img
            className={"w-[80px] h-[80px]"}
            // src=`${process.env.NEXT_PUBLIC_IMAGEURL} props.match?.match.team1?.image`
            src={`${process.env.NEXT_PUBLIC_IMAGEURL}${props.match?.match.team1.image}`}
            alt={"club-logo"}
          />
          <h2 className={"text-xl font-medium"}>{props.match?.match.team1.name}</h2>
        </div>
        <div className={"w-[10%] text-xl font-bold"}>VS</div>

        <div
          className={"w-[15%]  flex flex-row gap-2 items-center justify-start"}
        >
          <img
            className={"w-[80px] h-[80px]"}
            src={`${process.env.NEXT_PUBLIC_IMAGEURL}${props.match?.match.team2.image}`}
            // src={props.match?.image}
            alt={"club-logo"}
          />
          <h2 className={"text-xl font-medium"}>{props.match?.match.team2.name}</h2>
        </div>

        <p className={"text-green-800"}>{getTime(props.match?.match.match_time || '')}</p>
      </div>
      <div
        className={
          "flex flex-row items-center justify-end gap-4   w-[40px] h-[40px]"
        }
      >
        {/* <Link href={`/system/dashboard/clubs/edit/${props.match?.id}`}>
          <Edit color="#334155" />
        </Link> */}
        <div onClick={props.onDeleteClub} className={"cursor-pointer"}>
          <Trash
            color="#b91c1c
"
          />
        </div>
      </div>
    </div>
  );
};
