"use client";
import { Pitch } from "@/components/pitch/pitch";
import { ElapsedTimeCounter } from "@/utils/timer/timer";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { MatchServices } from "@/services/match/match.services";
import { UserPlayer } from "@/components/player/user/player";
import { PlayerServices } from "@/services/player/player.services";
import { useReadLocalStorage } from "usehooks-ts";
import { PlayerServiceType } from "@/services/player/type";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
interface MatchTeamCreateScreenProps {
  id: string;
}
export const MatchTeamCreateScreen: React.FC<MatchTeamCreateScreenProps> = (
  props
) => {
  const initState = [
    {
      _id: "",
      name: "Player Name",
      age: "",
      player_type: "Type",
      club_id: "",
      createdAt: "",
      updatedAt: "",
    },
  ];
  const router = useRouter();
  const DataGoalkipper =
    useReadLocalStorage<PlayerServiceType.Player[]>("goalkipper");
  const DataDefender =
    useReadLocalStorage<PlayerServiceType.Player[]>("defender");

  const DataMidfielder =
    useReadLocalStorage<PlayerServiceType.Player[]>("midfielder");

  const DataForward =
    useReadLocalStorage<PlayerServiceType.Player[]>("forward");

  const uniqueIdSet = new Set<string>(
    [
      ...((DataGoalkipper as PlayerServiceType.Player[]) || initState),
      ...((DataDefender as PlayerServiceType.Player[]) || initState),
      ...((DataMidfielder as PlayerServiceType.Player[]) || initState),
      ...((DataForward as PlayerServiceType.Player[]) || initState),
    ].map((player) => player._id)
  );

  const uniqueIds: string[] = Array.from(uniqueIdSet);

  console.log(uniqueIds);
  const matchDetails = useQuery({
    queryKey: ["match-details"],
    queryFn: () =>
      MatchServices.OngoingMatchDetails({
        id: props.id,
      }),
  });
  const Goalkipper = useQuery({
    queryKey: ["goalkipper"],
    queryFn: () =>
      PlayerServices.List({
        match_id: props.id,
        player_type: "goalkipper",
      }),
  });
  const Defender = useQuery({
    queryKey: ["defender"],
    queryFn: () =>
      PlayerServices.List({
        match_id: props.id,
        player_type: "defender",
      }),
  });
  const Midfielder = useQuery({
    queryKey: ["midfielder"],
    queryFn: () =>
      PlayerServices.List({
        match_id: props.id,
        player_type: "midfielder",
      }),
  });
  const Forward = useQuery({
    queryKey: ["forward"],
    queryFn: () =>
      PlayerServices.List({
        match_id: props.id,
        player_type: "forward",
      }),
  });
  const create = useMutation<
    PlayerServiceType.res,
    Error,
    PlayerServiceType.Data
  >({
    mutationFn: (variables) => PlayerServices.PlayerGame(variables),
    onSuccess: (res) => {
      toast.success(res?.message);
      localStorage.clear();
      router.replace("/dashboard");
    },
  });
  return (
    <div
      className={"flex flex-col items-start justify-start gap-2 w-full h-full"}
    >
      <div className="rounded-md shadow-md bg-white w-full h-fit flex flex-col">
        <div className="text-slate-600 text-xl font-bold w-full flex-row flex items-center justify-center h-[80px]">
          <ElapsedTimeCounter
            targetDate={matchDetails.data?.match_time as string}
          />
        </div>
        <div
          className={
            "flex flex-row h-[120px] justify-center items-center px-6 py-4"
          }
        >
          <div className={"w-full h-fit flex flex-col items-center gap-2"}>
            <img
              className={"w-12 h-12"}
              src={`/api${matchDetails.data?.team1.image}`}
              alt={"club"}
            />
            <h2> {matchDetails.data?.team1.name}</h2>
          </div>
          <div>VS</div>
          <div className={"w-full h-fit flex flex-col items-center gap-2"}>
            <img
              className={"w-12 h-12"}
              src={`/api${matchDetails.data?.team2.image}`}
              alt={"club"}
            />
            <h2> {matchDetails.data?.team2.name}</h2>
          </div>
        </div>
      </div>
      <div
        className={
          " mt-5 w-full flex flex-row items-start justify-between gap-2"
        }
      >
        <div className={" w-[70%] h-fit"}>
          <Pitch />
        </div>
        <div
          style={{
            borderRadius: "6px",
          }}
          className={"rounded-md shadow-2xl w-[30%] h-fit"}
        >
          <div
            className={
              "p-2 flex flex-col items-start gap-2 w-full bg-white h-auto"
            }
          >
            <div className={"w-full h-full"}>
              <h3 className={"text-[18px] font-bold "}>Goalkeepers</h3>
              {Goalkipper.data?.map((value, index) => (
                <UserPlayer key={index} {...value} />
              ))}
            </div>
            <div className={"w-full h-full"}>
              <h3 className={"text-[18px] font-bold "}>Defender</h3>
              {Defender.data?.map((value, index) => (
                <UserPlayer key={index} {...value} />
              ))}
            </div>
            <div className={"w-full h-full"}>
              <h3 className={"text-[18px] font-bold "}>Midfielder</h3>
              {Midfielder.data?.map((value, index) => (
                <UserPlayer key={index} {...value} />
              ))}
            </div>
            <div className={"w-full h-full"}>
              <h3 className={"text-[18px] font-bold "}>Forward</h3>
              {Forward.data?.map((value, index) => (
                <UserPlayer key={index} {...value} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          " mt-5 w-full flex flex-row items-start justify-between gap-2"
        }
      >
        <button
          disabled={create.isPending || create.isSuccess}
          onClick={async () =>
            create.mutateAsync({
              match_id: props.id,
              players: uniqueIds,
            })
          }
          className={"text-white w-[200px] px-2 py-3 bg-blue-700"}
        >
          Create
        </button>
      </div>
    </div>
  );
};
