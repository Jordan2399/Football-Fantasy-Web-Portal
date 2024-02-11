"use client";
import React, { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { PlayerServiceType } from "@/services/player/type";

interface UserPlayerProps extends PlayerServiceType.Player {}

export const UserPlayer: React.FC<UserPlayerProps> = (props) => {
  const [data, setData] = useLocalStorage<PlayerServiceType.Player[]>(
    props.player_type,
    []
  );
  const isDisable =
    (props.player_type === "goalkeeper" && data.length >= 1) ||
    (props.player_type === "defender" && data.length >= 4) ||
    (props.player_type === "midfielder" && data.length >= 4) ||
    (props.player_type === "forward" && data.length >= 4);

  useEffect(() => {}, [data, props.player_type]);

  return (
    <div className="p-2 flex flex-row w-full h-[40px] items-center justify-between">
      <div>
        <div>{props.name}</div>
      </div>
      <div
        className={"flex flex-row item-center justify-between w=[30%] gap-2 "}
      >
        <button
          disabled={isDisable}
          onClick={() => {
            setData([...data, { ...props }]);
          }}
        >
          Add
        </button>
        <button
          disabled={!isDisable}
          onClick={() => {
            const filteredData = data.filter(
              (value) => value._id !== props._id
            );
            setData(filteredData);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
