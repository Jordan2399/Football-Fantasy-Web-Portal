"use client";
import { CpCard } from "@/components/cp/cards/card";
import Link from "next/link";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ClubServices } from "@/services/club/club.services";
import { ClubServicesType } from "@/services/club/type";
import { PlayerServices } from "@/services/player/player.services";
import { PlayerServiceType } from "@/services/player/type";

export const PlayerScreen = () => {
  const { data, refetch } = useQuery({
    queryKey: ["player-list"],
    queryFn: async () => PlayerServices.AllList(),
  });

  const Delete = useMutation<
    PlayerServiceType.res,
    Error,
    {
      data: {
        _id: string;
      };
    }
  >({
    mutationFn: async (variables) =>
      PlayerServices.Delete({
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
        <h2 className={"text-xl font-bold text-slate-900"}>Player List</h2>
        <Link
          href={"/system/dashboard/players/create"}
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
          variation={"player"}
          player={{
            ...value,
          }}
          onDeletePlayer={async () => {
            await Delete.mutateAsync({
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
