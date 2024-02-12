"use client";
import React from "react";
import Link from "next/link";
import { CardProps } from "@/components/user/cards/type";

export const UpcomingCard: React.FC<CardProps> = (props) => {
  const getTime = (time: string) => {
    const formattedDate = new Date(time).toLocaleString("en-US");
    return formattedDate
  }
  return (
    <Link
      href={
        props.upcoming?.myteam_status
          ? ""
          : `/dashboard/match/${props.upcoming?._id}?type=0`
      }
      className={
        "px-4 rounded-md flex flex-row items-center justify-between md:w-[605px] w-full   h-[130px] ring-1 ring-slate-400"
      }
    >
      <div className={"text-sm font-bold w-fit flex flex-col items-start py-4"}>

        <p>{getTime(props.upcoming?.match_time || '')}</p>
        {/* <p>1 May</p> */}
      </div>
      <div className={"w-fit flex flex-row gap-6 items-center justify-between"}>
        <div
          className={
            "w-[40%] py-2 flex flex-row items-center gap-2 justify-start"
          }
        >
          <img
            className={"w-[36px] h-[36px]"}
            src={`${process.env.NEXT_PUBLIC_IMAGEURL}${props.upcoming?.team1?.image}`}
            alt={"club1.png"}
          />
          {/* <img width={"40px"} height={"40px"} src={"/club2.png"} alt={"logo"} /> */}

          <p>{props.upcoming?.team1?.name}</p>
        </div>
        <div
          className={
            "w-[20%] flex flex-row items-center justify-center text-[16px] font-bold"
          }
        >
          VS
        </div>
        <div
          className={"w-[40%] flex flex-row items-center gap-2 justify-start"}
        >
          <img className={"w-[36px] h-[36px]"} src={`${process.env.NEXT_PUBLIC_IMAGEURL}${props.upcoming?.team2?.image}`} alt={"club1.png"} />
          {/* <img width={"40px"} height={"40px"} src={"/club1.png"} alt={"logo"} /> */}
          <p>{props.upcoming?.team2?.name}</p>
        </div>
      </div>
      <div
        className={
          "w-fit h-full  flex flex-col items-center gap-2 justify-center"
        }
      >
        {props.upcoming?.myteam_status ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8 text-green-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className={"text-green-800 text-sm font-medium"}>Team Formed</p>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-red-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <p className={"text-red-800 text-sm font-medium"}>Not Formed</p>
          </>
        )}
      </div>
    </Link>
  );
};
