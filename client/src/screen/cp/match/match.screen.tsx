"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { ClubServices } from "@/services/club/club.services";
import { ClubServicesType } from "@/services/club/type";
import Link from "next/link";
import { CpCard } from "@/components/cp/cards/card";
import { MatchServices } from "@/services/match/match.services";

export const MatchScreen = () => {
  const { data, refetch } = useQuery({
    queryKey: ["matchList"],
    queryFn: async () => MatchServices.AllMatch(),
  });
  const { mutateAsync } = useMutation<
    ClubServicesType.List[],
    Error,
    {
      data: {
        _id: string;
      };
    }
  >({
    mutationFn: async (variables) =>
      MatchServices.Delete({
        _id: variables.data._id,
      }),
    onSuccess: async () => {
      await refetch();
    },
  });
  return (
    <div
      className={
        "flex flex-col gap-2 h-auto items-center justify-center w-full py-6 mx-auto my-auto"
      }
    >
      <div
        className={"flex flex-row items-center justify-between w-full h-[60px]"}
      >
        <h2 className={"text-xl font-bold text-slate-900"}>Match List</h2>
        <Link
          href={"/system/dashboard/matches/create"}
          className={
            "rounded-md text-blue-600 w-fit px-3 py-1.5 ring-1 ring-blue-600"
          }
        >
          ADD
        </Link>
      </div>
      {data?.map((value, index) => (
        <CpCard
          key={index}
          variation={"match"}
          match={{
            match: {
              team1: {
                name: value.team1.name,
                image: value.team1.image
              },
              team2:{
                name:value.team2.name,
                image: value.team2.image
              },
              match_time:value.match_time
            },

            id: value._id,
          }}
          // match={{
          //   name: "Club1",
          //   image: `http://localhost:4001${value}`,
          //   id: value._id,
          // }}
          onDeleteClub={async () => {
            await mutateAsync({
              data: {
                _id: value._id,
              },
            });
          }}
        />
      ))}
    </div>
  );
};
