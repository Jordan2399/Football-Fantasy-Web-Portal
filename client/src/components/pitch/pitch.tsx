"use client";

import { UnitPitch } from "@/components/pitch/unit/unit.pitch";
import { useReadLocalStorage } from "usehooks-ts";
import { PlayerServiceType } from "@/services/player/type";

export const Pitch = () => {
  const goalkipper =
    useReadLocalStorage<PlayerServiceType.Player[]>("goalkipper");
  const defender = useReadLocalStorage<PlayerServiceType.Player[]>("defender");

  const midfielder =
    useReadLocalStorage<PlayerServiceType.Player[]>("midfielder");

  const forward = useReadLocalStorage<PlayerServiceType.Player[]>("forward");

  const pitchState = {
    _id: "",
    name: "Player Name",
    age: "",
    player_type: "Type",
    club_id: "",
    createdAt: "",
    updatedAt: "",
  };

  const renderUnit = (
    data: PlayerServiceType.Player[] | undefined,
    limit: number
  ) => {
    const units = [];

    // Check if data is undefined or empty
    if (!data || data.length === 0) {
      for (let i = 0; i < limit; i++) {
        units.push(<UnitPitch {...pitchState} key={i} />);
      }
    } else {
      // Render existing data up to the limit
      for (let i = 0; i < Math.min(limit, data.length); i++) {
        units.push(<UnitPitch key={i} {...data[i]} />);
      }

      // If there's still space, render additional empty units
      for (let i = data.length; i < limit; i++) {
        units.push(<UnitPitch {...pitchState} key={i} />);
      }
    }

    return units;
  };

  return (
    <div className=" select-none w-full m-0 bg-white shadow-2xl rounded-md">
      <div className="pitch">
        <div className="row">
          {renderUnit(goalkipper as PlayerServiceType.Player[], 1)}
        </div>
        <div className="row">
          {renderUnit(defender as PlayerServiceType.Player[], 4)}
        </div>
        <div className="row">
          {renderUnit(midfielder as PlayerServiceType.Player[], 4)}
        </div>
        <div className="row">
          {renderUnit(forward as PlayerServiceType.Player[], 2)}
        </div>
      </div>
    </div>
  );
};
