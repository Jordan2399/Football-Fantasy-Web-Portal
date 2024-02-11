"use client";
import { UserCard } from "@/components/user/cards/card";
import { Select } from "@/components/select";
import { useQuery } from "@tanstack/react-query";
import { MatchServices } from "@/services/match/match.services";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export const UserDashboardScreen = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = useSearchParams().get("page");
  const limit = useSearchParams().get("limit");
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const { data } = useQuery({
    queryKey: ["ongoing_match"],
    queryFn: MatchServices.OngoingMatch,
  });
  const { data: data2, refetch } = useQuery({
    queryKey: ["upcoming_match"],
    queryFn: () =>
      MatchServices.UpcomingMatch({
        page_no: (page as string) || "1",
        page_size: (limit as string) || "8",
      }),
  });
  useEffect(() => {
    router.push(pathname + "?" + createQueryString("limit", "8"), {
      scroll: false,
    });
  }, []);
  useEffect(() => {
    router.push(pathname + "?" + createQueryString("page", "1"), {
      scroll: false,
    });
  }, []);
  useEffect(() => {
    refetch().then((r) => r);
  }, [limit, page]);
  return (
    <div className={"w-full h-fit flex flex-col gap-2 py-[26px]"}>
      <div className={"bg-white shadow-md rounded-md w-full h-auto p-8"}>
        <h2 className={"text-xl font-bold text-slate-900"}>Ongoing Matches</h2>
        <div className={"mt-4 flex flex-wrap gap-4"}>
          {data?.map((value, index) => (
            <UserCard
              key={index}
              ongoing={{
                ...value,
              }}
              variation={"ongoing"}
            />
          ))}
        </div>
      </div>
      <div
        className={
          "flex flex-col items-start justify-between bg-white shadow-md rounded-md w-full h-auto p-8"
        }
      >
        <h2 className={"text-xl font-bold text-slate-900"}>Upcoming Matches</h2>
        <div className={"mt-4 flex flex-wrap gap-4"}>
          {data2?.matches?.map((value, index) => (
            <UserCard
              key={index}
              upcoming={{
                ...value,
              }}
              variation={"upcoming"}
            />
          ))}
        </div>

        <div
          className={"w-full h-[80px] flex flex-row items-end justify-between"}
        >
          <div>
            <Select
              innerLabel={"limit"}
              onChange={(event) => {
                router.push(
                  pathname +
                    "?" +
                    createQueryString("limit", event.target.value),
                  {
                    scroll: false,
                  }
                );
              }}
              option={[
                {
                  id: "8",
                  label: "8",
                },
                {
                  id: "16",
                  label: "16",
                },
                {
                  id: "32",
                  label: "32",
                },
                {
                  id: "64",
                  label: "64",
                },
              ]}
              variation={"standard"}
              label={"Limit"}
            />
          </div>
          <div className={"flex flex-row gap-4 items-center justify-between"}>
            <button
              disabled={!(Number(page) > 1)}
              onClick={() => {
                const previousPage = String(Number(page) - 1);
                router.push(
                  pathname + "?" + createQueryString("page", previousPage),
                  {
                    scroll: false,
                  }
                );
              }}
              className={
                "text-sm font-medium w-[100px] px-3 py-3 bg-slate-300 rounded-md"
              }
            >
              Previous
            </button>
            <button
              disabled={Number(data2?.total_pages) > Number(page)}
              onClick={() => {
                const nextPage = String(Number(page) + 1);
                router.push(
                  pathname + "?" + createQueryString("page", nextPage),
                  {
                    scroll: false,
                  }
                );
              }}
              className={
                "text-sm text-white font-medium w-[100px] px-3 py-3 bg-blue-600 rounded-md"
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
