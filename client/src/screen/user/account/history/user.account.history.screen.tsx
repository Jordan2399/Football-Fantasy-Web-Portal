"use client";
import { Stats } from "@/components/stats/stats";
import { UserCard } from "@/components/user/cards/card";
import { useQuery } from "@tanstack/react-query";
import { AccountService } from "@/services/account/account.service";

export const UserAccountHistoryScreen = () => {
  const { data } = useQuery({
    queryKey: ["history"],
    queryFn: AccountService.history,
  });
  return (
    <div className={"w-full flex flex-col gap-4 "}>
      <div className={"flex flex-row items-center justify-start gap-4"}>
        <Stats
          title={"Total Score"}
          value={data?.stat?.total_score as string}
        />
        <Stats
          title={"Total Match"}
          value={data?.stat?.total_match as string}
        />
      </div>
      {data?.history?.map((value, index) => (
        <UserCard key={index} variation={"history"} history={value} />
      ))}
    </div>
  );
};
