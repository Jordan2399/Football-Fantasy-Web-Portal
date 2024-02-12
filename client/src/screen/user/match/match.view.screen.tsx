"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { MatchServices } from "@/services/match/match.services";
import { ElapsedTimeCounter } from "@/utils/timer/timer";

interface MatchViewScreenProps {
  id: string;
}

export const MatchViewScreen: React.FC<MatchViewScreenProps> = (props) => {
  const matchDetails = useQuery({
    queryKey: ["match-details"],
    queryFn: () =>
      MatchServices.OngoingMatchDetails({
        id: props.id,
      }),
  });

  const matchDetailsTeam = useQuery({
    queryKey: ["match-details-team"],
    queryFn: () =>
      MatchServices.FTActivityDetails({
        id: props.id,
      }),
  });
  const matchDetailsPlayerScore = useQuery({
    queryKey: ["match-details-playerScore"],
    queryFn: () =>
      MatchServices.PlayerScore({
        id: props.id,
      }),
  });

  return (
    <div className="rounded-md shadow-md bg-white w-full h-fit flex flex-col">
      <div className="text-slate-600 text-xl font-bold w-full flex-row flex items-center justify-center h-[80px]">
        <ElapsedTimeCounter
          targetDate={matchDetails.data?.match_time as string}
        />
      </div>
      <div className="flex flex-row items-start justify-between p-2 w-full h-full">
        <div className="flex flex-col items-center w-[45%] gap-6">
          <div className="flex flex-row w-fit h-fit items-center justify-center gap-2">
            <div className={"w-auto"}></div>
            <div className={"h-full flex flex-col items-center w-auto"}>
              <img
                className="w-16 h-16"
                src={`${process.env.NEXT_PUBLIC_IMAGEURL}${matchDetails.data?.team1.image}`}
                alt="club1"
              />
              <h3 className={"text-[20x] text-slate-900 font-bold "}>
                {matchDetails.data?.team1.name}
              </h3>
            </div>
            <div className={"w-auto self-center pb-5"}>
              <div className="text-xl font-medium flex flex-row items-center justify-center rounded-full w-12 h-12 p-2 bg-green-100 text-green-800">
                {matchDetails.data?.team1.goal}
              </div>
            </div>
          </div>
          <div className={"rounded-md w-[80%] h-[400px] ring-1 ring-slate-400"}>
            <table className={" w-full h-auto"}>
              <tbody>
                {matchDetails.data?.team1.activities.map((value, index) => (
                  <tr key={index}>
                    <td className={"px-3 py-2 text-start"}>{value.name}</td>
                    <td className={"px-3 py-2 text-start"}>
                      {value.event_type}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-row h-[100px] items-start justify-center w-[10%]">
          <h3 className="text-center text-xl text-slate-900 font-semibold">
            VS
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center w-[45%] gap-6">
          <div className="flex flex-row w-fit h-fit items-center justify-center gap-2">
            <div className={"w-auto"}></div>
            <div className={"w-auto self-center pb-5"}>
              <div className="text-xl font-medium flex flex-row items-center justify-center rounded-full w-12 h-12 p-2 bg-green-100 text-green-800">
                {matchDetails.data?.team2.goal}
              </div>
            </div>
            <div className={"h-full flex flex-col items-center w-auto"}>
              <img
                className="w-16 h-16"
                src={`http://localhost:4001${matchDetails.data?.team2.image}`}
                alt="club1"
              />
              <h3 className={"text-[20x] text-slate-900 font-bold "}>
                {matchDetails.data?.team2.name}
              </h3>
            </div>
          </div>
          <div className={"rounded-md w-[80%] h-[400px] ring-1 ring-slate-400"}>
            <table className={" w-full h-auto"}>
              <tbody>
                {matchDetails.data?.team2.activities.map((value, index) => (
                  <tr>
                    <td className={"px-3 py-2 text-start"}>{value.name}</td>
                    <td className={"px-3 py-2 text-start"}>
                      {value.event_type}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={"p-7 w-full h-[500px]"}>
        <div
          className={
            "rounded-md ring-1 ring-slate-400 p-2 w-full flex flex-row gap-2 items-start justify-between"
          }
        >
          <div className={"flex flex-col items-start gap-2 w-[60%] h-full"}>
            <div
              className={
                "flex flex-col items-start gap-2 rounded-md w-full h-[400px] ring-1 ring-slate-400"
              }
            >
              <div
                className={
                  "w-full h-fit flex flex-row items-center justify-between px-3 py-3"
                }
              >
                <h3 className={"text-[18px] font-bold text-slate-700 "}>
                  {matchDetailsTeam.data?.team_name}
                </h3>
                <div
                  className={
                    "bg-blue-50 flex flex-row items-center justify-center p-2 rounded-md ring-blue-600 ring-1 w-[60px] h-[40px]"
                  }
                >
                  {matchDetailsTeam.data?.score}
                </div>
              </div>
              <table className={" w-full h-auto"}>
                <tbody>
                  {matchDetailsTeam.data?.activities?.map((value, index) => (
                    <tr key={index}>
                      <td className={"px-3 py-2 text-start"}>
                        {value.player_name}
                      </td>
                      <td className={"px-3 py-2 text-start"}>
                        {value.activity_type}
                      </td>
                      <td className={"px-3 py-2 text-start"}>{value.point}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className={"flex flex-col items-start gap-2 w-[40%] h-full"}>
            <div
              className={
                "flex flex-col items-start gap-2 rounded-md w-full h-[400px] ring-1 ring-slate-400"
              }
            >
              <div
                className={
                  "w-full h-fit flex flex-row items-center justify-between px-3 py-3"
                }
              >
                <h3 className={"text-[18px] font-bold text-slate-700 "}>
                  My Fantasy Team
                </h3>
              </div>
              <table className={" w-full h-auto"}>
                <tbody>
                  {matchDetailsPlayerScore.data?.map((value, index) => (
                    <tr key={index}>
                      <td className={"px-3 py-2 text-start"}>{value.name}</td>
                      <td className={"px-3 py-2 text-start"}>{value.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
