import { HTMLAttributes } from "react";
import { MatchServicesType } from "@/services/match/type";
import { AccountServiceType } from "@/services/account/type";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variation: "history" | "ongoing" | "upcoming";
  ongoing?: MatchServicesType.OngoingMatchResponse;
  upcoming?: MatchServicesType.UpcomingMatch;
  history?: AccountServiceType.Match;
}
