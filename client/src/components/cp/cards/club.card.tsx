"use client";
import { CardProps } from "@/components/cp/cards/type";
import React from "react";
import Link from "next/link";
import { Edit, Trash } from "iconsax-react";
import { ClubServices } from "@/services/club/club.services";

export const ClubCard: React.FC<CardProps> = (props) => {
  return (
    <div
      className={
        "cursor-pointer bg-white rounded-md ring-1 ring-slate-200 flex flex-row items-center justify-between w-full h-[100px] py-2 pl-2 pr-4"
      }
    >
      <div className={"flex flex-row gap-2 items-center justify-start"}>
        <img
          className={"w-[80px] h-[80px]"}
          src={props.club?.image}
          alt={"club-logo"}
        />

        <h2 className={"text-xl font-medium"}>{props.club?.name}</h2>
      </div>
      <div
        className={
          "flex flex-row items-center justify-end gap-4   w-[40px] h-[40px]"
        }
      >
        <Link href={`/system/dashboard/clubs/edit/${props.club?.id}`}>
          <Edit color="#334155" />
        </Link>
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
