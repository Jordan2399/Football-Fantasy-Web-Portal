"use client";
import { CpCard } from "@/components/cp/cards/card";
import Link from "next/link";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ClubServices } from "@/services/club/club.services";
import { ClubServicesType } from "@/services/club/type";

export const Clubs = () => {
  const { data, refetch } = useQuery({
    queryKey: ["clubList"],
    queryFn: async () => ClubServices.List(),
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
      ClubServices.Delete({
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
        <h2 className={"text-xl font-bold text-slate-900"}>Clubs List</h2>
        <Link
          href={"/system/dashboard/clubs/create"}
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
          variation={"club"}
          club={{
            name: value.name,
            image: `${process.env.NEXT_PUBLIC_IMAGEURL}${value.image}`,
            id: value._id,
          }}
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
