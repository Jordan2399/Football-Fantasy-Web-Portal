"use client";

import { useSearchParams } from "next/navigation";
import { MatchViewScreen } from "@/screen/user/match/match.view.screen";
import { MatchTeamCreateScreen } from "@/screen/user/match/match.team.create.screen";

export default function Page({ params }: { params: { id: string } }) {
  const QType = useSearchParams().get("type");
  return (
    <>
      {QType === "1" ? (
        <MatchViewScreen id={params.id} />
      ) : QType === "0" ? (
        <MatchTeamCreateScreen id={params.id} />
      ) : null}
    </>
  );
}
