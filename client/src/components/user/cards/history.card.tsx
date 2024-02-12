"use client";
import React from "react";
import { CardProps } from "@/components/user/cards/type";
import Link from "next/link";

export const HistoryCard: React.FC<CardProps> = (props) => {
  return (
    <Link
      href={"#"}
      className={
        "rounded-md flex flex-row items-center justify-between md:w-[600px] w-full  px-3.5 h-[100px] ring-1 ring-slate-400"
      }
    >
      <div className={"w-[32.5%]"}>
        <div className={"flex flex-row items-center justify-between gap-1.5"}>
          <div
            className={
              "flex flex-row items-center justify-center p-1.5 w-[40px] h-[40px] rounded-full  bg-green-100 font-medium text-green-800"
            }
          >
            {props.history?.team1.goal}
          </div>
          <img width={"40px"} height={"40px"} src={"/club1.png"} alt={"logo"} />
          <p className={"text-slate-700 text-[16px] font-bold"}>
            {props.history?.team1.name}
          </p>
        </div>
      </div>
      <div className={"w-[5%]"}>
        <p className={"text-slate-900 text-[16px] font-bold"}>VS</p>
      </div>
      <div className={"w-[32.5%]"}>
        <div className={"flex flex-row items-center justify-between gap-1.5"}>
          <div
            className={
              "flex flex-row items-center justify-center p-1.5 w-[40px] h-[40px] rounded-full  bg-red-100 font-medium text-red-800"
            }
          >
            {props.history?.team2.goal}
          </div>
          <img width={"40px"} height={"40px"} src={"/club2.png"} alt={"logo"} />
          <p className={"text-slate-800 text-[16px] font-bold"}>
            {props.history?.team2.name}
          </p>
        </div>
      </div>
    </Link>
  );
};
